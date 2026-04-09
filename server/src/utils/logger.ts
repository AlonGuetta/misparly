import pino, { type LoggerOptions } from 'pino'

const isDev = process.env.NODE_ENV !== 'production'

const loggerOptions: LoggerOptions = {
    level: isDev ? 'debug' : 'info',
};

if (isDev) {
    loggerOptions.transport = {
        target: 'pino-pretty',
        options: {
            colorize: true,
            translateTime: 'dd-mm-yyyy HH:MM:ss.l',
        },
    };
}

export const logger = pino(loggerOptions);