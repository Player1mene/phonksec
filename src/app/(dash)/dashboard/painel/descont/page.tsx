import { Metadata } from 'next'
import styles from '../page.module.css'
import ListDescontAdmin from '../components/ListDescontAdmin'


export const metadata: Metadata = {
  title: 'Descontos - Painel',
}  

export default function page(){

  

 return (
    <main className={styles.painel}>
        <h2>Descontos</h2>
        <div className={styles.productsContainer}>
          <ListDescontAdmin/>
        </div>
    </main>
  )

 }