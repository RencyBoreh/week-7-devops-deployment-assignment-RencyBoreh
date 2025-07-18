// utils/logger.js
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, colorize } = format;

const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}] : ${message}`;
});

const logger = createLogger({
  format: combine(colorize(), timestamp(), logFormat),
  transports: [new transports.Console()],
});

module.exports = logger;
