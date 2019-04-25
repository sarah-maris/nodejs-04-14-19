'use strict'

const SongsDb = require('../')

  ; (async () => {
  try {
    const db = await SongsDb.at()
    const song = {
      artist: 'Dio',
      album: 'Dio',
      song: 'Rainbow in the dark'
    }
    const results = await db.createSong(song)
    console.log(JSON.stringify(results, null, 2))
  } catch (err) {
    console.error(err.message)
  }
})()
