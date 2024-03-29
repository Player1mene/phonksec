'use client'
import { AdminContext } from '@/app/adminContext';
import styles from './LastProducts.module.css';
import { useContext, useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSadTear } from '@fortawesome/free-solid-svg-icons';
import ListSingle from '../../ListSingle/ListSingle';


export default function LastProducts(){

    const user = useContext(AdminContext);


    return (
        <div className={styles.LastProducts}>
            <h3>Olá 👋, {user.user && user.user.name}</h3>
            <div className={styles.lastGrid}>
                <div className={styles.lastWishe}>
                    <h4>Último na lista de Desejos</h4>
                    <div className={styles.innerLast}>

                        {user.wishes && user.wishes.length > 0  ? "" :<div className={styles.nothing}>
                                <FontAwesomeIcon icon={faFaceSadTear}/>
                                <p>Nada por aqui</p>
                        </div>}
                        
                        {user.wishes && user.wishes.length > 0  ? <ListSingle product={user.wishes[0].data()} styles={styles} /> : ""}
                    
                    </div>
                </div>

                <div className={styles.lastRequest}>
                    <h4>Último nos pedidos</h4>
                    <div className={styles.innerLast}>
                        <div className={styles.nothing}>
                                <FontAwesomeIcon icon={faFaceSadTear}/>
                                <p>Nada por aqui</p>
                        </div>
                    </div>
                </div>

                <div className={styles.lastCart}>
                    <h4>Último no carrinho</h4>
                    <div className={styles.innerLast}>
                        {user.cart && user.cart.length > 0 ? "" :<div className={styles.nothing}>
                                <FontAwesomeIcon icon={faFaceSadTear}/>
                                <p>Nada por aqui</p>
                        </div>}

                        {user.cart && user.cart.length > 0  ? <ListSingle product={user.cart[0].data()} styles={styles} /> : ""}
                    
                    </div>
                </div>
            </div>
        </div>
    )
}