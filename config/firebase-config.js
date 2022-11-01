// import  firebase from 'firebase/app';
import config from "./config";
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs } from 'firebase/firestore';

const app = initializeApp(config);
const db = getFirestore(app);


export default db;






