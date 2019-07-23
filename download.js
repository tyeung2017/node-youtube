const fs = require('fs');
const ytdl = require('ytdl-core');

const download = url => ytdl(url)
  .pipe(fs.createWriteStream('video.mp4'));

module.exports = download;
