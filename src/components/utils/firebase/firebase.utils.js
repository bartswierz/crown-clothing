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
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from "firebase/firestore";
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
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

// Pass signin the Auth and Provider
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

//THIS ONE IS NOT REQUIRED FOR THE FRONTEND, THIS IS MEANT TO BE A 'ONE-OFF CALL' OTHERWISE IT WILL KEEP RE-ADDING DATA INTO OUR DATABASE. THE ALTERNATIVE IS TO WRITE OUR OWN JSON FILES WITH DATA
// THIS WILL ADD COLLECTION INTO OUR 'FIRESTORE' - See firebase.google -> Cloud Firestore. This will be ran inside 'Products.context'
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);

  objectsToAdd.forEach((object) => {
    // const docRef = doc(collectionRef, object[field].toLowerCase());
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

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

  // return userDocRef;
  return userSnapshot;
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

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
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
