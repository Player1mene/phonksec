'use client'
import React, { useState } from 'react';
import { auth, db } from './db/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, onSnapshot, query, where } from 'firebase/firestore';

interface UserContextType {
    login: boolean,
    user: any,
    admin: boolean,
    wishes: any,
    cart: any,
}

export const AdminContext = React.createContext<UserContextType>({login: false, user: null, admin: false, wishes: null, cart: null});

export const UserStorage: React.FC<{children: React.ReactNode}>  = ({children}) =>{ 

const [login, setLogin] = useState<boolean>(false);
const [user, setUser] = useState<any>(null)
const [admin, setAdmin] = useState<boolean>(false);
const [wishes, setWishes] = useState<any>(null);
const [cart, setCart] = useState<any>(null);

function getWishes(id:string){
    const wishe = query(collection(db, "usersFavorite"), where("userId", "==", id));
    const unsubscribe = onSnapshot(wishe, (querySnapshot) => {
        setWishes(querySnapshot.docs);
    }); 
}

function getCart(id:string){
    const cart = query(collection(db, "usersCart"), where("userId", "==", id));
    const unsubscribe = onSnapshot(cart, (querySnapshot) => {
        setCart(querySnapshot.docs);
    }); 
}

React.useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
            getDocs(query(collection(db, "users"), where("userId", "==", user.uid))).then((dbUser)=>{
                setUser(dbUser.docs[0].data())
                setAdmin(dbUser.docs[0].data().admin)
                setLogin(true);
                getWishes(user.uid);
                getCart(user.uid);
            });
            
        } else {
            setUser(null);
            setAdmin(false);
            setLogin(false);
            setCart(null);
            setWishes(null);
        }
    });
},[])



  return (
       <AdminContext.Provider  value={{login: login, user: user, admin: admin, wishes: wishes, cart: cart}}>
            {children}    
        </AdminContext.Provider>
  )
}
