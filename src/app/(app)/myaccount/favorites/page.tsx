import styles from  './page.module.css'
import FavoriteGrid from '../components/FavoriteGrid/FavoriteGrid'


export default function page(){


    return (
        <div className={styles.wishes}>
            <FavoriteGrid/>
        </div>
    )
}