import { Metadata } from 'next'
import ListProductsAdmin from './components/ListProductsAdmin'
import styles from './page.module.css'



export const metadata: Metadata = {
  title: 'Home - Painel',
}  

export default function page(){

  

 return (
    <main className={styles.painel}>
        <h2>Home</h2>
        <div className={styles.productsContainer}>
          <ListProductsAdmin/>
        </div>
    </main>
  )
}
