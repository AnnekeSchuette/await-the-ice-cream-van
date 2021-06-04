const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});
app.use('/', express.json()) // add middleware for json data
app.use(express.static('./src'))
app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.listen(3000, () => console.log('App is listening on port 3000.'));