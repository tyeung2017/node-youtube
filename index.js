const express = require('express');
const app = express();

const PORT = process.env.PORT || 9001;

app.listen(PORT, () => console.log("hi"));