import type { Metadata } from "next";
import styles from './page.module.css'
import LastProducts from "./components/AccountHome/LastProducts/LastProducts";
import ListAll from "./components/AccountHome/ListAll/ListAll";

export const metadata: Metadata = {
    title: "Minha Conta - PhonkSec",
  };

export default function page(){

    return (
    <div className={styles.myaccount}> 

        <div className={styles.helloUser}>
            <LastProducts/>
        </div>

        <div className={styles.listAll}>
            <ListAll/>
        </div>

    </div>
    
    )
}