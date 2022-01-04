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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promps: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
