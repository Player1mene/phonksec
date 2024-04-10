import { useEffect, useState } from 'react'
import styles from './CartEdit.module.css'
import { deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '@/app/db/firebase'
import Image from 'next/image'
import { DisabledState } from '@egjs/react-flicking'

export default function CartSingle({product}: { product: any}){

    const [productSingle, setProductSingle] = useState<any>(null)
    const [count, setCount] = useState<number>(0)

    useEffect(()=>{
        async function getDocument (coll:string, id:string) {
            const snap = await getDoc(doc(db, coll, id))
            if (snap.exists())
              setProductSingle(snap.data());
            else
              return Promise.reject(Error(`No such document: ${coll}.${id}`))
          }
          getDocument('products', product.data().productId)
          setCount(product.data().count)
    },[product])

    function remove(value: string, count: string) : string {
        const str:any = value.replace(",",".");
        const price:any = count.replace(",",".");
        const cal:string = Number(str - price).toString();
        const toString:string = Number.parseFloat(cal).toFixed(2).toString().replace(".",',');
        console.log(toString)
        return toString;
      }  
      




    function removeCount(){
        if(product.data().count > 1){
            const prod = doc(db, 'usersCart', product.id);
            const pricePlus = remove(product.data().price, product.data().productPrice); 
            updateDoc(prod, {
            count: product.data().count - 1,
            price: pricePlus,
            }).then(()=>{
                setCount(product.data().count - 1);
            })
        }else{
            deleteDoc(doc(db, "usersCart", product.id));
        }
        
    }

    function addPlus(value: string, count: number) : string {
        const valuePrice:any = value.replace(",",".");
        const priceAfter:string = Number(valuePrice * count).toString();
        const priceString:string = Number.parseFloat(priceAfter).toFixed(2).toString().replace(".",',');
        console.log(priceString)
        return priceString;
    }  

    function addCount(){
        if(count >= 1){
            const prod = doc(db, 'usersCart', product.id);
            const pricePlus = addPlus(product.data().productPrice, product.data().count + 1); 
            updateDoc(prod, {
            count: product.data().count + 1,
            price: pricePlus,
            }).then(()=>{
                setCount(product.data().count + 1);
            })
        }
        
    }

    return(
        <div className={styles.CartSingle}>
            {productSingle && 
            <div className={styles.productSingle}>
                <Image src={productSingle.images[0]} alt="" width="1000" height="1000" />
                    <div className={styles.cartInfo}>
                        <p>{productSingle.name.substr(0, 23)}...</p>
                        <p className={styles.lastPrice}><p className={styles.lastSingle}>R${productSingle.lastPrice}</p> {productSingle.descontPercent && <p className={styles.percent}>{productSingle.descontPercent} OFF</p>}</p>
                        <p>R${product.data().price}</p>
                        <p>Tamanho: {product.data().size}</p>
                        <div className={styles.count}>
                            <button onClick={()=>{removeCount()}}>-</button>
                            <div className={styles.countNumber}>{count}</div>
                            <button onClick={()=>{addCount()}}>+</button>    
                        </div> 
                    </div>
                </div>
            }
        </div>    
    )
}