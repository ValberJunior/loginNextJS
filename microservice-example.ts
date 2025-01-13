import express from 'express';

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from microservice!' });
});

app.listen(PORT, () => {
  console.log(`Microservice running on port ${PORT}`);
});