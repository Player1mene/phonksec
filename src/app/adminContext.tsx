'use client'
import React from 'react';
import { auth, db } from './db/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';

interface UserContextType {
    login: boolean,
    user: any,
    admin: boolean,
    wishes: any,
    cart: any,
}

export const AdminContext = React.createContext<UserContextType>({login: false, user: null, admin: false, wishes: null, cart: null});

export const UserStorage: React.FC<{children: React.ReactNode}>  = ({children}) =>{ 

const [user , setUser] = React.useState<UserContextType>({login:false, user: null, admin: false, wishes: null, cart: null})

function getWishes(id:string){
    const wishes:any = [];
    getDocs(query(collection(db, "usersFavorite"), where("userId", "==", id))).then((favorite)=>{ 
        wishes.push(favorite)
    }); 

    return wishes;
}

function getCart(id:string){
    const cart:any = [];
    getDocs(query(collection(db, "usersCart"), where("userId", "==", id))).then((favorite)=>{ 
        cart.push(favorite)
    }); 

    return cart;
}

React.useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
            getDocs(query(collection(db, "users"), where("userId", "==", user.uid))).then((dbUser)=>{
                if(dbUser.docs[0].data().admin){
                    setUser({login: true, user: dbUser.docs[0].data(), admin: true, wishes: ()=> getWishes(dbUser.docs[0].data().userId), cart: ()=> getCart(dbUser.docs[0].data().userId)});
                    ;
                }else{
                    setUser({login: true, user: dbUser.docs[0].data(), admin: false, wishes: ()=> getWishes(dbUser.docs[0].data().userId), cart: ()=> getCart(dbUser.docs[0].data().userId)});
                    ;
                }
            });
            
        } else {
            setUser({login: false, user: null, admin: false, wishes: null, cart: null})
        }
    });
},[])



  return (
       <AdminContext.Provider  value={user}>
            {children}    
        </AdminContext.Provider>
  )
}
