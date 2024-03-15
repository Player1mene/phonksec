'use client'
import Link from 'next/link'
import styles from '../ListProducts/ListProducts.module.css'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { AdminContext } from '@/app/adminContext'
import { collection, doc, deleteDoc, getDocs, onSnapshot, query, where, addDoc} from 'firebase/firestore'
import { db } from '@/app/db/firebase'
import FasHeart from '../../../../public/fasHeart.svg';
import FarHeart from '../../../../public/farHeart.svg';
import { useRouter } from 'next/navigation'

export default function ProductFieldFunction(props : {product: any}) {
    const user = React.useContext(AdminContext)
    const [favorite, setFavorite] = useState<boolean>(false);
    const router = useRouter();
    useEffect(()=>{
        if(user.login){
            const favorites = collection(db, "usersFavorite");
            const q = query(favorites, where("userId", "==", user.user.userId), where('productId', "==", props.product.id));
            getDocs(q).then((doc)=>{
                if(doc.docs.length == 1){
                    setFavorite(true);
                }else{
                    setFavorite(false);
                }
            }).catch(()=>{
                console.log('effect error')
                setFavorite(false);
            })
        }else{
            setFavorite(false)
        }
    },[user.login, favorite])

    function unlikePhoto(){
        if(user.login){
            const favorites = collection(db, "usersFavorite")
            const q = query(favorites, where("userId", "==", user.user.userId), where('productId', "==", props.product.id));
            getDocs(q).then((document)=>{
                if(document.docs.length == 1){
                    const id = document.docs[0].id;
                    deleteDoc(doc(db, "usersFavorite", id));
                    setFavorite(false);
                }else{
                    if(props.product.data().lastPrice && props.product.data().descontPercent){    
                        addDoc(collection(db, "usersFavorite"), {
                            productId: props.product.id,
                            userId: user.user.userId,
                            name: props.product.data().name,
                            lastPrice: props.product.data().lastPrice && props.product.data().lastPrice,
                            descontPercent: props.product.data().descontPercent && props.product.data().descontPercent,
                            price: props.product.data().price,
                            image: props.product.data().images[0],
                            docDate: new Date().getTime(), 
                            date: new Date().toLocaleDateString(),
                        }).then(()=>{
                            setFavorite(true);
                        })
                    }else{
                        addDoc(collection(db, "usersFavorite"), {
                            productId: props.product.id,
                            userId: user.user.userId,
                            name: props.product.data().name,
                            price: props.product.data().price,
                            image: props.product.data().images[0],
                            docDate: new Date().getTime(), 
                            date: new Date().toLocaleDateString(),
                        }).then(()=>{
                            setFavorite(true);
                        })
                    }
                }
            }).catch(()=>{
                console.log('error')
                setFavorite(false);
            })
        }else{
            router.push('/login');
        }
    }






    return (
        <div className={styles.singleProduct}>
            <Link className={styles.imageSingle} href={`/products/${props.product.id}`}>
            <Image alt="" width='1000' height="1000" src={props.product.data().images[0]}/>
            {props.product.data().descontPercent && <h4 className={styles.percent}>{props.product.data().descontPercent} OFF</h4>}
            </Link>
            <p className={styles.productsTitle}><Link href={`/products/${props.product.id}`}>{props.product.data().name.length > 15 ? props.product.data().name.substring(0,15)+'...' : props.product.data().name}</Link></p>
            <p className={styles.productsPrice}>{props.product.data().lastPrice && <Link href={`/products/${props.product.id}`}>De <h5 style={{textDecoration: 'line-through'}}>R${props.product.data().lastPrice}</h5> Por </Link>}<Link href={`/products/${props.product.id}`}>R${props.product.data().price}</Link></p>
            <div className={styles.productsTitle}><p>Unisex</p> {favorite == true ? <button className={styles.likeButton} onClick={()=>{unlikePhoto()}}><Image width="10" height="10" alt="" src={FasHeart}/></button> : <button className={styles.likeButton} onClick={()=>{unlikePhoto()}}><Image width="10" height="10" alt="" src={FarHeart}/></button>}</div>
        </div>
    )
}