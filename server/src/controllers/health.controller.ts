import type { Request, Response } from 'express';
import { logger } from '../utils/logger';

export const getHealth = (_req: Request, res: Response) => {
    logger.info('i have reached inside')
    res.status(200).json({
        status: 'ok',
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
};