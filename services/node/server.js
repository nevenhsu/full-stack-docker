const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3001

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api', (req, res) =>
  res.send(`Hello World! Mode: ${process.env.NODE_ENV}`)
)

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
)
