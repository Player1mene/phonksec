'use client'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import styles from './ListProducts.module.css'
import { useCallback, useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../db/firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'
import { truncate } from 'fs'
import Image from 'next/image'
import ProductFieldFunction from '../productFunctions/ProductFieldFunction'

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
                const orderResult:any = doc.docs.sort((a:any,b:any)=>{
                    if(a.data().docDate < b.data().docDate){
                        return +1
                    }else{
                        return -1
                    }
                })    
                const result:any = []
                const total = Math.ceil(orderResult.length / 10);
                const page = pageInt;
                setTotal(total);
                const count = (page * 10) - 10;
                let delimiter = count + 10;
                if(searchParams.has('page')){
                    setPageInt(Number(searchParams.get('page')))
                }else{
                    setPageInt(1)
                }
                
                if(page <= total){
                    for(let i=count; i<delimiter; i++){
                        if(doc.docs[i] != null){
                            result.push(orderResult[i]);
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

                {loading && products.length <= 0 ? [...Array.from(Array(10).keys())].map((num, i) => <div className={styles.skeleton} key={i}></div>) : ""}

            {products.length > 0 && products.map((val:any, index:number)=>(
                <ProductFieldFunction product={val} key={index}/>
            ))}

            

            {products.length === 0 && loading == false ?  "Nada encontrado" : ""}


            <div className={styles.pages}>
            {total > 0 ? [...Array.from(Array(total).keys())].map((num, i) => num + 1 == pageInt ? "" : <button key={i} onClick={()=>{changePage(num + 1)}}>{num + 1}</button>) : ''}
            </div>           
            

            </div>
        </div>
    )
}