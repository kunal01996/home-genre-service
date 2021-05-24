const express = require('express')
const {
  GenreController: {
    create,
    get,
    deleteGenre
  }
} = require('../controllers')

const router = express.Router()

/**
 * Genre routes go over here
 */
router.get('/genre', get)
router.post('/genre', create)
router.delete('/genre', deleteGenre)

module.exports = {
  router
}
