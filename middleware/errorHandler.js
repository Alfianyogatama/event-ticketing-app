const { status } = require('express/lib/response')

exports.errHandler = (error, req, res, next) => {
  const code = error.code ? error.code : error.message ? 400 : 500
  return res.status(code).json({
    success: false,
    error_code: code,
    message: error.message
  })
}

