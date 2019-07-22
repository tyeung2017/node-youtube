const express = require('express');
const app = express();

const PORT = process.env.PORT || 9001;

app.listen(PORT, () => console.log(`Hi Leo, magic is happening at PORT ${PORT}`));