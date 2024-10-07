import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/posts', (req: Request, res: Response) => {
    res.send('Media API - All posts');
});

const port = 3001;
app.listen(port, () => {
    console.log(`Media API running on http://localhost:${port}`);
});
