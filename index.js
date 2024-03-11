const express = require('express')

const app = express()
const port = 3000

//Set up routes
app.get('/', (req, res) => {
    const file = __dirname + '/AoE.pdf';
    res.download(file);
  }
)

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})