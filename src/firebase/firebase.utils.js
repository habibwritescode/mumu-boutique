// This import loads the firebase namespace.
import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCA5TFGlsaHey8dHwJYW1zDsXM5SEQS5ow",
    authDomain: "crwn-db-dff89.firebaseapp.com",
    databaseURL: "https://crwn-db-dff89.firebaseio.com",
    projectId: "crwn-db-dff89",
    storageBucket: "crwn-db-dff89.appspot.com",
    messagingSenderId: "581610266668",
    appId: "1:581610266668:web:8b000181cb32b854de3189",
    measurementId: "G-HSM6VV3D95"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    console.log('userAuth:', userAuth)
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
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    console.log('snapshot:', snapShot)
    return userRef;

}
// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;