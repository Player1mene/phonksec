import type { Metadata } from "next";
import styles from './page.module.css'

export const metadata: Metadata = {
    title: "Minha Conta - PhonkSec",
  };

export default function page(){

    return (
    <div className={styles.myaccount}> 

        <div className={styles.helloUser}>
            <div className={styles.lastProducts}>
                
            </div>
        </div>

        <div className={styles.listAll}>

        </div>

    </div>
    
    )
}