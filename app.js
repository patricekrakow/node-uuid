const express = require('express')
const uuid = require('uuid')
const app = express()
const port = 3000

app.get('/uuid', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).end(JSON.stringify({
    uuid: uuid.v4(),
    info: "Provided by node-uuid."
  }, null, 2) + '\n')
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})