const express = require('express');
const dotenv = require('dotenv');


dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
// require('./bootstrap/express')(app)

app.get('/', (req, res) => {
    res.send('Hello, world!');
  });

  


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});