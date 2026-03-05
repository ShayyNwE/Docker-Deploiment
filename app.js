// app.js
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

// GET endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Hello DevOps!' })
})

// POST endpoint
app.post('/data', (req, res) => {
  const data = req.body
  res.json({ message: 'Data received', data })
})

// Exporter app pour les tests
module.exports = app

// Lancer le serveur seulement si ce fichier est exécuté directement
if (require.main === module) {
  app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`)
  })
}