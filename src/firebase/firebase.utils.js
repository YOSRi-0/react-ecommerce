import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyBwmu7YYPExFXMRku-ELdxoG5Q0Ac5u2Z0',
  authDomain: 'crown-db-4f328.firebaseapp.com',
  projectId: 'crown-db-4f328',
  storageBucket: 'crown-db-4f328.appspot.com',
  messagingSenderId: '310063471999',
  appId: '1:310063471999:web:da00276097dac2a48b4e4a',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // get user from google api
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // make it a snapshot so we can use it
  const snapshot = await userRef.get();

  // store user in database if it doesn't exist
  if (!snapshot.exists) {
    // pull user info from google api and prepare it to be stored in database
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // save user in database
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

// helper function to add collections to firebase
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshopToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promps: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
