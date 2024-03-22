'use client'
import Image from 'next/image'
import styles from './ProductInfo.module.css'
import Flicking from '@egjs/react-flicking'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/app/db/firebase';
import { useEffect, useRef, useState } from 'react';
import { Sync } from '@egjs/flicking-plugins';
import { Inter } from 'next/font/google';
import FavoritePhoto from '@/app/components/productFunctions/FavoritePhoto';
const inter = Inter({ subsets: ["latin"], weight: ["100","200","300","400","500","600","700"], display: 'swap' });


export default function ProductInfo({productsId}:{ productsId: string}){




    const [product, setProduct] = useState<any>(null)

    const flicking1 = useRef<any>();
    const flicking2 = useRef<any>();
  
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




    return (
        <div className={`${inter.className} ${styles.productSlider}`}>

            <div className={styles.productSlim}>

            <Flicking ref={flicking1} className={styles.slide} defaultIndex={0} plugins={plugins}>
                
                {product ? product.data().images.map((value:string, key:number)=>(
                    <Image className={`${styles.singleSlider} panel-image  flicking-panel full has-background-primary`} src={value} key={key} alt='' width="1000" height="1000" />
                )) : <div></div>}
            
            </Flicking>

            

            <Flicking ref={flicking2} className={styles.slideButtons} moveType="freeScroll" align="prev" bound={true}>
            

                {product ? product.data().images.map((value:string, key:number)=>(
                        <Image className={`flicking-panel full has-background-primary thumb-image ${styles.thumbPage}`} src={value} key={key} alt='' width="1000" height="1000" />
                )) : <div></div>}
                
            </Flicking>

            </div>


            <div className={styles.infoProduct}>
               <h1>{product && `${product.data().name.length >= 60 ? product.data().name.substr(0,60)+"..." : product.data().name}`}</h1>
               <p className={styles.price}>{product && `R$${product.data().price}`}</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget risus eleifend, malesuada urna quis, sagittis nulla. Praesent auctor ante id facilisis feugiat. Suspendisse sodales, sem eget tristique feugiat, nunc justo pretium nunc, quis imperdiet erat dui sit amet lorem. Nulla maximus lorem molestie turpis finibus, a sollicitudin felis fringilla. Donec at nulla felis. Nam fermentum, nisl et dapibus sodales, urna est rutrum libero</p>
               <div className={styles.checks}>
                <button className={styles.widthButton}>32</button>
                
                <button className={styles.widthButton}>40</button>
                
                <button className={styles.widthButton}>45</button>
                
                <button className={styles.widthButton}>50</button>
               </div>
               <div className={styles.checkUp}>
                    <button className={`${inter.className} ${styles.addCart}`}>Adicionar ao carrinho</button>

                    {product && <FavoritePhoto product={product}/>}
                    
               </div>
            </div>

            </div>
    )
}