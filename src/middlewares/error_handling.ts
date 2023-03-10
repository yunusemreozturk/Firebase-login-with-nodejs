import APIError from "../utils/api_error.js";
const errorHandlerMiddlewares = (err, req, res, next) => {
    if (err instanceof APIError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message
        })
    }
    return res.status(500).json({
        success: false,
        message: 'Bir hatayla karşılaştık lütfen apinizi kontrol ediniz.'
    })
}

export default errorHandlerMiddlewares