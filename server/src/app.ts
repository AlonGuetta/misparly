import express from 'express';
import router from './routes/health.route';
import { loggerMiddleware } from './middlewares/logger.middleware';
import { errorMiddleware } from './middlewares/error.middleware';

const app = express();
app.use(express.json());

// routes
app.use('/api', router);

// middlewares
app.use(loggerMiddleware);
app.use(errorMiddleware);

export default app;