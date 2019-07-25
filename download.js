var path = require('path')
var fs = require('fs')
var ytdl = require('@microlink/youtube-dl')

const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;

function download (url) {
  'use strict'
  ytdl.exec(url, ['-x', '--audio-format', 'mp3', `--ffmpeg-location=${ffmpegPath}`], {}, function exec (
    err,
    output
  ) {
    'use strict'
    if (err) {
      throw err
    }
    console.log(output.join('\n'))
  })
}

module.exports = download;
