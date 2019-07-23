const express = require('express');

const app = express();

const download = require('./download');

const PORT = process.env.PORT || 9001;

const url = 'https://www.youtube.com/watch?v=IeAbAHZX4Rg&list=RDIeAbAHZX4Rg';

download(url, '涙の種、笑顔の花');

app.listen(PORT, () => console.log(`Hi Leo, magic is happening at PORT ${PORT}`));
