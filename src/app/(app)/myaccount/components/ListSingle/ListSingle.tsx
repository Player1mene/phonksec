import { useEffect } from 'react'
import styles from './ListSingle.module.css'
import Image from 'next/image'
import Link from 'next/link'



export default function({product}: {product: any}){

    return(
        <div className={styles.ListSingle}>
            <Image width="1000" height="1000" src={product.image} alt="" style={{gridColumn: product.count && product.size ? "1 / 2" : "",width: product.count && product.size ? "100px" : "60px",height: product.count && product.size ? "100px" : "60px"}}/>
            <div className={styles.singleInfo}>  
                <Link href={`products/${product.productId}`}>{product.name.substr(0, 12)}...</Link>
                <Link href={`products/${product.productId}`}>R${product.price}</Link>
                {product.count && <Link href={`products/${product.productId}`}>Qnts: {product.count}</Link>}
                {product.size && <Link href={`products/${product.productId}`}>Tamanho: {product.size}</Link>}
            
            </div>
        </div>
    )
}