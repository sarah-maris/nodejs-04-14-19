'use strict'

const SongsDb = require('../songs-db')
const genre = process.argv[2] || 'Electronic';

(async () => {
  try {
    const db = await SongsDb.at()
    const results = await db.listSongsByGenre(genre)
    console.log('here', JSON.stringify(results, null, 2))
  } catch (err) {
    console.error(err.message)
  }
})()
