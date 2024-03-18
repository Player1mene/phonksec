import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, getRedirectResult, signInWithRedirect, AuthCredential, OAuthCredential, IdTokenResult } from 'firebase/auth'
import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";

  
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
const provider = new GoogleAuthProvider();

export async function singIn(email: string,password: string){
  let result: any[] = [null]
  let error: any[] = [null]
  try {
    result.push(await signInWithEmailAndPassword(auth, email, password));
    console.log('logado');
  } catch (e) {
    error.push(e)
    console.log('error')
  }



return { result, error };
}


export function loginGoogle(){
    signInWithRedirect(auth, provider);
    getRedirectResult(auth)
    .then((result:any) => {
      const user:any | null = result.user;
      getDocs(query(collection(db, "users"), where("userId", "==", user.uid))).then((dbUser)=>{
          if(dbUser.docs.length < 1){
            addDoc(collection(db, "users"), {
              name: user.displayName,
              userId: user.uid,
              admin: false,
            })
          }
      });

      console.log(user)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

}

export { auth , db};
