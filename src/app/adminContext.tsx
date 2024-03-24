'use client'
import React, { useState } from 'react';
import { auth, db, provider } from './db/firebase';
import { GoogleAuthProvider, getRedirectResult, onAuthStateChanged, signInWithEmailAndPassword, signInWithRedirect, signOut } from 'firebase/auth';
import { addDoc, collection, getDocs, onSnapshot, query, where } from 'firebase/firestore';

interface UserContextType {
    login: boolean,
    user: any,
    admin: boolean,
    wishes: any,
    cart: any,
    loginGoogle: any,
    signIn: any,
    loading: boolean,
    logOut: any,
}

export const AdminContext = React.createContext<UserContextType>({login: false, user: null, admin: false, wishes: null, cart: null, loginGoogle: null, signIn: null, loading: false, logOut: null});

export const UserStorage: React.FC<{children: React.ReactNode}>  = ({children}) => { 

const [login, setLogin] = useState<boolean>(false);
const [user, setUser] = useState<any>(null)
const [admin, setAdmin] = useState<boolean>(false);
const [wishes, setWishes] = useState<any>(null);
const [cart, setCart] = useState<any>(null);
const [loading, setLoading] = useState<boolean>(false);


function getWishes(id:string){
    const wishe = query(collection(db, "usersFavorite"), where("userId", "==", id));
    const unsubscribe = onSnapshot(wishe, (querySnapshot) => {
        const orderResult:any = querySnapshot.docs.sort((a:any,b:any)=>{
            if(a.data().docDate < b.data().docDate){
                return +1
            }else{
                return -1
            }
        })
        setWishes(orderResult);
    }); 
}

function getCart(id:string){
    const cart = query(collection(db, "usersCart"), where("userId", "==", id));
    const unsubscribe = onSnapshot(cart, (querySnapshot) => {
        const orderResult:any = querySnapshot.docs.sort((a:any,b:any)=>{
            if(a.data().docDate < b.data().docDate){
                return +1
            }else{
                return -1
            }
        })
        setCart(orderResult);
    }); 
}






function getUser(user: any) {
    setLoading(true);
    const u = query(collection(db, "users"), where("userId", "==", user.uid));
    const unsubscribe = onSnapshot(u,(dbUser)=>{
            setUser(dbUser.docs[0].data())
            setAdmin(dbUser.docs[0].data().admin)
            setLogin(true);
            getWishes(user.uid);
            getCart(user.uid);
            setLoading(false);
    });
}

React.useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
            getUser(user);
        } else {
            setUser(null);
            setAdmin(false);
            setLogin(false);
            setCart(null);
            setWishes(null);
            setLoading(false);
        }
    });
},[])


function createUserGoogle(user:any){
    addDoc(collection(db, "users"), {
        name: user.displayName,
        userId: user.uid,
        admin: false,
    }).then(()=>{
        getUser(user.uid);
    })
}


function loginGoogle(){
    signInWithRedirect(auth, provider);
    getRedirectResult(auth)
    .then((result:any) => {  
      const user:any | null = result.user;
      getDocs(query(collection(db, "users"), where("userId", "==", user.uid))).then((dbUser)=>{
          if(dbUser.docs.length < 1){
            createUserGoogle(user)
          }else{
            getUser(user.uid);
          }
      });

      console.log(user)
      // ...
    }).catch((error:any) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      console.log(errorMessage)
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

}

function signIn(email: string,password: string){
    signInWithEmailAndPassword(auth, email, password).then((userCredential)=>{
        const user = userCredential.user;
        getUser(user);
    }).catch(()=>{
        setUser(null);
        setAdmin(false);
        setLogin(false);
        setCart(null);
        setWishes(null);
    }) 
}


function  logOut() {
    signOut(auth).then(()=>{
        setUser(null);
        setAdmin(false);
        setLogin(false);
        setCart(null);
        setWishes(null);
    }).catch(()=>{
        setUser(null);
        setAdmin(false);
        setLogin(false);
        setCart(null);
        setWishes(null);
    })
}



  return (
       <AdminContext.Provider  value={{login: login, user: user, admin: admin, wishes: wishes, cart: cart, loginGoogle: ()=>{ loginGoogle() }, signIn: (email: string, password: string) => {signIn(email,password)}, loading: loading, logOut: ()=> {logOut()}}}>
            {children}    
        </AdminContext.Provider>
  )
  }
