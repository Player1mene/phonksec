import ListProducts from '@/app/components/ListProducts/ListProducts'
import FilterProducts from '../../components/ListProducts/FilterProducts/FilterProducts'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { Metadata } from 'next'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
   title: "Produtos - PhonkSec",
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