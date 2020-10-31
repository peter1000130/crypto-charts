const express = require('express');
const path = require('path')
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(cors());

app.get('/bitcoin', async (req, res) => {
  const coinDeskURL = 'https://api.coindesk.com/v1/bpi/historical/close.json'
  try {
    const result = await axios.get(coinDeskURL);
    res.status(200);
    res.send(result.data);
    res.end();
  } catch (error) {
    res.status(404);
    res.send(error);
    console.log(error);
    res.end();
  }
})

app.get('/update'), async(req, res) => {
  const { body } = req;
  const { index, currency, start, end } = body

  // plug this into the coindesk API and return the results

}


app.listen(3000, () => console.log('Crypto charts are now live'))
