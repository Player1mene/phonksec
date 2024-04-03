import styles from  './page.module.css'
import FavoriteGrid from '../components/FavoriteGrid/FavoriteGrid'
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: "Meus Favoritos - PhonkSec",
  };


export default function page(){


    return (
        <div className={styles.wishes}>
            <FavoriteGrid/>
        </div>
    )
}