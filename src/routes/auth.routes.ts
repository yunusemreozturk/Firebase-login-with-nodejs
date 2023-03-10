import {Router} from "express"
import {login, register, passwordReset} from "../controller/auth.controller.js"
import AuthValidation from "../middlewares/validation/auth.validation.js";

const authRouter = Router()

authRouter.post("/login", AuthValidation.login, login)
authRouter.post("/register", AuthValidation.register, register)
authRouter.post("/password-reset", AuthValidation.passwordReset, passwordReset)

export {authRouter}