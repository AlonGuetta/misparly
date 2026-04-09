import type { Request, Response } from 'express';

export const getHealth = (_req: Request, res: Response) => {
    console.log('i have reached inside')
    res.status(200).json({
        status: 'ok',
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
};