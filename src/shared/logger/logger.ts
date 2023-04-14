import winston, { format } from 'winston';
import { LoggingWinston } from '@google-cloud/logging-winston';
import TransportStream from 'winston-transport';
import { customColors } from './custom-colors';
import { applicationConfig } from '../../config/application';

const { combine, splat, label, timestamp, colorize } = format;

const upperCaseLevel = format(info => {
    info.level = info.level.toUpperCase();
    return info;
});

const printStacktrace = (stacktrace: string) =>
    stacktrace ? `\n${stacktrace}` : '';
const myFormat = format.printf(
    log =>
        `${log.timestamp} [${log.label}] ${log.level}: ${
            log.message
        }${printStacktrace(log.stack)}`,
);

winston.addColors(customColors);

const winstonTransports: TransportStream[] = [
    new winston.transports.Console({
        level: 'silly',
        format: combine(
            splat(),
            upperCaseLevel(),
            colorize(),
            timestamp(),
            label({ label: applicationConfig.name }),
            myFormat,
        ),
    }),
];

if (process.env.NODE_ENV === 'production') {
    const googleLogging = new LoggingWinston({
        maxEntrySize: 256,
        labels: {
            name: applicationConfig.name,
            version: applicationConfig.version,
        },
    });
    // winstonTransports.push(googleLogging)
}

export const logger = winston.createLogger({
    exitOnError: false,
    transports: winstonTransports,
}) as winston.Logger & winston.LeveledLogMethod;
