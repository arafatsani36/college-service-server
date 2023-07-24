const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 4000;

const colleges = require('./data/collage.json');
const  reviews = require('./data/review.json');

app.use(cors())
app.get('/', (req, res) => {
  res.send('college server running')
})

app.get('/colleges', (req, res) => {
    res.send(colleges)
})
app.get('/reviews', (req, res) => {
    res.send(reviews)
})

app.listen(port, () => {
  console.log(`college server running on port ${port}`)
})