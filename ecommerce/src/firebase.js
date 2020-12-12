import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD1xMwYZrS39Iw5yr7RFq-F4urwQcVwiEI",
  authDomain: "ecommerce-project-react.firebaseapp.com",
  projectId: "ecommerce-project-react",
  storageBucket: "ecommerce-project-react.appspot.com",
  messagingSenderId: "1028837512940",
  appId: "1:1028837512940:web:036a7f27a52c891a4137c9",
  measurementId: "G-50RP78R87J"
};




const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export const auth = firebase.auth();


export default db ;
