const {
  GenreModel: { Genre }
} = require('../models')
const {
  CreateGenre,
  DeleteGenre
} = require('../validations')

const get = async (req, res) => {
  try {
    const filter = {};
    if (req.params && req.params.name) {
      filter.name = req.params.name
    }
    const genres = await Genre.find(filter);
    return res.status(200)
      .json({
        status: 200,
        message: genres
      })
  }
  catch (error) {
    return res.status(500).json({
      status: 500,
      message: error
    })
  }
}

const create = async (req, res) => {
  try {
    const validations = CreateGenre.create(req.body)
    if (!validations.error) {
      const NewGenre = await Genre.create({
        name: req.body.name,
        description: req.body.description
      });
      return res.status(201).json({
        status: 201,
        message: {
          genre: NewGenre
        }
      })
    } else {
      return res.status(200).json({
        status: 400,
        message: validations.error.details
      })
    }
  }
  catch (error) {
    console.log('error', error)
    return res.status(500).json({
      status: 500,
      message: error
    })
  }
}

const deleteGenre = async (req, res) => {
  try {
    const validations = DeleteGenre.deleteGenre(req.query)
    if (!validations.error) {
      await Genre.deleteOne({ name: req.query.name });
      return res.status(200)
        .json({
          status: 200,
          message: 'Record deleted.'
        })

    } else {
      return res.status(200).json({
        status: 400,
        message: validations.error.details
      })
    }
  }
  catch (error) {
    return res.status(500).json({
      status: 500,
      message: error
    })
  }
}

module.exports = {
  create,
  get,
  deleteGenre
}