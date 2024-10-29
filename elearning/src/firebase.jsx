// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from 'firebase/firestore';
import { createUserWithEmailAndPassword,getAuth,signInWithEmailAndPassword,signOut } from "firebase/auth";
import { addDoc,collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7DxG_WeXiJCyc8RpDKGn-gAINtWUY6nU",
    authDomain: "elearning-e3557.firebaseapp.com",
    projectId: "elearning-e3557",
    storageBucket: "elearning-e3557.appspot.com",
    messagingSenderId: "541077710677",
    appId: "1:541077710677:web:6d1871eb25b32456f371dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth  = getAuth(app);
const db =getFirestore(app);
const signup=async(name,email,password)=>{
    try{
   const res=     await createUserWithEmailAndPassword(auth,email,password);
   const user=res.user;
   await addDoc(collection(db,"user"),
{
    uid:user.uid,
    name,
    authProvider:"local",
    email,
});
    }catch(error){
       console.log(error);
       alert(error);
    }
}
const login=async(email,password)=>{
    try{
     await signInWithEmailAndPassword(auth,email,password);
    }catch(error){
        console.log(error); 
        alert(error);
    }
}
const logout=()=>{
    signOut(auth);
}
export{auth,db,login,signup,logout};