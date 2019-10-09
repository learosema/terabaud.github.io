const HOST = '0.0.0.0';
const PORT = 1337;
const folder = 'public';

const express = require('express');
const app = express();
app.use(express.static(folder));

app.listen(PORT, HOST, () => {
  console.log(`Server is listening at http://${HOST}:${PORT}/`);
});
