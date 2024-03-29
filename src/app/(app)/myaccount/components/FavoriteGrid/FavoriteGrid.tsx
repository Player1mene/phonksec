'use client'
import { AdminContext } from '@/app/adminContext'
import styles from './FavoriteGrid.module.css'
import { useContext } from 'react'
import ListSingle from '../ListSingle/ListSingle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { db } from '@/app/db/firebase'
import { deleteDoc, doc } from 'firebase/firestore'

export default function FavoriteGrid(){

    
    const { wishes } = useContext(AdminContext)

    return (
        <div className={styles.FavoriteGrid}>
            {wishes && wishes.length > 0 ? 
                wishes.map((wishe: any, index:number)=>(
                    <div className={styles.innerProduct}>
                        <ListSingle product={wishe.data()} styles={styles} key={index}/> 
                        <button onClick={()=>{deleteDoc(doc(db, "usersFavorite", wishe.id))}}><FontAwesomeIcon icon={faTrash}/></button>   
                    </div>
                ))
            : ""}
        </div>
    )
}