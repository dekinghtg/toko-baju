import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDRKr2KrMqqFQ2ZKS3PcCcZhQUOUwpAm3Y",
    authDomain: "toko-baju-b7d63.firebaseapp.com",
    projectId: "toko-baju-b7d63",
    storageBucket: "toko-baju-b7d63.appspot.com",
    messagingSenderId: "418133483199",
    appId: "1:418133483199:web:f447e33911845ff12cb00a",
    measurementId: "G-3FYNM1SYH4"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;