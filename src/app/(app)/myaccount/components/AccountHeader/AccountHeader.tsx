import styles from './AccountHeader.module.css'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faHeart, faShoppingCart, faUser, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { auth } from "@/app/db/firebase";
import { signOut } from "firebase/auth";
import { AdminContext } from '@/app/adminContext';
import { useContext } from 'react';

export default function AccountHeader(){

    const {logOut} = useContext(AdminContext)

    return (
    <div className={styles.header}>        

        <h3>Minha Conta</h3>

        <ul>
            <li><Link href="/myaccount"><FontAwesomeIcon icon={faUser} /> Visão geral</Link></li>
            
            <li><Link href="/myaccount"><FontAwesomeIcon icon={faHeart} /> Lista de Desejos</Link></li>
            
            <li><Link href="/myaccount"><FontAwesomeIcon icon={faBagShopping}/> Meus pedidos</Link></li>
        
            <li><Link href="/myaccount"><FontAwesomeIcon icon={faShoppingCart}/> Carrinho</Link></li>

            <li><Link href="#" onClick={()=>{logOut()}}><FontAwesomeIcon icon={faXmarkCircle}/> Fazer logout</Link></li>
        </ul>

    </div>
    
    )
}