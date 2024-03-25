'use client'
import { AdminContext } from '@/app/adminContext';
import styles from './ListAll.module.css';
import { useContext } from 'react';
import ListSingle from '../../ListSingle/ListSingle';


export default function ListAll(){

    const {user, wishes, cart} = useContext(AdminContext);

    return (
        <div className={styles.ListAll}>
                <div className={styles.listWishes}>
                    <h3>Minha lista de Desejos</h3>
                    <div className={styles.innerLast}>
                        {wishes && wishes.length > 0  ? wishes.map((product:any, index:number)=>(
                            <ListSingle key={index} product={product.data()}/>
                        )) : "nothing"}
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
                        {cart && cart.length > 0  ? cart.map((product:any, index:number)=>(
                            <ListSingle key={index} product={product.data()}/>
                        )) : "nothing"}
                    </div>
                </div>
        </div>
    )
}