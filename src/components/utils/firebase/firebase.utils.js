// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// to get document instance -> doc, get the document data -> getDoc, set the document data -> setDoc.
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// These will let us make CRUD actions to our firebase database
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3RXkPA_mZTFDASBg378MWmEg8_k3Wn_E",
  authDomain: "crwn-clothing-db-66181.firebaseapp.com",
  projectId: "crwn-clothing-db-66181",
  storageBucket: "crwn-clothing-db-66181.appspot.com",
  messagingSenderId: "211426130014",
  appId: "1:211426130014:web:69a0b91fe28450eba21ccf",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Everytime user interacts with parameter, we require them to SLECT AN ACCOUNT
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

// Pass signin the Auth and Provider
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

// Creating user data and storing that data inside our Firebase Firestore collection. We can see these user google popup SignIns on the firebase website(firebase->get started->Cloud Firestore)
export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
  // Guard Clause
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  // console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot);
  // console.log(userSnapshot.exists());

  /*
  if user data exists
  create set the document with the data from useAuth in my collection
   it userSnapshot/user data does NOT exist 
  */
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // try to set the document
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

// async function because it is AWAITING for the user to click SIGN OUT. We are waiting to see what 'signOut' will RETURN TO US
export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};

/**
 *
 * {
 * next: callback,
 * error: errorCalback,
 * complete: completedCallback
 * }
 *
 */
