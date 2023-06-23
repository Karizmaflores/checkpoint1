const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users')
const port = process.env.PORT || 4000

app.use(bodyParser.json());
app.use('/', usersRouter)

app.listen(port, () => {
  console.log('app is listening on:', port)
})