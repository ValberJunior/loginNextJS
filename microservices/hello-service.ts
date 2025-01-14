import express from 'express';

const app = express();
const port = 3001;

app.get('/hello', (req, res) => {
  res.json({ name: 'John Doe' });
});

app.listen(port, () => {
  console.log(`Hello service running on port ${port}`);
});