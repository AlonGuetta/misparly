import type { Request, Response } from 'express'
import { logger } from '../utils/logger'

const healthController = (_req: Request, res: Response) => {
    logger.info('performing health check')
    res.status(200).json({
        status: 'ok',
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
};

export default healthController