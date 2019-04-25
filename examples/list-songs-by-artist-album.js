'use strict'

const SongsDb = require('../songs-db')
const artist = process.argv[2] || 'Bisou'
const album = process.argv[3] || 'Haumea'

    ; (async () => {
        try {
            const db = await SongsDb.at()
            const results = await db.listSongsByArtistAndAlbum(artist, album)
            console.log(JSON.stringify(results, null, 2))
        } catch (err) {
            console.error(err.message)
        }
    })()
