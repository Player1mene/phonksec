import React from 'react'
import styles from './Nav.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faHouse, faPercent, faShirt, faUser, faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { getAuth, signOut } from 'firebase/auth'

export default function Nav() {

  const auth = getAuth();

  return (
    <header className={styles.header}>
        <ul>
            <li><Link href="/dashboard/painel"><FontAwesomeIcon icon={faHouse}/></Link></li>
            <li><Link href="/dashboard/painel/products"><FontAwesomeIcon icon={faShirt}/></Link></li>
            <li><Link href="/dashboard/painel/descont"><FontAwesomeIcon icon={faPercent}/></Link></li>
            <li onClick={()=>{signOut(auth)}}><Link href="#"><FontAwesomeIcon icon={faXmarkCircle}/></Link></li>  
        </ul>
        <button className={styles.userButton}>
            <FontAwesomeIcon icon={faUser}/>
        </button>
    </header>
  )
}
