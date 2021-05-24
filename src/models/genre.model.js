const mongoose = require('mongoose')

const GenreSchema = new mongoose.Schema({
  name: { type: String },
  description: {type: String}
}, {
  timestamps: true
})

const Genre = mongoose.model('genres', GenreSchema)

module.exports = {
  Genre
}
