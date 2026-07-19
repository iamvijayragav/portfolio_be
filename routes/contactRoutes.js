import { Router } from 'express'
import rateLimit from 'express-rate-limit'
import { createContact, listContacts } from '../controllers/contactController.js'

const router = Router()

// Throttle submissions to curb spam/abuse on the public form.
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { success: false, message: 'Too many messages sent — please try again later.' },
})

router.post('/', contactLimiter, createContact)
router.get('/', listContacts) // intended for an authenticated admin view in production

export default router
