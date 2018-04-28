const express = require('express');
const morgan = require('morgan');
const process = require('process');
const path = require('path');

const app = express();
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'static')));

app.get('/obligatory', (req, res) => {
  res.send('Obligatory backend route');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
