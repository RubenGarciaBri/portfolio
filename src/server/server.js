var path = require('path')
const express = require('express')
const fetch = require('node-fetch')

const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 8081

//Set up environment variables

const app = express()

app.use(express.static('dist'))

app.get('/', function (req, res) {
  res.sendFile('dist/index.html')
})

/* Dependencies */
const bodyParser = require('body-parser')

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

// Cors for cross origin allowance
const cors = require('cors')
app.use(cors())

// designates what port the app will listen to for incoming requests
app.listen(PORT, function (err) {
  if (err) {
    console.log('there was a problem', err)
    return
  }
  console.log(`App working and listening on ${PORT}`)
})

app.get('/test', function (req, res) {
  res.send('Hello')
})

