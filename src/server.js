const express = require('express')
const mongoose = require('mongoose')
const app = express()
const routes = require('./routes')

app.use(express.json())

mongoose.connect('mongodb+srv://jorgehclinhares:coruja123@aircnc-n6qqq.mongodb.net/aircnc?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(routes)
app.listen(8000)
