import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD4VGhrSsHURcGW6N_kIrnketj9yTW5-gI",
    authDomain: "crwn-db-199c0.firebaseapp.com",
    databaseURL: "https://crwn-db-199c0.firebaseio.com",
    projectId: "crwn-db-199c0",
    storageBucket: "crwn-db-199c0.appspot.com",
    messagingSenderId: "336304811098",
    appId: "1:336304811098:web:e4b6eaaa41424a4ccabc63",
    measurementId: "G-D2CV8EW4N7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;