'use strict'

const SongsDb = require('../songs-db')
const artist = process.argv[2] || 'Bisou'

    ; (async () => {
        try {
            const db = await SongsDb.at()
            const results = await db.listSongsByArtist(artist)
            console.log(JSON.stringify(results, null, 2))
        } catch (err) {
            console.error(err.message)
        }
    })()
