
import type { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger'

export const errorMiddleware = (
    err: any,
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    console.log(err)
    logger.error('ERROR:', err);

    // TODO: do not return http 500 message
    res.status(err.status || 500).json({
        message: /*err.message ||*/ 'Internal Server Error',
    });
};