'use strict'

const { STRING, UUID, UUIDV4 } = require('sequelize')

const GenreModel = {
  id: {
    type: UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  name: {
    type: STRING(50),
    allowNull: false
  }
}

module.exports = GenreModel
