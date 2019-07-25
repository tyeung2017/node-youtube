const express = require('express');

const app = express();

const download = require('./download');

const PORT = process.env.PORT || 9001;

const playlist = 'https://www.youtube.com/playlist?list=PLxYj8iSUBFPGLv4aAyYYYRcIC8u5R_ZQ8';

download(playlist, 'test-playlist');

app.listen(PORT, () => console.log(`Hi Leo, magic is happening at PORT ${PORT}`));
