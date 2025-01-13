import express from 'express';

const app = express();
const port = 3001;

app.get('/api/user', (req, res) => {
  res.json({ name: 'John Doe' });
});

app.listen(port, () => {
  console.log(`User service running on port ${port}`);
});