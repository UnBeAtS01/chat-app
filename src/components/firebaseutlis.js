import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
var firebaseConfig = {
    apiKey: "AIzaSyCpFD0db9Ah3Q8-R6MssvSQMUEGRYZw_ag",
    authDomain: "chat-app-3b5be.firebaseapp.com",
    projectId: "chat-app-3b5be",
    storageBucket: "chat-app-3b5be.appspot.com",
    messagingSenderId: "271077866222",
    appId: "1:271077866222:web:43a626a9a8fbe42e5c11ff",
    measurementId: "G-FN6VT7ET4H"
};
firebase.initializeApp({
    apiKey: "AIzaSyCpFD0db9Ah3Q8-R6MssvSQMUEGRYZw_ag",
    authDomain: "chat-app-3b5be.firebaseapp.com",
    projectId: "chat-app-3b5be",
    storageBucket: "chat-app-3b5be.appspot.com",
    messagingSenderId: "271077866222",
    appId: "1:271077866222:web:43a626a9a8fbe42e5c11ff",
    measurementId: "G-FN6VT7ET4H"
});
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const SignInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
}