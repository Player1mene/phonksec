'use client'
import React from 'react';
import { auth, db } from './db/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';

interface UserContextType {
    login: boolean,
    user: object | null,
    admin: boolean,
}

export const AdminContext = React.createContext<UserContextType>({login: false, user: null, admin: false});

export const UserStorage: React.FC<{children: React.ReactNode}>  = ({children}) =>{ 

const [user , setUser] = React.useState<UserContextType>({login:false, user: null, admin: false})

React.useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
            getDocs(query(collection(db, "users"), where("userId", "==", user.uid))).then((dbUser)=>{
                if(dbUser.docs[0].data().admin){
                    setUser({login: true, user: dbUser.docs[0].data(), admin: true})
                }else{
                    setUser({login: true, user: dbUser.docs[0].data(), admin: false})
                }
            });
            
        } else {
            setUser({login: false, user: null, admin: false})
        }
    });
},[])



  return (
       <AdminContext.Provider  value={ user }>
            {children}    
        </AdminContext.Provider>
  )
}
