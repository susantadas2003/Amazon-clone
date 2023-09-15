import{ initializeApp} from "firebase/app";
import {getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
require('firebase/auth');


const firebaseConfig = {
  apiKey: "AIzaSyDfmsFyo-re8K7-EkXWOdSNAEhXn5DlqKA",
  authDomain: "clone-c7a43.firebaseapp.com",
  projectId: "clone-c7a43",
  storageBucket: "clone-c7a43.appspot.com",
  messagingSenderId: "1011838501355",
  appId: "1:1011838501355:web:1d0106f19d935cdd8099ae",
  measurementId: "G-NCZ4Q2FGR5"
};

const app = initializeApp(firebaseConfig);
          
const db = getFirestore(app);


const auth = getAuth(app);

export {app,db,auth};