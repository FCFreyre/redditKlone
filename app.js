const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log("Listenin' on port " + port + " bruddah")
})

const data = [{
  id: 0,
  url: 'google.com',
  title: 'This is a great site',
  votes: 67
}];

module.exports = app
