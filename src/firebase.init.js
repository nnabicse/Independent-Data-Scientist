// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjVr_ftxpD8Fipy3Lf6VQSh_fT7vCN3uk",
    authDomain: "independent-data-scientist.firebaseapp.com",
    projectId: "independent-data-scientist",
    storageBucket: "independent-data-scientist.appspot.com",
    messagingSenderId: "621141349749",
    appId: "1:621141349749:web:ba2618b8b65901effd2f3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;