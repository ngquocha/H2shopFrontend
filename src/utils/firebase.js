import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
const firebaseConfig = {
  apiKey: "AIzaSyC6BDR8vZuUHiqt7VQkhLJ3pxYroNNjntA",
  authDomain: "ecom-chat-1d35c.firebaseapp.com",
  projectId: "ecom-chat-1d35c",
  storageBucket: "ecom-chat-1d35c.appspot.com",
  messagingSenderId: "517909678281",
  appId: "1:517909678281:web:ee31dcdc6180e6a3cee518",
  measurementId: "G-3X0P8VH3KR"
};

//NEW
// const firebaseConfig = {
//   apiKey: "AIzaSyBJCsOLMlAxYfaFgKLtuQBT44uUo18qFUc",
//   authDomain: "ecom-chat-7afea.firebaseapp.com",
//   projectId: "ecom-chat-7afea",
//   storageBucket: "ecom-chat-7afea.appspot.com",
//   messagingSenderId: "737695004045",
//   appId: "1:737695004045:web:6b91fc83f7769adb4eb9c4",
//   measurementId: "G-EJ4WVQXF1W"
// };
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export default firebase;
export const authentication = getAuth(initializeApp(firebaseConfig))