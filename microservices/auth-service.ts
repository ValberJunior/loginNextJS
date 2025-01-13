// auth-service.ts
import express from 'express';

const app = express();
const port = 4000;

app.get('/auth', (req, res) => {
  res.send('Authentication Service');
});

app.listen(port, () => {
  console.log(`Auth service running on port ${port}`);
});