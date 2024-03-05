import React from 'react'
import styles from './Nav.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faHouse, faPercent, faShirt, faUser } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
  return (
    <header className={styles.header}>
        <ul>
            <li><Link href="/dashboard/painel"><FontAwesomeIcon icon={faHouse}/></Link></li>
            <li><Link href="/dashboard/painel/products"><FontAwesomeIcon icon={faShirt}/></Link></li>
            <li><Link href="/dashboard/painel/descont"><FontAwesomeIcon icon={faPercent}/></Link></li>
        </ul>
        <button className={styles.userButton}>
            <FontAwesomeIcon icon={faUser}/>
        </button>
    </header>
  )
}
