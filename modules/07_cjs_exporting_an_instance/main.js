const logger = require('./Logger')

logger.log('Hello')
logger.log('World')

const customLogger = new logger.constructor('CUSTOM')
customLogger.log('Hello')
customLogger.log('World')


logger.log('I am prabhsagar')