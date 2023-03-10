import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyAzMkAKtQIVoB-4A_MmEWrVeHegdzFrlIg",
    authDomain: "fir-login-n.firebaseapp.com",
    projectId: "fir-login-n",
    storageBucket: "fir-login-n.appspot.com",
    messagingSenderId: "1060204844735",
    appId: "1:1060204844735:web:bbf812e38ee83630b6580a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};
