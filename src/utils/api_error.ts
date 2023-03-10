class APIError extends Error {
    statusCode: number

    constructor(message = null, statusCode = null) {
        super(message);
        this.message = message
        this.statusCode = statusCode ?? 400
    }
}

export default APIError
