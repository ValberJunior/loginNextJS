// auth-service.ts
import express from 'express';

const app = express();

app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Authentication logic here
  res.json({ message: 'Login successful' });
});

app.listen(4000, () => {
  console.log('Auth service running on port 4000');
});