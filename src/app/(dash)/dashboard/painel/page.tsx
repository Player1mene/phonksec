import ListProductsAdmin from './components/ListProductsAdmin'
import styles from './page.module.css'



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
