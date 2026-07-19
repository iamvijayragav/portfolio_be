import dns from 'dns'
import nodemailer from 'nodemailer'
import Contact from '../models/Contact.js'

dns.setDefaultResultOrder('ipv4first')

function getEnv(name, fallback = '') {
  const value = process.env[name]
  return typeof value === 'string' ? value.trim() : fallback
}

function createTransporter() {
  const service = getEnv('EMAIL_SERVICE')
  const host = service ? undefined : getEnv('EMAIL_HOST', 'smtp.gmail.com')
  const secureEnv = getEnv('EMAIL_SECURE')
  const secure = secureEnv ? secureEnv === 'true' : false
  const port = Number(
    getEnv('EMAIL_PORT') ||
      (secure ? getEnv('EMAIL_PORT_TRUE', '465') : getEnv('EMAIL_PORT_FALSE', '587')),
  )

  const transportOptions = {
    auth: {
      user: getEnv('EMAIL_USER'),
      pass: getEnv('EMAIL_PASS'),
    },
    port,
    secure: secure || port === 465,
    lookup: (hostname, options, callback) => dns.lookup(hostname, { family: 4, all: false }, callback),
    connectionTimeout: 20000,
    greetingTimeout: 20000,
    socketTimeout: 20000,
    requireTLS: true,
  }

  if (service) {
    return nodemailer.createTransport({ service, ...transportOptions })
  }

  return nodemailer.createTransport({ host, ...transportOptions })
}

function getFromAddress() {
  return getEnv('EMAIL_USER', 'no-reply@example.com')
}

function getSelfAddress() {
  return getEnv('EMAIL_TO') || getEnv('TO_EMAIL') || getEnv('EMAIL_USER', 'no-reply@example.com')
}

// POST /api/contact
export async function createContact(req, res, next) {
  try {
    const { name, email, message } = req.body

    const contact = await Contact.create({ name, email, message })

    const transporter = createTransporter()
    const from = getFromAddress()
    const selfEmail = getSelfAddress()

    const acknowledgement = {
      from,
      to: email,
      subject: `Thanks for contacting me, ${name}!`,
      text: `Hi ${name},\n\nThank you for reaching out. I have received your message and will respond as soon as possible.\n\nYour message:\n${message}\n\nBest regards,\nVijayaragavan`,
      html: `<p>Hi ${name},</p><p>Thank you for reaching out. I have received your message and will respond as soon as possible.</p><p><strong>Your message:</strong><br />${message.replace(/\n/g, '<br/>')}</p><p>Best regards,<br />Vijayaragavan</p>`,
    }

    const notification = {
      from,
      to: selfEmail,
      subject: `New contact form message from ${name}`,
      text: `New contact form submission:\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      html: `<p>New contact form submission:</p><p><strong>Name:</strong> ${name}<br /><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br />${message.replace(/\n/g, '<br/>')}</p>`,
    }

    await Promise.all([transporter.sendMail(acknowledgement), transporter.sendMail(notification)])

    res.status(201).json({
      success: true,
      message: 'Message received — thanks for reaching out.',
      data: { id: contact._id, createdAt: contact.createdAt },
    })
  } catch (err) {
    next(err)
  }
}

// GET /api/contact  (simple admin-style listing, most recent first)
export async function listContacts(req, res, next) {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(100)
    res.json({ success: true, count: contacts.length, data: contacts })
  } catch (err) {
    next(err)
  }
}
