import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { sendGmailEmail, sendAcknowledgementEmail } from './server/mailer.js';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  const createContactMiddleware = () => {
    return (req: any, res: any) => {
      if (req.method !== 'POST') {
        res.statusCode = 405;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ success: false, error: 'Method not allowed. Use POST.' }));
        return;
      }

      let body = '';
      req.on('data', (chunk: any) => {
        body += chunk;
      });

      req.on('end', async () => {
        try {
          const data = JSON.parse(body || '{}');
          const gmailUser = env.GMAIL_USER || process.env.GMAIL_USER;
          const gmailPass = env.GMAIL_APP_PASSWORD || process.env.GMAIL_APP_PASSWORD;
          const recipient = env.VITE_RECIPIENT_EMAIL || process.env.VITE_RECIPIENT_EMAIL || gmailUser;

          if (
            !gmailUser ||
            !gmailPass ||
            gmailPass === 'your_gmail_app_password_here' ||
            gmailPass === 'your_16_digit_app_password_here'
          ) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(
              JSON.stringify({
                success: false,
                error:
                  'Gmail App Password is not yet configured in .env. Please set your 16-character GMAIL_APP_PASSWORD.',
              })
            );
            return;
          }

          // 1. Deliver primary inquiry notification to Rishabh
          await sendGmailEmail({
            user: gmailUser,
            pass: gmailPass,
            to: recipient,
            name: data.name,
            fromEmail: data.email,
            subject: data.subject || 'Portfolio Inquiry',
            message: data.message,
          });

          // 2. Deliver automated acknowledgement email to the sender
          let ackSent = false;
          try {
            if (data.email && typeof data.email === 'string') {
              await sendAcknowledgementEmail({
                user: gmailUser,
                pass: gmailPass,
                to: data.email,
                name: data.name,
                subject: data.subject || 'Portfolio Inquiry',
                message: data.message,
              });
              ackSent = true;
            }
          } catch (ackErr: any) {
            console.warn(
              '[Contact API] Notification sent to Rishabh, but acknowledgement email failed:',
              ackErr?.message || ackErr
            );
          }

          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(
            JSON.stringify({
              success: true,
              message: ackSent
                ? 'Your message has been delivered to Rishabh and an acknowledgement email has been sent to your inbox!'
                : 'Your message has been delivered to Rishabh!',
            })
          );
        } catch (err: any) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ success: false, error: err.message || 'Failed to dispatch email' }));
        }
      });
    };
  };

  return {
    plugins: [
      react(),
      {
        name: 'contact-api-plugin',
        configureServer(server) {
          server.middlewares.use('/api/contact', createContactMiddleware());
        },
        configurePreviewServer(server) {
          server.middlewares.use('/api/contact', createContactMiddleware());
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 3000,
      open: true,
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            animations: ['framer-motion'],
            icons: ['lucide-react'],
          },
        },
      },
    },
  };
});
