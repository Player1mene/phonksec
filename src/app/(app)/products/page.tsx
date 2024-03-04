import ListProducts from '@/app/components/ListProducts'
import FilterProducts from '../../components/FilterProducts'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { Metadata } from 'next'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
   title: "Products - PhonkSec",
   description: "Seja bem-vindo(a) ao PhonkSec, sua destinação de moda alternativa! Explore a autenticidade em cada costura. Seja único(a) e descubra mais sobre nossa coleção exclusiva.",
   openGraph: {
      images: 'https://cdn.discordapp.com/attachments/1091340777197670460/1214233466867294209/ms-icon-144x144.png?ex=65f85e09&is=65e5e909&hm=ce3eb4709934cb8e88f62d360c3f2c809c7b06f46233c409ff56b01a308e3fc4&',
    },
 };

export default function page(){
  return (
    <div className={`${inter.className} ${styles.products}`}>
       <div className={styles.filter}>
          <FilterProducts/>
       </div>
       <div className={styles.list}>
          <ListProducts/>
       </div>
    </div>
  )
}