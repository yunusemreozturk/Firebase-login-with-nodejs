import Joi from "joi"
import APIError from "../../utils/api_error.js";
import MyRegExp from "../../utils/regexp.js";

class AuthValidation {
    static async login(req, res, next) {
        try {
            await Joi.object({
                email: Joi.string().trim().required().email({minDomainSegments: 2, tlds: {allow: ["com", "net"]}}),
                password: Joi.string().min(3).max(30).required()
            }).validateAsync(req.body)
        } catch (e) {
            if (e.details && e?.details[0].message)
                throw new APIError(e.details[0].message, 400)
            else throw new APIError('VALIDATION_ERROR', 400)
        }
        next();
    }

    static async register(req, res, next) {
        try {
            await Joi.object({
                username: Joi.string().min(3).max(15).trim().required().pattern(MyRegExp.username),
                email: Joi.string().trim().required().email({minDomainSegments: 2, tlds: {allow: ["com", "net"]}}),
                password: Joi.string().min(3).max(30).required()
            }).validateAsync(req.body)
        } catch (e) {
            if (e.details && e?.details[0].message)
                throw new APIError(e.details[0].message, 400)
            else throw new APIError('VALIDATION_ERROR', 400)
        }
        next();
    }

    static async passwordReset(req, res, next) {
        try {
            await Joi.object({
                email: Joi.string().trim().required().email({minDomainSegments: 2, tlds: {allow: ["com", "net"]}}),
            }).validateAsync(req.body)
        } catch (e) {
            if (e.details && e?.details[0].message)
                throw new APIError(e.details[0].message, 400)
            else throw new APIError('VALIDATION_ERROR', 400)
        }
        next();
    }
}

export default AuthValidation