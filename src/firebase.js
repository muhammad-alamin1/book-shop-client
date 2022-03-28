// import { initializeApp } from "firebase/app";
// import 'firebase/auth';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyD-YheF6ilnACvH7Wz4Q9URI4Hr5NvryA8",
    authDomain: "book-shop-6dac7.firebaseapp.com",
    projectId: "book-shop-6dac7",
    storageBucket: "book-shop-6dac7.appspot.com",
    messagingSenderId: "1073271058936",
    appId: "1:1073271058936:web:1028d2f24872bb4abee60d"
};

const app = initializeApp(firebaseConfig);


export default app;