import {User} from 'firebase/auth';
import {getFirestore, collection, getDocs, addDoc} from 'firebase/firestore/lite';
import {db} from "../config/firebase_config.js";
import UserModel from "../models/user_model.js";
import APIError from "../utils/api_error.js";

class FirebaseService {
    static async saveUserInfo(user: User) {
        try {
            await addDoc(collection(db, "users"), JSON.parse(JSON.stringify(user)))
        } catch (e) {
            console.log('catch saveUserInfo', e.message)
            throw new APIError(e.message, 400)
        }
    }
}

export default FirebaseService