'use client'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import styles from './ListProducts.module.css'
import { useCallback, useEffect, useState } from 'react'
import { WhereFilterOp, collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../db/firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'
import { truncate } from 'fs'
import Image from 'next/image'
import ProductFieldFunction from '../SingleProductsFunctions/ProductFieldFunction'
import { Products } from '@/app/models/DBShirts'

export default function ListProducts(){
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [products, setProducts] = useState<Products[] | null >(null)
    const [pageInt, setPageInt] = useState<number>(1)
    const [total, setTotal] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(true);


      
    function pagination(doc:any){
        setProducts(null)
        setLoading(false)
        const orderResult:any = doc.docs.sort((a:any, b:any)=>{
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




    useEffect(()=> {

        const CollectionProduct = collection(db, "products");

        //verificações em constantes
        const categoryAll:string = searchParams.get('category') ? "category" : "globalType";
        const colorAll:string = searchParams.get('color') ? "color" : "globalType";
        const searchAll:string = searchParams.get('search') ? "keywords" : "globalType";
        const searchVerify:WhereFilterOp = searchParams.get('search') ? "array-contains" : "==";

        //constantes
        const category:string = searchParams.get('category') || 'All'
        const color:string = searchParams.get('color') || 'All'
        const search:string = searchParams.get('search') || 'All'


        //constante global
        const All = query(CollectionProduct, 
        where(categoryAll, "==", category), 
        where(searchAll, searchVerify , search),
        where(colorAll, "==" , color),
    );
        setProducts(null)
        setLoading(true);    
        getDocs(All).then((doc)=>{
            pagination(doc)
        });
      
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

                {loading && products ? [...Array.from(Array(10).keys())].map((num, i) => <div className={styles.skeleton} key={i}></div>) : ""}

            {products && products.map((val:Products, index:number)=>(
                <ProductFieldFunction product={val} key={index}/>
            ))}

            

            {products?.length == 0 && loading == false ?  "Nada encontrado" : ""}


            <div className={styles.pages}>
            {total > 0 ? [...Array.from(Array(total).keys())].map((num, i) => num + 1 == pageInt ? "" : <button key={i} onClick={()=>{changePage(num + 1)}}>{num + 1}</button>) : ''}
            </div>           
            

            </div>
        </div>
    )
}