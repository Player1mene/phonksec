import { useEffect } from 'react'
import styles from './ListSingle.module.css'
import Image from 'next/image'
import Link from 'next/link'



export default function({product}: {product: any}){

    return(
        <div className={styles.ListSingle}>
            <Image width="1000" height="1000" src={product.image} alt=""/>
            <div className={styles.singleInfo}>  
                <Link href={`products/${product.productId}`}>{product.name.substr(0, 12)}...</Link>
                <Link href={`products/${product.productId}`}>R${product.price}</Link>
            </div>
        </div>
    )
}