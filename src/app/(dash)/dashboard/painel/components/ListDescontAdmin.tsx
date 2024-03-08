'use client'
import { db } from "@/app/db/firebase"
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import styles from '../page.module.css'
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons"
import { deleteObject, getStorage, ref } from "firebase/storage"

export default function ListDescontAdmin(){
    const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [products, setProducts] = useState<any>([])
  const [pageInt, setPageInt] = useState<any>(1)
  const [total, setTotal] = useState<any>(0)
  const [loading, setLoading] = useState<boolean>(true);
  const storage = getStorage()

  useEffect(()=> {
      const CollectionProduct = collection(db, "products");
  
      function pagination(doc:any){
              setProducts([])
              setLoading(false)    
              const result:any = []
              const total = Math.ceil(doc.docs.length / 5);
              const page = pageInt;
              setTotal(total);
              const count = (page * 5) - 5;
              let delimiter = count + 5;
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


function deleteDocument(id: string, images:[]){
    images.map((item:any)=>{
        let itemSplit:any = item.split("%2F");
        let itemUrl:any = itemSplit[1].split("?");
        const desertRef = ref(storage, 'products/'+itemUrl[0]);
        deleteObject(desertRef).then(() => {
            console.log('Sucess')
        })
        console.log(itemUrl)
    })

    deleteDoc(doc(db, "products", id));
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
            <Link href={`/dashboard/painel/descont/${val.id}`}><FontAwesomeIcon icon={faPen}/></Link>
            <button onClick={()=>{deleteDocument(val.id, val.data().images)}} className={styles.delete}><FontAwesomeIcon icon={faTrash}/></button>
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