import express, {Request, Response, NextFunction} from 'express';
import todoRoutes from './routes/todos';
import { error } from 'console';

const app = express();

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.json({message: error.message});
});

app.listen(3011, () => {
    console.log('server running @3011');
})