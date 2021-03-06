const winston = require('winston')

const format = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp(),
  winston.format.align(),
  winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
)

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format
    })
  ]
})

module.exports = {
  logger
}
