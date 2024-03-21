'use client'
import Image from 'next/image'
import styles from './ProductInfo.module.css'
import Flicking from '@egjs/react-flicking'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/app/db/firebase';
import { useEffect, useRef, useState } from 'react';
import { Sync } from '@egjs/flicking-plugins';

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
            setProduct(doc.data());
            console.log(doc.data())
        })
    },[productsId])




    return (
        <div className={styles.productSlider}>
            
             <Flicking ref={flicking1} className={styles.slide} defaultIndex={0} plugins={plugins}>
                
                {product ? product.images.map((value:string, key:number)=>(
                    <Image className={`${styles.singleSlider} panel-image  flicking-panel full has-background-primary`} src={value} key={key} alt='' width="1000" height="1000" />
                )) : <div></div>}
            
            </Flicking>

            

            <Flicking ref={flicking2} className={styles.slideButtons} moveType="freeScroll" align="prev" bound={true}>
            

                {product ? product.images.map((value:string, key:number)=>(
                        <Image className={`flicking-panel full has-background-primary thumb-image ${styles.thumbPage}`} src={value} key={key} alt='' width="1000" height="1000" />
                )) : <div></div>}
                
            </Flicking>


            <div className={styles.infoProduct}>
                Info produtos
            </div>
            </div>
    )
}