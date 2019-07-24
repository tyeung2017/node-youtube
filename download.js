const ytdl = require('ytdl-core');

const readline = require('readline');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;

ffmpeg.setFfmpegPath(ffmpegPath);

const start = Date.now();
const download = (url, name) => {
  const stream = ytdl(url, {
    quality: 'highestaudio',
    filter: 'audioonly',
  });

  ffmpeg(stream)
    .audioBitrate(128)
    .save(`${__dirname}/${name}.mp3`)
    .on('progress', (p) => {
      readline.cursorTo(process.stdout, 0);
      process.stdout.write(`${p.targetSize}kb downloaded`);
    })
    .on('end', () => {
      console.log(`\ndone, thanks - ${(Date.now() - start) / 1000}s`);
    });
};

module.exports = download;
