// Centralized error handler — keeps controllers free of try/catch boilerplate.
export function notFound(req, res, next) {
  res.status(404).json({ success: false, message: `Route not found: ${req.originalUrl}` })
}

export function errorHandler(err, req, res, next) {
  console.error(err)

  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((e) => e.message)
    return res.status(400).json({ success: false, message: messages.join(' ') })
  }

  const statusCode = err.statusCode || 500
  res.status(statusCode).json({
    success: false,
    message: err.message || 'Something went wrong on the server.',
  })
}
