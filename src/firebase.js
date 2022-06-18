import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAff2XlSrnM5jydTY-WUvjJxMhY344whyI",
    authDomain: "whatsapp-clone-ab45.firebaseapp.com",
    projectId: "whatsapp-clone-ab45",
    storageBucket: "whatsapp-clone-ab45.appspot.com",
    messagingSenderId: "1084323998190",
    appId: "1:1084323998190:web:c4d51cdd5b9a83622f06ff"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const db = firebaseApp.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();