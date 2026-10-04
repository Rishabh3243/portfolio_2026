import { sendGmailEmail, sendAcknowledgementEmail } from '../server/mailer.js';

/**
 * Universal JSON response helper compatible with Vercel serverless helper methods
 * and standard Node.js ServerResponse.
 */
function sendJson(res, statusCode, data) {
  if (typeof res.status === 'function' && typeof res.json === 'function') {
    return res.status(statusCode).json(data);
  }
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
  return res.end(JSON.stringify(data));
}

/**
 * Parses request body whether pre-parsed by Vercel or received as raw readable stream.
 */
async function parseBody(req) {
  if (req.body && typeof req.body === 'object') {
    return req.body;
  }
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }
  return new Promise((resolve) => {
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
    });
    req.on('end', () => {
      try {
        resolve(JSON.parse(raw || '{}'));
      } catch {
        resolve({});
      }
    });
    req.on('error', () => {
      resolve({});
    });
  });
}

/**
 * Vercel Serverless Function: POST /api/contact
 * Handles portfolio contact form submissions, dispatches primary notification
 * to Rishabh, and sends an automated confirmation email to the user.
 */
export default async function handler(req, res) {
  // Global CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Pre-flight OPTIONS handling
  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.end();
    return;
  }

  // Health / Readiness check via GET
  if (req.method === 'GET') {
    return sendJson(res, 200, {
      success: true,
      status: 'Contact API route is operational.',
      endpoint: '/api/contact',
      methods: ['POST', 'OPTIONS', 'GET'],
      timestamp: new Date().toISOString(),
    });
  }

  if (req.method !== 'POST') {
    return sendJson(res, 405, {
      success: false,
      error: 'Method Not Allowed. Use POST to submit messages.',
    });
  }

  try {
    const data = await parseBody(req);
    const { name, email, subject, message } = data || {};

    // Validate name
    if (!name || typeof name !== 'string' || !name.trim()) {
      return sendJson(res, 400, {
        success: false,
        error: 'Please provide your name.',
      });
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return sendJson(res, 400, {
        success: false,
        error: 'Please provide a valid email address.',
      });
    }

    // Validate message
    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return sendJson(res, 400, {
        success: false,
        error: 'Please provide a message of at least 10 characters.',
      });
    }

    // Retrieve environment variables
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;
    const recipient = process.env.RECIPIENT_EMAIL || gmailUser;

    if (
      !gmailUser ||
      !gmailPass ||
      gmailPass === 'your_gmail_app_password_here' ||
      gmailPass === 'your_16_digit_app_password_here'
    ) {
      return sendJson(res, 400, {
        success: false,
        error:
          'Gmail credentials are not configured in Vercel environment variables. Please set GMAIL_USER and GMAIL_APP_PASSWORD in your Vercel Project Settings.',
      });
    }

    // 1. Deliver primary notification email to Rishabh
    await sendGmailEmail({
      user: gmailUser,
      pass: gmailPass,
      to: recipient,
      name: name.trim(),
      fromEmail: email.trim(),
      subject: (subject || 'Portfolio Inquiry').trim(),
      message: message.trim(),
    });

    // 2. Deliver automated acknowledgement email to the sender
    let ackSent = false;
    try {
      if (email && typeof email === 'string') {
        await sendAcknowledgementEmail({
          user: gmailUser,
          pass: gmailPass,
          to: email.trim(),
          name: name.trim(),
          subject: (subject || 'Portfolio Inquiry').trim(),
          message: message.trim(),
        });
        ackSent = true;
      }
    } catch (ackErr) {
      console.warn(
        '[Contact API] Notification sent to recipient, but acknowledgement email failed:',
        ackErr?.message || ackErr
      );
    }

    return sendJson(res, 200, {
      success: true,
      message: ackSent
        ? 'Your message has been delivered to Rishabh and an acknowledgement email has been sent to your inbox!'
        : 'Your message has been delivered to Rishabh!',
    });
  } catch (err) {
    console.error('[Contact API] Failed to process message:', err);
    return sendJson(res, 500, {
      success: false,
      error: err?.message || 'Failed to dispatch email. Please try again later.',
    });
  }
}
