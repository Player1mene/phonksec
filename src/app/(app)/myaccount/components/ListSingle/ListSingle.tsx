'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/app/db/firebase'



export default function ListSingle({product, styles}: {product: any, styles: any}){

    const [productSingle, setProductSingle] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(()=>{
        async function getDocument (coll:string, id:string) {
            const snap = await getDoc(doc(db, coll, id))
            if (snap.exists())
              setProductSingle(snap.data());
            else
              return Promise.reject(Error(`No such document: ${coll}.${id}`))
          }
          getDocument('products', product.productId)
    },[product])


    function loadingToFalse(){
        setLoading(false)
    }

    return(
        <div className={styles.innerSingle}>
            {productSingle ?
            
                <div className={styles.ListSingle}>
                <div className={styles.singleImage}>
                    {loading && <div className={styles.loading}></div>}
                <Image width="1000" height="1000" src={productSingle.images[0]} alt="" onLoad={()=>{loadingToFalse()}}style={{gridColumn: product.count && product.size ? "1 / 2" : "",width: product.count && product.size ? "100px" : "60px",height: product.count && product.size ? "100px" : "60px"}}/>
                </div>
                <div className={styles.singleInfo}>  
                {loading && <div className={styles.loading}></div>}
                <Link href={`/products/${product.productId}`}>{productSingle.name.substr(0, 12)}...</Link>
                <Link href={`/products/${product.productId}`}>R${productSingle.price}</Link>
                {product.count && <Link href={`/products/${product.productId}`}>Qnts: {product.count}</Link>}
                {product.size && <Link href={`/products/${product.productId}`}>Tamanho: {product.size}</Link>}
                
            </div>
            </div>    
            : <div className={styles.loadingAll}></div>}
            </div>
    )
}