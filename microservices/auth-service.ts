// auth-service.ts
import express from 'express';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Implement authentication logic here
  res.status(200).send({ message: 'Login successful' });
});

app.listen(PORT, () => {
  console.log(`Auth service running on port ${PORT}`);
});