const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())


app.get('/', (req, res) => {
  res.json({ message: 'Bienvenue sur l\'API DevOps Demo' })
})