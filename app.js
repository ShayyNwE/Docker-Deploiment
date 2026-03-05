const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello DevOps!' });
});

app.post('/data', (req, res) => {
  const data = req.body;
  res.json({
    message: 'Data received',
    data: data
  });
});

app.get('/hello', (req, res) => {
    res.json({ message: 'Hello world!' });
  });

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});