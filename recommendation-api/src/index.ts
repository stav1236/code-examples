import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/recommendations', (req: Request, res: Response) => {
    res.send('Recommendation API - All recommendations');
});

const port = 3002;
app.listen(port, () => {
    console.log(`Recommendation API running on http://localhost:${port}`);
});
