const express = require('express');

const app = express();

app.request(express.json());

const port = 4000;
app.listen(port, () => {
  console.log('listening on port ' + port);
})