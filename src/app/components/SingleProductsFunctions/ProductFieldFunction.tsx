'use client'
import Link from 'next/link'
import styles from '../Products/ListProducts.module.css'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { AdminContext } from '@/app/adminContext'
import { collection, doc, deleteDoc, getDocs, onSnapshot, query, where, addDoc} from 'firebase/firestore'
import { db } from '@/app/db/firebase'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import FavoriteProduct from './FavoriteProduct'

export default function ProductFieldFunction(props : {product: any}) {
    
    const [loading, setLoading] = useState<boolean>(true);


    return (
        <div className={styles.singleProduct}> 
            <Link className={styles.imageSingle} href={`/products/${props.product.id}`}>
            <Image loading='lazy' onLoad={() => setLoading(false)} alt="" width='1000' height="1000" src={props.product.data().images[0]}/>
            {loading && <p className={styles.loadingImage}><FontAwesomeIcon icon={faImage}/></p>}
            {props.product.data().descontPercent && <h4 className={styles.percent}>{props.product.data().descontPercent} OFF</h4>}
            </Link>
            <p className={styles.productsTitle}>{loading && <p className={styles.loadingName}></p>}<Link href={`/products/${props.product.id}`}>{props.product.data().name.length > 15 ? props.product.data().name.substring(0,15)+'...' : props.product.data().name}</Link></p>
            <p className={styles.productsPrice}>{loading && <p className={styles.loadingName}></p>} {props.product.data().lastPrice && <Link href={`/products/${props.product.id}`}>De <h5 style={{textDecoration: 'line-through'}}>R${props.product.data().lastPrice}</h5> Por </Link>}<Link href={`/products/${props.product.id}`}>R${props.product.data().price}</Link></p>
            <div className={styles.productsTitle}>{loading && <p className={styles.loadingName}></p>} <p>Unisex</p> <FavoriteProduct product={props.product}/></div>
        </div>
    )
}