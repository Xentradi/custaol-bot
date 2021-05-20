import { resolve } from "path";
import { createLogger, transports, format } from "winston";
import 'winston-daily-rotate-file';

const logDir = resolve(__dirname, '../../logs')
const logger = createLogger({
    transports: [
        new transports.DailyRotateFile({
            filename: `${logDir}/log-%DATE%.log`,
            datePattern: 'YYYY-MM-DD_HH',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
            format: format.combine(
                format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                format.errors({ stack: true }),
                format.splat(),
                format.json()
            )
        }),
        new transports.File({
            filename: `./logs/error.log`, 
            level: 'error',
            format: format.combine(
                format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                format.errors({ stack: true }),
                format.splat(),
                format.json()
            )
        }),
        new transports.Console({
            format: format.combine(
                format.colorize(),
                format.simple()
            )
        })
    ]
});

export { logger }