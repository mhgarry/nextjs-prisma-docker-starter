import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import prisma from '../prisma/prisma';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/test', async (req, res) => {
  try {
    res.send('Hello from server');
    res.status(200).json({ message: 'Hello from server' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 8888;

app.listen(PORT, () =>
  console.log(`Server is running on port http://localhost:${PORT}`),
);
