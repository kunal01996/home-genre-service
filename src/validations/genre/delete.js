const joi = require('@hapi/joi')

const schema = joi.object({
  name: joi.string().required()
})

const deleteGenre = (body) => schema.validate(body)

module.exports = {
  deleteGenre
}
