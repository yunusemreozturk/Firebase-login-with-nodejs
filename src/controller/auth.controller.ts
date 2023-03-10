import {createUserWithEmailAndPassword, signInWithEmailAndPassword, User, sendPasswordResetEmail} from "firebase/auth";
import {auth} from "../config/firebase_config.js";
import MyResponse from "../utils/my_response.js";
import APIError from "../utils/api_error.js";
import FirebaseService from "../service/firebase_service.js";

const login = async (req, res) => {
    const {email, password} = req.body

    await signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            const user: User = userCredential.user;

            return new MyResponse(user).created(res);
        }).catch((error) => {
            throw new APIError(error.code, 40);
        });
}

const register = async (req, res) => {
    const {email, password} = req.body

    await createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            const user: User = userCredential.user;

            await FirebaseService.saveUserInfo(user);

            return new MyResponse(user).created(res);
        }).catch((error) => {
            throw new APIError(error.code, 400);
        });
}

const passwordReset = async (req, res) => {
    const {email} = req.body

    await sendPasswordResetEmail(auth, email)
        .then(function () {
            return new MyResponse(req.body).success(res);
        }).catch((error) => {
            throw new APIError(error.code, 400);
        });

}

export {login, register, passwordReset}