import dns from 'dns';
import nodemailer from 'nodemailer';
import Contact from '../models/Contact.js';

dns.setDefaultResultOrder('ipv4first');

const getEnv = (key, fallback = '') => {
  const value = process.env[key];
  return value ? value.trim() : fallback;
};

const escapeHtml = (text = '') =>
  text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

function createTransporter() {
  const user = getEnv('EMAIL_USER');
  const pass = getEnv('EMAIL_PASS');
  const host = getEnv('EMAIL_HOST', 'smtp.gmail.com');
  const port = Number(getEnv('EMAIL_PORT', '587'));
  const secure = getEnv('EMAIL_SECURE', 'false') === 'true';

  if (!user || !pass) {
    throw new Error('EMAIL_USER or EMAIL_PASS is missing.');
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,

    auth: {
      user,
      pass,
    },

    authMethod: 'LOGIN',

    lookup: (hostname, options, callback) => {
      dns.lookup(hostname, { family: 4 }, callback);
    },

    connectionTimeout: 20000,
    greetingTimeout: 20000,
    socketTimeout: 20000,

    tls: {
      rejectUnauthorized: false,
    },
  });

  console.log('SMTP Configuration');
  console.log({
    host,
    port,
    secure,
    user,
  });

  return transporter;
}

const getFromAddress = () =>
  getEnv('EMAIL_USER', 'no-reply@example.com');

const getOwnerEmail = () =>
  getEnv('EMAIL_TO', getFromAddress());

export async function createContact(req, res, next) {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email and message are required.',
      });
    }

    const contact = await Contact.create({
      name,
      email,
      message,
    });

    const transporter = createTransporter();

    await transporter.verify();
    console.log('SMTP server connected successfully.');

    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

    await Promise.all([
      transporter.sendMail({
        from: `"Vijayaragavan" <${getFromAddress()}>`,
        to: email,
        subject: `Thanks for contacting me, ${name}!`,
        text: `Hi ${name},

Thank you for contacting me.

I have received your message and will get back to you soon.

Your message:

${message}

Regards,
Vijayaragavan`,

        html: `
          <h2>Thank You!</h2>
          <p>Hi <strong>${escapeHtml(name)}</strong>,</p>

          <p>Thank you for contacting me.</p>

          <p>I have received your message and will respond as soon as possible.</p>

          <p>
            <strong>Your Message:</strong><br>
            ${safeMessage}
          </p>

          <br>

          <p>Regards,</p>
          <p><strong>Vijayaragavan</strong></p>
        `,
      }),

      transporter.sendMail({
        from: `"Portfolio Contact" <${getFromAddress()}>`,
        to: getOwnerEmail(),
        subject: `New Contact Form Submission`,
        text: `New Contact Form Submission

Name: ${name}

Email: ${email}

Message:

${message}`,

        html: `
          <h2>New Contact Form Submission</h2>

          <p><strong>Name:</strong> ${escapeHtml(name)}</p>

          <p><strong>Email:</strong> ${escapeHtml(email)}</p>

          <p>
            <strong>Message:</strong><br>
            ${safeMessage}
          </p>
        `,
      }),
    ]);

    res.status(201).json({
      success: true,
      message: 'Message sent successfully.',
      data: {
        id: contact._id,
        createdAt: contact.createdAt,
      },
    });
  } catch (error) {
    console.error('SMTP Error:', error);
    next(error);
  }
}

export async function listContacts(req, res, next) {
  try {
    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .limit(100);

    res.json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    next(error);
  }
}