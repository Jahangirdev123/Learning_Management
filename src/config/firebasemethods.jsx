import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged,GithubAuthProvider, GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import app from "./firebaseconfig"


const auth = getAuth(app);

const provider=new GoogleAuthProvider()


let singUpwithgoogle=(obj)=>{
signInWithPopup(auth,provider).then((obj)=>{
obj.email,
obj.password
})

}

let signUpUser=(obj)=>{
 
   
  return  createUserWithEmailAndPassword(auth, obj.email, obj.password)


}

let logInUser=(obj)=>{
    
return signInWithEmailAndPassword(auth, obj.email, obj.password)
}

// let logOutUser=()=>{
    
// signOut(auth).then(() => {
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });}
// let checkAuthUser=()=>{
//     onAuthStateChanged(auth, (user) => {
//         if (user) {
//           // User is signed in, see docs for a list of available properties
//           // https://firebase.google.com/docs/reference/js/firebase.User
//           const uid = user.uid;
//           // ...
//         } else {
//           // User is signed out
//           // ...
//         }
//       });}

// Database methods

// export {signUpUser,signOut,logInUser,logOutUser,checkAuthUser} 
export {signUpUser,logInUser,singUpwithgoogle}