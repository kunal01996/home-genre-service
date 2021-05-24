/**
 * application boots up over here
 */
require('dotenv').config()

const { app } = require('./src/server')
const { config } = require('./src/config/env')
const { connection: { conn } } = require('./src/config')
const { logger: { logger } } = require('./src/helpers/index')

global.__basedir = __dirname
conn().then(async () => {
  app.listen(config.port, () => {
    console.log(`Running app in ${config.port}`)
  })
}).catch((err) => {
  logger.debug(JSON.stringify(err, null, 4))
})
