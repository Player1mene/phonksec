import ListProducts from '@/app/components/ListProducts'
import FilterProducts from '../../components/FilterProducts'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ["latin"] })

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