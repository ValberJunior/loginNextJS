// api/hello.ts
import express from 'express';

const app = express();
const port = 3001;

app.get('/api/hello', (req, res) => {
  res.json({ name: 'John Doe' });
});

app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});