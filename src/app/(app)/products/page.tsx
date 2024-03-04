import ListProducts from '@/app/components/ListProducts'
import FilterProducts from '../../components/FilterProducts'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { Metadata } from 'next'
import Head from 'next/head'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
   title: "Products - PhonkSec",
   description: "Seja bem-vindo(a) ao PhonkSec, sua destinação de moda alternativa! Explore a autenticidade em cada costura. Seja único(a) e descubra mais sobre nossa coleção exclusiva.",
   openGraph: {
     images: 'https://cdn.discordapp.com/attachments/1091340777197670460/1214243564503048312/image.png?ex=65f86771&is=65e5f271&hm=5a12786d4b6dd2f9b6efd0de8a8f68dda2681028955dfc991e0434017a16e0b2&',
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