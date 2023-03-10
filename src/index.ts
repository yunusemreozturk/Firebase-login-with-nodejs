import "express-async-errors"
import express from "express"
import cors from "cors"
import router from "./routes/index.js";
import {config} from "dotenv";
import Logger from "./utils/logger.js";
import errorHandlerMiddlewares from "./middlewares/error_handling.js";
import apiLimiter from "./middlewares/api_limiter.js";

config()
const app = express()
const port = process.env.PORT || 5002

//todo: currentUser mantığını yap
//todo: şifremi unuttum yap
//todo: email doğrulaması ve telefon doğrulaması yap
//todo: signOut yap

app.use(express.json())
app.use(express.json({limit: "50mb"}))
app.use(express.urlencoded({limit: "50mb", extended: true, parameterLimit: 50000}))
app.use(Logger.logger)
app.use(cors());

app.get("/", (req, res) => {
    res.json({"message": "Welcome"})
})

app.use("/api", apiLimiter)
app.use("/api", router)

app.use(errorHandlerMiddlewares)

app.listen(port, () => {
    console.log(`Server start: ${port}`)
})