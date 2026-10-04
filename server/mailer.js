import tls from 'tls';

/**
 * Sends an email via Gmail SMTP (smtp.gmail.com:465) using native Node.js TLS.
 * Requires ZERO external dependencies.
 *
 * @param {Object} options
 * @param {string} options.user - Your Gmail address (e.g. rishabhpar7@gmail.com)
 * @param {string} options.pass - Your 16-character Gmail App Password
 * @param {string} options.to - Destination email address
 * @param {string} [options.mailFrom] - Envelope sender address (defaults to options.user)
 * @param {string} options.fromHeader - RFC 2822 'From' header
 * @param {string} options.toHeader - RFC 2822 'To' header
 * @param {string} [options.replyToHeader] - RFC 2822 'Reply-To' header
 * @param {string} options.subject - Email subject
 * @param {string[]} options.contentLines - Lines of text email content
 * @returns {Promise<string>}
 */
function sendRawSmtpEmail({
  user,
  pass,
  to,
  mailFrom,
  fromHeader,
  toHeader,
  replyToHeader,
  subject,
  contentLines,
}) {
  return new Promise((resolve, reject) => {
    const cleanPass = (pass || '').replace(/\s+/g, '');
    const cleanUser = (user || '').trim();
    const cleanTo = (to || '').trim().replace(/[\r\n<>]+/g, '');

    if (!cleanUser || !cleanPass) {
      return reject(
        new Error(
          'Missing Gmail credentials. Please configure GMAIL_USER and GMAIL_APP_PASSWORD in your .env file.'
        )
      );
    }

    if (!cleanTo) {
      return reject(new Error('Recipient email address is required.'));
    }

    const socket = tls.connect({
      host: 'smtp.gmail.com',
      port: 465,
      rejectUnauthorized: true,
    });

    let step = 0;
    let responseBuffer = '';

    const sanitizedSubject = (subject || 'Portfolio Inquiry')
      .replace(/[\r\n]+/g, ' ')
      .trim();

    const emailLines = [
      `From: ${fromHeader}`,
      `To: ${toHeader}`,
      ...(replyToHeader ? [`Reply-To: ${replyToHeader}`] : []),
      `Subject: ${sanitizedSubject}`,
      `MIME-Version: 1.0`,
      `Content-Type: text/plain; charset=UTF-8`,
      ``,
      ...contentLines,
    ];

    const emailContent = emailLines.join('\r\n');

    socket.setEncoding('utf-8');

    const timeout = setTimeout(() => {
      socket.destroy();
      reject(
        new Error(
          'SMTP connection timed out after 15 seconds. Please verify network access to smtp.gmail.com.'
        )
      );
    }, 15000);

    socket.on('data', (chunk) => {
      responseBuffer += chunk;

      if (!responseBuffer.endsWith('\r\n')) {
        return;
      }

      const lines = responseBuffer.trim().split('\r\n');
      const lastLine = lines[lines.length - 1] || '';

      // An SMTP multi-line response uses '-' (e.g. 250-); the final line uses space (e.g. 250 )
      if (!/^\d{3}\s/.test(lastLine)) {
        return;
      }

      const code = parseInt(lastLine.substring(0, 3), 10);
      responseBuffer = '';

      if (code >= 400) {
        clearTimeout(timeout);
        socket.end();
        if (code === 535) {
          return reject(
            new Error(
              'Authentication failed (535): Invalid Gmail username or App Password. Ensure 2-Step Verification is active and you use a 16-character App Password.'
            )
          );
        }
        return reject(new Error(`SMTP Error (${code}): ${lastLine}`));
      }

      switch (step) {
        case 0: // 220 Service ready
          step = 1;
          socket.write('EHLO localhost\r\n');
          break;
        case 1: // 250 OK to EHLO
          step = 2;
          socket.write('AUTH LOGIN\r\n');
          break;
        case 2: // 334 Username prompt
          step = 3;
          socket.write(Buffer.from(cleanUser).toString('base64') + '\r\n');
          break;
        case 3: // 334 Password prompt
          step = 4;
          socket.write(Buffer.from(cleanPass).toString('base64') + '\r\n');
          break;
        case 4: // 235 Authentication succeeded
          step = 5;
          socket.write(`MAIL FROM:<${mailFrom || cleanUser}>\r\n`);
          break;
        case 5: // 250 Sender OK
          step = 6;
          socket.write(`RCPT TO:<${cleanTo}>\r\n`);
          break;
        case 6: // 250 Recipient OK
          step = 7;
          socket.write('DATA\r\n');
          break;
        case 7: // 354 Start mail input
          step = 8;
          socket.write(emailContent + '\r\n.\r\n');
          break;
        case 8: // 250 Message queued/accepted
          step = 9;
          socket.write('QUIT\r\n');
          break;
        case 9: // 221 Service closing
          clearTimeout(timeout);
          socket.end();
          resolve(`Email successfully delivered to ${cleanTo}`);
          break;
        default:
          break;
      }
    });

    socket.on('error', (err) => {
      clearTimeout(timeout);
      reject(err);
    });
  });
}

/**
 * Sends inquiry notification email to Rishabh via Gmail SMTP.
 *
 * @param {Object} options
 * @param {string} options.user - Your Gmail address (e.g. rishabhpar7@gmail.com)
 * @param {string} options.pass - Your 16-character Gmail App Password
 * @param {string} [options.to] - Destination email (defaults to options.user)
 * @param {string} options.name - Sender's full name
 * @param {string} options.fromEmail - Sender's email address
 * @param {string} [options.subject] - Subject line
 * @param {string} options.message - Message body
 * @returns {Promise<string>}
 */
export function sendGmailEmail({ user, pass, to, name, fromEmail, subject, message }) {
  const sanitizedSubject = (subject || 'Portfolio Inquiry').replace(/[\r\n]+/g, ' ').trim();
  const sanitizedName = (name || 'Anonymous').replace(/[\r\n"]+/g, '').trim();
  const recipient = (to || user).trim();

  const contentLines = [
    `You received a new inquiry from your Portfolio website:`,
    `════════════════════════════════════════════════════════════════`,
    `Sender Name:    ${sanitizedName}`,
    `Sender Email:   ${fromEmail}`,
    `Subject:        ${sanitizedSubject}`,
    `Received At:    ${new Date().toLocaleString()}`,
    `════════════════════════════════════════════════════════════════`,
    ``,
    `Message:`,
    `${message}`,
    ``,
    `════════════════════════════════════════════════════════════════`,
    `Tip: You can hit Reply directly in Gmail to respond to ${fromEmail}.`,
  ];

  return sendRawSmtpEmail({
    user,
    pass,
    to: recipient,
    mailFrom: user,
    fromHeader: `"${sanitizedName}" <${user}>`,
    toHeader: `<${recipient}>`,
    replyToHeader: `"${sanitizedName}" <${fromEmail}>`,
    subject: `Portfolio Contact: ${sanitizedSubject}`,
    contentLines,
  });
}

/**
 * Sends an automated acknowledgement email to the user who submitted the message,
 * letting them know that their message was delivered to Rishabh and that he will
 * contact them in a while.
 *
 * @param {Object} options
 * @param {string} options.user - Your Gmail address (e.g. rishabhpar7@gmail.com)
 * @param {string} options.pass - Your 16-character Gmail App Password
 * @param {string} options.to - User's email address
 * @param {string} options.name - User's full name
 * @param {string} [options.subject] - Inquiry subject
 * @param {string} [options.message] - Original message body
 * @returns {Promise<string>}
 */
export function sendAcknowledgementEmail({ user, pass, to, name, subject, message }) {
  const sanitizedName = (name || 'there').replace(/[\r\n"]+/g, '').trim();
  const sanitizedSubject = (subject || 'Portfolio Inquiry').replace(/[\r\n]+/g, ' ').trim();
  const recipient = (to || '').trim();

  const contentLines = [
    `Hi ${sanitizedName},`,
    ``,
    `Thank you for reaching out through my portfolio!`,
    ``,
    `Your message has been delivered to Rishabh. He has received your inquiry and will review it and contact you in a while.`,
    ``,
    `════════════════════════════════════════════════════════════════`,
    `SUMMARY OF YOUR MESSAGE:`,
    `════════════════════════════════════════════════════════════════`,
    `Subject:   ${sanitizedSubject}`,
    `Received:  ${new Date().toLocaleString()}`,
    ``,
    `Message:`,
    `${message || '(No message content)'}`,
    `════════════════════════════════════════════════════════════════`,
    ``,
    `If you have any urgent updates or additional requirements in the meantime, feel free to reply directly to this email or reach out through:`,
    ``,
    `• Email:    ${user}`,
    `• Phone:    +91 9998217585`,
    `• LinkedIn: https://www.linkedin.com/in/rishabh-parmar-650541200/`,
    `• GitHub:   https://github.com/Rishabh3243`,
    `• Website:  https://rishabhparmar.me/`,
    ``,
    `Best regards,`,
    `Rishabh Parmar`,
    `AI/ML Developer`,
  ];

  return sendRawSmtpEmail({
    user,
    pass,
    to: recipient,
    mailFrom: user,
    fromHeader: `"Rishabh Parmar" <${user}>`,
    toHeader: `"${sanitizedName}" <${recipient}>`,
    replyToHeader: `"Rishabh Parmar" <${user}>`,
    subject: `Your message has been delivered to Rishabh | Confirmation`,
    contentLines,
  });
}

/**
 * Unified helper that dispatches both the notification email to Rishabh
 * and the automated acknowledgement email to the sender.
 *
 * @param {Object} options
 * @param {string} options.user - Your Gmail address (e.g. rishabhpar7@gmail.com)
 * @param {string} options.pass - Your 16-character Gmail App Password
 * @param {string} [options.recipient] - Destination email for inquiry (defaults to user)
 * @param {string} options.name - Sender's name
 * @param {string} options.fromEmail - Sender's email address
 * @param {string} [options.subject] - Subject line
 * @param {string} options.message - Message body
 * @returns {Promise<{ inquiryResult: string, ackResult: string | null }>}
 */
export async function sendContactEmails({ user, pass, recipient, name, fromEmail, subject, message }) {
  // 1. Deliver primary inquiry notification to Rishabh
  const inquiryResult = await sendGmailEmail({
    user,
    pass,
    to: recipient,
    name,
    fromEmail,
    subject,
    message,
  });

  // 2. Deliver acknowledgement email to sender
  let ackResult = null;
  try {
    if (fromEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fromEmail.trim())) {
      ackResult = await sendAcknowledgementEmail({
        user,
        pass,
        to: fromEmail,
        name,
        subject,
        message,
      });
    }
  } catch (ackError) {
    console.warn('[Mailer] Acknowledgement email to user could not be dispatched:', ackError.message || ackError);
  }

  return {
    inquiryResult,
    ackResult,
  };
}
