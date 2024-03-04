'use client'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import styles from './ListProducts.module.css'
import { useCallback, useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../db/firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'
import { truncate } from 'fs'

export default function ListProducts(){
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [products, setProducts] = useState<any>([])
    const [pageInt, setPageInt] = useState<any>(1)
    const [total, setTotal] = useState<any>(0)
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(()=> {
        const CollectionProduct = collection(db, "products");
        const category = query(CollectionProduct, where("category", "==", searchParams.get('category')));
        const search = query(CollectionProduct, where("keywords", "array-contains", searchParams.get('search')));
        const color = query(CollectionProduct, where("color", "==", searchParams.get('color')))
        const colorAndcategoryAndsearch = query(CollectionProduct, where("color", "==", searchParams.get('color')), where("keywords", "array-contains", searchParams.get('search')), where("category", "==", searchParams.get('category'))); 
        const colorAndcategory = query(CollectionProduct, where("category", "==", searchParams.get('category')), where("color", "==", searchParams.get('color')));
        const colorAndsearch = query(CollectionProduct, where("color", "==", searchParams.get('color')), where("keywords", "array-contains", searchParams.get('search')));
        const categoryAndsearch = query(CollectionProduct, where("category", "==", searchParams.get('category')), where("keywords", "array-contains", searchParams.get('search')));
        
        
     
        function pagination(doc:any){
                setProducts([])
                setLoading(false)    
                const result:any = []
                const total = Math.ceil(doc.docs.length / 8);
                const page = pageInt;
                setTotal(total);
                const count = (page * 8) - 8;
                let delimiter = count + 8;
                if(searchParams.has('page')){
                    setPageInt(Number(searchParams.get('page')))
                }else{
                    setPageInt(1)
                }
                
                if(page <= total){
                    for(let i=count; i<delimiter; i++){
                        if(doc.docs[i] != null){
                            result.push(doc.docs[i]);
                        }
                    }
                }
                setProducts(result)
        }

        setProducts([])
        setLoading(true);    
        getDocs(CollectionProduct).then((doc)=>{
            pagination(doc)
        });

        if(searchParams.has('category') && searchParams.has('color') === false  && searchParams.has('search') === false){
                
                getDocs(category).then((doc)=>{
                    pagination(doc)                
                });
            }
            
        if(searchParams.has('color') && searchParams.has('category') === false  && searchParams.has('search') === false){
                getDocs(color).then((doc)=>{
                   pagination(doc)
                });
        }
        
        if(searchParams.has('search') && searchParams.has('category') === false  && searchParams.has('color') === false){
                getDocs(search).then((doc)=>{
                    pagination(doc)
                });
        }
        
        if(searchParams.has('category') && searchParams.has('color') && searchParams.has('search') === false){
                getDocs(colorAndcategory).then((doc)=>{
                    pagination(doc)
                });
        }
        
        if(searchParams.has('category') && searchParams.has('color') && searchParams.has('search')){
                getDocs(colorAndcategoryAndsearch).then((doc)=>{
                    pagination(doc)
                });
        }
         
        if(searchParams.has('color') && searchParams.has('search') && searchParams.has('category') === false){
                getDocs(colorAndsearch).then((doc)=>{
                    pagination(doc)                 
                });
        }
        
        if(searchParams.has('category') && searchParams.has('search') && searchParams.has('color') === false){
                getDocs(categoryAndsearch).then((doc)=>{
                    pagination(doc)
                });
            }   

      
    },[pathname, searchParams,pageInt])




    function changePage(num:number){
        if(num == 1){
            router.push(pathname)    
        }else{
            const params = new URLSearchParams(searchParams.toString())
            params.set('page', num.toString())
            router.push(pathname + '?' + params.toString())       
        }
    }

    return (
        <div className={styles.ListProducts}>
            <div className={styles.products}>

            <div className={styles.skeletons}>
                {loading && products.length <= 0 ? [...Array.from(Array(10).keys())].map((num, i) => <div className={styles.singleProduct} key={i}></div>) : ""}
            </div>


            {products.length > 0 && products.map((val:any, index:number)=>(
                    <div className={styles.singleProduct} key={index}>
                        <Link href={`/products/${val.id}`}><img src={val.data().images[0]}/></Link>
                        <p className={styles.productsTitle}><Link href={`/products/${val.id}`}>{val.data().name.length > 15 ? val.data().name.substring(0,15)+'...' : val.data().name}</Link></p>
                        <p className={styles.productsPrice}><Link href={`/products/${val.id}`}>R${val.data().price}</Link></p>
                        <div className={styles.productsTitle}><p>Unisex</p> <button className={styles.likeButton}><FontAwesomeIcon icon={faHeart}/></button></div>
                    </div>
            ))}

            

            {products.length === 0 && loading == false ?  "Nada encontrado" : ""}


            <div className={styles.pages}>
            {total > 0 ? [...Array.from(Array(total).keys())].map((num, i) => num + 1 == pageInt ? "" : <button key={i} onClick={()=>{changePage(num + 1)}}>{num + 1}</button>) : ''}
            </div>           
            

            </div>
        </div>
    )
}