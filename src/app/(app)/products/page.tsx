import ListProducts from 'components/Products/ListProducts'
import FilterProducts from '@/app/components/FilterFunctionProducts/FilterProducts'
import { Inter } from 'next/font/google'
import "../../globals.css"
import "../app.css"
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