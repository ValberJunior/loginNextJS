// auth-service.ts
import express from 'express';

const app = express();
const port = 4000;

app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Implement authentication logic here
  res.json({ message: 'Login successful' });
});

app.listen(port, () => {
  console.log(`Auth service running on port ${port}`);
});