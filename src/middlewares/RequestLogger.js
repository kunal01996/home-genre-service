const {
  logger: { logger }
} = require ('../helpers')

const RequestLogger = (req, res, next) => {
  logger.info(req.originalUrl)
  logger.info(JSON.stringify(req.params, null, 4))
  logger.info(JSON.stringify(req.body, null, 4))
  next()
}

module.exports = {
  RequestLogger
}
