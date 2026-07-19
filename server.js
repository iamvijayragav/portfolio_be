import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import contactRoutes from './routes/contactRoutes.js'
import contentRoutes from './routes/contentRoutes.js'
import { notFound, errorHandler } from './middleware/errorHandler.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const allowedOrigins = (process.env.CLIENT_ORIGIN || 'http://localhost:5173').split(',').map((o) => o.trim())

app.use(
  cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST'],
  }),
)
app.use(express.json({ limit: '10kb' }))
app.use('/api', contentRoutes)

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Portfolio API is running.',
    endpoints: [
      'GET /api/health',
      'GET /api/about',
      'GET /api/experience',
      'GET /api/projects',
      'GET /api/services',
      'GET /api/skills',
      'GET /api/achievements',
      'POST /api/contact',
      'GET /api/contact',
    ],
  })
})

app.get('/api/health', (req, res) => {
  res.json({ success: true, status: 'ok', uptime: process.uptime() })
})

app.use('/api/contact', contactRoutes)

app.use(notFound)
app.use(errorHandler)

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 API listening on http://localhost:${PORT}`)
  })
})
