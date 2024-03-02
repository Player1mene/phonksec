import Image from 'next/image'
import styles from './page.module.css'
import Logo from '../../../public/logo.png'
export default function Loading(){
    return (
        <div className={styles.loading}>
            <div className={styles.loadingLogo}>
                <Image src={Logo} width="100" alt=''/>
            </div>
        </div>
    )
}