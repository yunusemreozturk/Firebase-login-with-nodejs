import rateLimit from "express-rate-limit"

const allowList = ["::1"]

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: (req, res) => {
        if (req.url === "/login" || req.url === "/register") return 5
        else return 100
    },
    standardHeaders: true,
    legacyHeaders: false,
    skip: (req, res) => allowList.includes(req.ip),
    message: {
        success: false,
        message: "TOO_MANY_REQUEST"
    }
})

export default apiLimiter