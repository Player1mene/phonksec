'use client'
import { db } from "@/app/db/firebase"
import { collection, getDocs } from "firebase/firestore"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import styles from '../page.module.css'
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons"

export default function ListProductsAdmin(){
    const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [products, setProducts] = useState<any>([])
  const [pageInt, setPageInt] = useState<any>(1)
  const [total, setTotal] = useState<any>(0)
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(()=> {
      const CollectionProduct = collection(db, "products");
  
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

      setLoading(true);    
      getDocs(CollectionProduct).then((doc)=>{
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
        <>
        {products.length > 0 && products.map((val:any, index:number)=>(
            <div className={styles.productsSingle} key={index}>
            <img src={val.data().images[0]}/>
        <div className={styles.info}>
            <div className={styles.infoWrapper}>
            <h4>{val.data().name.length > 15 ? val.data().name.substring(0,15)+'...' : val.data().name}</h4>
            <h4>R${val.data().price}</h4>
            <h4>{val.data().category}</h4>
            </div>

            <div className={styles.buttonWrapper}>
            <Link href={`/dashboard/painel/${val.id}`}><FontAwesomeIcon icon={faPen}/></Link>
            <Link href="/dashboard/painel"><FontAwesomeIcon icon={faTrash}/></Link>
            </div>
        </div>
        </div>
    ))}



    {products.length === 0 && loading == false ?  "Nada encontrado" : ""}


    <div className={styles.pages}>
    {total > 0 ? [...Array.from(Array(total).keys())].map((num, i) => num + 1 == pageInt ? "" : <button key={i} onClick={()=>{changePage(num + 1)}}>{num + 1}</button>) : ''}
    </div>
    </>           
)

}