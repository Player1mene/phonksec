'use client'
import { AdminContext } from '@/app/adminContext';
import styles from './ListAll.module.css';
import { useContext } from 'react';


export default function ListAll(){

    const user = useContext(AdminContext);

    return (
        <div className={styles.ListAll}>
                <div className={styles.listWishes}>
                    <h3>Minha lista de Desejos</h3>
                    <div className={styles.innerLast}>
                        
                    </div>
                </div>

                <div className={styles.listRequests}>
                    <h3>Meus pedidos</h3>
                    <div className={styles.innerLast}>
                        
                    </div>
                </div>

                <div className={styles.listCarts}>
                    <h3>Carrinho</h3>
                    <div className={styles.innerLast}>
                            
                    </div>
                </div>
        </div>
    )
}