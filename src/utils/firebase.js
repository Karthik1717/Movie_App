// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyC99tXwcogFaTPDhtdlZK0Q7WGWcZ33JVs",
	authDomain: "netflixgpt-cee85.firebaseapp.com",
	projectId: "netflixgpt-cee85",
	storageBucket: "netflixgpt-cee85.appspot.com",
	messagingSenderId: "63730267664",
	appId: "1:63730267664:web:7d1ab1d411afe3b664fc95",
	measurementId: "G-B30D6PWMCK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
