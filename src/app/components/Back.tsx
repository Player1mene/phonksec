'use client'
import Link from "next/link";
import styles from  "./buttonBack/Back.module.css"
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Back({path, name}: {path:string, name: string}) {
  
  return (           
    <Link href={path} className={styles.back}>
        <FontAwesomeIcon icon={ faHouse }/>
        <p>{name}</p>
    </Link>
  );
}
