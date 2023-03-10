class Logger {
    static logger(req, res, next) {
        console.log(`Log: ${new Date().toUTCString()} : ${req.method}`)
        next();
    }
}

export default Logger