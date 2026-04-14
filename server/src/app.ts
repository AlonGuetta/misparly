import express from 'express';
import healthRouter from './routes/health.route';
import vehicleRouter from './routes/vehicle.route'
import { loggerMiddleware } from './middlewares/logger.middleware';
import { errorMiddleware } from './middlewares/error.middleware';
import 'dotenv/config'

const app = express();
app.use(express.json());

const basePath = process.env.BASE_PATH || '/api'

// routes
app.use(`${basePath}/health`, healthRouter);
app.use(`${basePath}/vehicle`, vehicleRouter)

// middlewares
app.use(loggerMiddleware);
app.use(errorMiddleware);

export default app;