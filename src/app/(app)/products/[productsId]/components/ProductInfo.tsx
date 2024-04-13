'use client'
import Image from 'next/image'
import styles from './ProductInfo.module.css'
import Flicking from '@egjs/react-flicking'
import { addDoc, collection, doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { db } from '@/app/db/firebase';
import { useContext, useEffect, useRef, useState } from 'react';
import { Sync } from '@egjs/flicking-plugins';
import { Inter } from 'next/font/google';
import FavoriteProduct from 'components/SingleProductsFunctions/FavoriteProduct';
import { AdminContext } from '@/app/adminContext';
import Spinner from "../../../../../../public/spinnerWhite.svg"
const inter = Inter({ subsets: ["latin"], weight: ["100","200","300","400","500","600","700"], display: 'swap' });


export default function ProductInfo({productsId}:{ productsId: string}){



    const user = useContext(AdminContext);
    const [product, setProduct] = useState<any>(null)
    const [size, setSize] = useState<string | null>(null)
    const flicking1 = useRef<any>();
    const flicking2 = useRef<any>();
    const [load, setLoad] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [confirm, setConfirm] = useState<string>('Adicionar ao carrinho')
  
    const [plugins, setPlugins] = useState<any>([]);
  
    useEffect(() => {
      setPlugins([new Sync({
        type: "index",
        synchronizedFlickingOptions: [
          {
            flicking: flicking1.current,
            isSlidable: true
          },
          {
            flicking: flicking2.current,
            isClickable: true,
            activeClass: "active"
          }
        ]
      })]);
    }, []);

    useEffect(()=>{
        getDoc(doc(db, 'products', productsId)).then((doc)=>{
            setProduct(doc);
        })
    },[productsId])


    useEffect(()=>{
        console.log('carrega')
    },[Flicking])

    function formatValue(value: string, count: number) : string {
      var str:any = value.replace(",",".");
      var cal:string = Number(str * count).toString();
      var toString:string = Number.parseFloat(cal).toFixed(2).toString().replace(".",',');
      console.log(toString)
      return toString;
    }

    function addCart(){
      setLoad(true)
      if(user.login){
        setLoad(true)  
        if(size && product){
          

          getDocs(query(collection(db, "usersCart"), where("userId", "==", user.user.userId), where("productId", "==", productsId), where("size", "==", size))).then((dbUser)=>{
            console.log(dbUser);
            if(dbUser.docs.length == 0){
                addDoc(collection(db, "usersCart"), {
                  productId: productsId,
                  userId: user.user.userId,
                  size: size,
                  count: 1,
                  productPrice: product.data().price,
                  price: product.data().price,
                  docDate: new Date().getTime(), 
                  date: new Date().toLocaleDateString(),
              }).then(()=>{
                setLoad(false);
                setConfirm('Produto adicionado')
                setTimeout(()=>{
                  setConfirm('Adicionar ao carrinho')
                },10000)
              })
              
            }else{

              

              const prod = doc(db, 'usersCart', dbUser.docs[0].id);
              const pricePlus = formatValue(product.data().price, dbUser.docs[0].data().count + 1);
              updateDoc(prod, {
                count: dbUser.docs[0].data().count + 1,
                price: pricePlus,
              }).then(()=>{
                setLoad(false);
                setConfirm('Mais um adicionado')
                setTimeout(()=>{
                  setConfirm('Adicionar ao carrinho')
                },10000)
              })

              }
          });


          /**/
        }else{
          setError('Escolha um tamanho');
          setLoad(false);
        }
      }
    }




    return (
        <div className={`${inter.className} ${styles.productSlider}`}>


            <div className={styles.productSlim}>

            {product && <div className={styles.percent}>{product.data().descontPercent && <h2>{product.data().descontPercent} OFF</h2>}</div>}


            <Flicking ref={flicking1} className={styles.slide} defaultIndex={0} plugins={plugins}>
                
                {product ? product.data().images.map((value:string, key:number)=>(
                    <Image className={`${styles.singleSlider} panel-image  flicking-panel full has-background-primary`} src={value} key={key} alt='' width="2000" height="2000" />
                )) : <div  className={styles.singleSkeleton} ></div>}
            
            </Flicking>

            

            <Flicking ref={flicking2} className={styles.slideButtons} moveType="freeScroll" align="prev" bound={true}>
            

                {product ? product.data().images.map((value:string, key:number)=>(
                        <Image className={`flicking-panel full has-background-primary thumb-image ${styles.thumbPage}`} src={value} key={key} alt='' width="1000" height="1000" />
                )) : <div className={`flicking-panel full has-background-primary thumb-image ${styles.thumbSkeleton}`} ></div>}
                
            </Flicking>

            </div>


            <div className={styles.infoProduct}>
            {product ? <h1>{`${product.data().name.length >= 60 ? product.data().name.substr(0,60)+"..." : product.data().name}`}</h1> : <div className={styles.titleSkeleton}></div>}
               {product ? 
              <p className={styles.price}>{product && `${product.data().lastPrice && 'Por'} R$${product.data().price}`} {product && <p style={{display: 'inline-flex', gap: "5px"}}>De <p style={{textDecoration: 'line-through'}}>{`R$${product.data().lastPrice && product.data().lastPrice}`}</p></p>}</p>
              :
              <div className={styles.priceSkeleton}></div>
              }
               {product ? <p>{product.data().description}</p> : <div className={styles.descriptionSkeleton}></div>}
               <h4>Tamanhos:</h4>
               <div className={product ? styles.checks : ""}>
                {product ? product.data().sizes.map((value:string,index:number)=>(
                  <button onClick={()=>{setSize(value)}} className={`${styles.widthButton} ${size == value ? styles.widthFocus : ""}`} key={index}>{value}</button>
                )): <div className={styles.sizeSkeleton}></div>}
               </div>
               <div className={styles.checkUp}>
                    <button onClick={()=>{addCart()}} className={`${inter.className} ${styles.addCart}`}>{load ? <Image width="24" height="24" alt='' src={Spinner}/> : confirm}</button>

                    {product && <FavoriteProduct product={product}/>}
                    
               </div>

               {error && <p>{error}</p>}

            </div>

            </div>
    )
}