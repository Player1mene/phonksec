import { Metadata } from 'next';
import styles from './page.module.css'
import '../../globals.css'
import LoginForm from './components/LoginForm';
import Image from 'next/image';

export const metadata: Metadata = {
    title: "Login - PhonkSec",
    icons: [
        {
          rel: 'icon',
          type: 'image/webp',
          url: 'https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/logo-and-wallpapers%2Ffavicon.webp?alt=media&token=f277508a-6cf8-4c15-9510-42c92a3e7bf3',
        },
      ],
};

export default function page(){
    
    return (
    
        <div className={styles.loginPage}>
            <div className={styles.loginForm}>
                <LoginForm/>
            </div>
            <div className={styles.loginImage}>
                <div className={styles.layer}>
                        <Image src="https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/logo-and-wallpapers%2Fphonksec_logo.png?alt=media&token=8b2a0c5c-8d85-41d7-954b-560b7d9d7e93" alt='' width="793" height="980"/>     
                </div>
            </div>
        </div>
    
    )
}