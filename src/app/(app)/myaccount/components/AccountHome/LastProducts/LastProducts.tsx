'use client'
import { AdminContext } from '@/app/adminContext';
import styles from './LastProducts.module.css';
import { useContext, useEffect } from 'react';
import Image from 'next/image';


export default function LastProducts(){

    const user = useContext(AdminContext);


    return (
        <div className={styles.LastProducts}>
            <h3>Olá 👋, {user.user && user.user.name}</h3>
            <div className={styles.lastGrid}>
                <div className={styles.lastWishe}>
                    <h4>Último na lista de Desejos</h4>
                    <div className={styles.innerLast}>
                        
                        {user.wishes && user.wishes.length > 0  ? <Image width="1000" height="1000" alt="" src={user.wishes[0].data().image}></Image> : ""}
                        {user.wishes && user.wishes.length > 0 ? <p>{user.wishes[0].data().name}</p> : ""} 
                    
                    </div>
                </div>

                <div className={styles.lastRequest}>
                    <h4>Último nos pedidos</h4>
                    <div className={styles.innerLast}>
                        
                    </div>
                </div>

                <div className={styles.lastCart}>
                    <h4>Último no carrinho</h4>
                    <div className={styles.innerLast}>
                        {user.cart && user.cart.length > 0 ? <Image width="1000" height="1000" alt="" src={user.cart[0].data().photo}></Image>: ""}
                        {user.cart && user.cart.length > 0 ? <p>{user.cart[0].data().name}</p> : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}