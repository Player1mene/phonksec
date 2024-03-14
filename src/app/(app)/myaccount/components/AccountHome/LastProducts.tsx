'use client'
import { AdminContext } from '@/app/adminContext';
import styles from './LastProducts.module.css';
import { useContext } from 'react';


export default function LastProducts(){

    const user = useContext(AdminContext);

    return (
        <div className={styles.LastProducts}>
            <h3>Olá 👋, {user.user.name}</h3>
            <div className={styles.lastGrid}>
                <div className={styles.lastWishe}>
                    <h4>Último na lista de Desejos</h4>
                    <div className={styles.innerLast}>
                        
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
                            
                    </div>
                </div>
            </div>
        </div>
    )
}