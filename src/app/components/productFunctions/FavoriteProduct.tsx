import { AdminContext } from "@/app/adminContext";
import { db } from "@/app/db/firebase";
import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import FasHeart from '../../../../public/fasHeart.svg';
import FarHeart from '../../../../public/farHeart.svg';
import spinner from '../../../../public/spinner.svg'
import styles from '../ListProducts/ListProducts.module.css'

export default function FavoriteProduct(props: {product:any}){
    const user = React.useContext(AdminContext)
    const [favorite, setFavorite] = useState<boolean>(false);
    const [loading,setLoading] = useState<boolean>(false)
    const router = useRouter();
    useEffect(()=>{
        setLoading(true);
        if(user.login){
            const favorites = collection(db, "usersFavorite");
            const q = query(favorites, where("userId", "==", user.user.userId), where('productId', "==", props.product.id));
            setLoading(true);
            getDocs(q).then((doc)=>{
                if(doc.docs.length == 1){
                    setLoading(false);
                    setFavorite(true);
                }else{
                    setLoading(false)
                    setFavorite(false);
                }
            }).catch(()=>{
                console.log('effect error')
                setFavorite(false);
            })
        }else{
            setLoading(false)
            setFavorite(false)
        }
    },[user.login, favorite])

    function unlikePhoto(){
        setLoading(true)
        if(user.login){
            const favorites = collection(db, "usersFavorite")
            const q = query(favorites, where("userId", "==", user.user.userId), where('productId', "==", props.product.id));
            setLoading(true)
            getDocs(q).then((document)=>{
                if(document.docs.length == 1){
                    const id = document.docs[0].id;
                    deleteDoc(doc(db, "usersFavorite", id));
                    setFavorite(false);
                    setLoading(false)
                }else{
                    setLoading(true)
                    if(props.product.data().lastPrice && props.product.data().descontPercent){    
                        addDoc(collection(db, "usersFavorite"), {
                            productId: props.product.id,
                            userId: user.user.userId,
                            docDate: new Date().getTime(), 
                            date: new Date().toLocaleDateString(),
                        }).then(()=>{
                            setFavorite(true);
                            setLoading(false);
                        })
                    }else{
                        setLoading(true)
                        addDoc(collection(db, "usersFavorite"), {
                            productId: props.product.id,
                            userId: user.user.userId,
                            docDate: new Date().getTime(), 
                            date: new Date().toLocaleDateString(),
                        }).then(()=>{
                            setFavorite(true);
                            setLoading(false)
                        })
                    }
                }
            }).catch(()=>{
                console.log('error')
                setFavorite(false);
                setLoading(false)
            })
        }else{
            router.push('/login');
            setLoading(false)
        }
    }

    return(
        <div className={styles.spinnerContainer}>
                {loading && <button className={styles.likeButton} ><Image width="20" height="20" alt="" src={spinner}/></button>}
                {!loading && 
                    <div>
                        {favorite == true ? <button className={styles.likeButton} onClick={()=>{unlikePhoto()}}><Image width="10" height="10" alt="" src={FasHeart}/></button> : <button className={styles.likeButton} onClick={()=>{unlikePhoto()}}><Image width="10" height="10" alt="" src={FarHeart}/></button>}        
                    </div>
                }
                
        </div>
    )
}