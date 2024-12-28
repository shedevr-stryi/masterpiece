import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import { getSantaMessage } from '../../shared/utils/getSantaMessage';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve('../client/dist')));

  // TODO: remove
  app.get('/api/message', (req: Request, res: Response) => {
    res.status(200).json({ 
      message: getSantaMessage('HO HO HO!'),
    });
  });

  app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.resolve('../client/dist', 'index.html'));
  });
} else {
  app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  }));
  
  app.get('/api/message', (req: Request, res: Response) => {
    res.status(200).json({ 
      message: getSantaMessage('HO HO HO!'),
    });
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
