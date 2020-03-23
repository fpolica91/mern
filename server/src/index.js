const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const Product = require('./Models/Products')

mongoose.connect('mongodb://localhost:27017/store', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

app.use(express.json())
app.use(cors({ origin: true }))

app.post('/product', async (req, res, _) => {
  const product = await Product.create(req.body)
  return res.json(product)
})

app.get('/products', async (req, res, _) => {
  const products = await Product.find()
  return res.json(products)
})

app.listen(5000)
