'use client'
import {useState} from 'react'
import styles from './DropDown.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';

export default function DropDown ({title, dropInfo}: {title: string, dropInfo: string}){

  const [show, setShow] = useState<boolean>(true);


  return (
    <div  className={`${styles.dropDown} ${!show ? "" : styles.dropUp}`}>
        <div className={styles.title} onClick={()=>{setShow(!show)}}>
            <p>{title}</p>
            {!show? <FontAwesomeIcon icon={faCaretDown}/> : <FontAwesomeIcon icon={faCaretRight}/>}
        </div>
        <div className={styles.info}>
            <p>{dropInfo}</p>
        </div>
    </div>
  )
}
