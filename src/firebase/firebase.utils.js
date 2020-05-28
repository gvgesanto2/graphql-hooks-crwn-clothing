import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBafR451FXzuaB3joGe-cstLxeUmcuH85o",
  authDomain: "crwn-db-6c2e0.firebaseapp.com",
  databaseURL: "https://crwn-db-6c2e0.firebaseio.com",
  projectId: "crwn-db-6c2e0",
  storageBucket: "crwn-db-6c2e0.appspot.com",
  messagingSenderId: "638722880932",
  appId: "1:638722880932:web:ebd5e6d96eb006ad877d31",
  measurementId: "G-XNGVQD7X49"
};

firebase.initializeApp(config);

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

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuht => {
      unsubscribe();
      resolve(userAuht);
    }, reject);
  });
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
