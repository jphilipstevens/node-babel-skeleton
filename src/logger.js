import winston from 'winston';

winston.emitErrs = true;

const fileTransport = new winston.transports.File({
  level: 'info',
  filename: './logs/all-logs.log',
  handleExceptions: true,
  json: true,
  maxsize: 5242880,
  maxFiles: 5,
  colorize: false
});

const consoleTransport = new winston.transports.Console({
  level: 'debug',
  handleExceptions: true,
  json: false,
  colorize: true
});

const logger = new winston.Logger({
  transports: [fileTransport, consoleTransport],
  exitOnError: false,
  stream: {
    write: function write(message) {
      logger.info(message);
    }
  }
});

export default logger;
