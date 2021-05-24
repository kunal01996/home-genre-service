const mongoose = require('mongoose')
const { config } = require('./env')

const connectionUrl = config.mongodb.url

const conn = () => {
  return mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

module.exports = {
  conn
}
