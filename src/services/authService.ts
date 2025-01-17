// src/services/authService.ts
import express from 'express';

const app = express();
app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Implement authentication logic here
  res.json({ message: 'User authenticated' });
});

app.listen(4000, () => {
  console.log('Auth service running on port 4000');
});