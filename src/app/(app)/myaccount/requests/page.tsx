import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './page.module.css'
import { faFaceSadTear } from '@fortawesome/free-solid-svg-icons'

export default function page(){
    return (
        <div className={styles.request}>
            <FontAwesomeIcon icon={faFaceSadTear}/>
            <p>Nada por aqui ainda</p>
        </div>
    )
}