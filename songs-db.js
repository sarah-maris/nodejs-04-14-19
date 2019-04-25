'use-strict'

const Sequelize = require('sequelize')
const path = require('path')
const SongsModel = require('./models/song')
const GenreModel = require('./models/genre')

class SongsDb {
  constructor(dbFile) {
    // declaring variables with a _ labels it as a private variable.
    // not yet added to JS, but will be

    // this specifies the file that contains the SQL storage
    this._storage = path.join(__dirname, dbFile)
    // __dirname + '/' + dbFile
    this._sequelize = null
    this._song = null
    this._genre = null
  }

  // async not supported with constructor file yet
  async _init() {
    // creates a new sequelize instance
    this._sequelize = new Sequelize({
      // establishes the DB language, in this case sqlite
      dialect: 'sqlite',
      storage: this._storage
    })

    const Song = this._sequelize.define('song', SongsModel)
    const Genre = this._sequelize.define('genre', GenreModel)

    Genre.hasMany(Song)
    Song.belongsTo(Genre)

    this._song = Song
    this._genre = Genre
    return this._sequelize.sync()
  }

  async listSongsByArtist(artist) {
    return this._song.findAll({
      where: {
        artist
      }
    })
  }

  async listSongsByArtistAndAlbum(artist, album) {
    return this._song.findAll({
      where: {
        artist,
        album
      }
    })
  }

  async listSongsByGenre(genreName) {
    // findAll returns array of matching items
    return this._song.findAll({
      // Sequelize's version of join
      include: [
        {
          model: this._genre,
          where: {
            name: genreName
          }
        }
      ]
    })
  }

  async findGenreByName(name) {
    // findOne only returns one matching item
    return this._genre.findOne({
      where: {
        name
      }
    })
  }

  async createGenre({ name }) {
    return this._genre.create({ name })
  }

  async createSong({ artist, album, song }) {
    return this._song.create({
      artist,
      album,
      song
    })
  }

  static async at(dbFile = 'songs.db') {
    const db = new SongsDb(dbFile)
    await db._init()
    return db
  }
}

module.exports = SongsDb
