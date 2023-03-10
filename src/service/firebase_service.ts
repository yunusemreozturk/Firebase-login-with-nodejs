import {User} from 'firebase/auth';
import {getFirestore, collection, getDocs, addDoc} from 'firebase/firestore/lite';
import {db} from "../config/firebase_config.js";
import UserModel from "../models/user_model.js";

class FirebaseService {
    static async saveUserInfo(user: User) {
        try {
            const userJson: string = JSON.stringify(user.toString());

            const docRef = await addDoc(collection(db, "users"), JSON.parse(userJson));

            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
}

export default FirebaseService