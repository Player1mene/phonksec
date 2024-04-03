import CartEdit from '../components/CartEdit/CartEdit';
import styles from  './page.module.css'
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: "Carrinho - PhonkSec",
  };


export default function page(){
    return (
        <div className={styles.cart}>
           <CartEdit/> 
        </div>
    )
}