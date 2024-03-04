import ListProducts from '@/app/components/ListProducts'
import FilterProducts from '../../components/FilterProducts'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { Metadata } from 'next'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
   title: "Products - PhonkSec",
   description: "Seja bem-vindo(a) ao PhonkSec, sua destinação de moda alternativa! Explore a autenticidade em cada costura. Seja único(a) e descubra mais sobre nossa coleção exclusiva.",
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