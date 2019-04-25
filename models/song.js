'use strict'

const { STRING, UUID, UUIDV4 } = require('sequelize')
const SongsModel = {
  id: {
    type: UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  artist: { type: STRING(50), allowNull: false },
  album: { type: STRING(50), allowNull: false },
  song: { type: STRING(50), allowNull: false }
}

module.exports = SongsModel
