const express = require('express')

const app = express()
const port = 3000

//Set up routes
app.get('/', (req, res) => {
    res.send(`Welcome to the page`)
  }
)

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})