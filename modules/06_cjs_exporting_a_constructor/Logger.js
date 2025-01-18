class Logger {
    constructor(name) {
        this.name = name
    }

    log(message) {
        console.log(`[${this.name}] ${message}`)
    }

    info(message) {
        this.log(`INFO: ${message}`)
    }

    verbose(message) {
        this.log(`VERBOSE: ${message}`)
    }
}

module.exports = Logger;