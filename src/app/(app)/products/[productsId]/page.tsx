'use client'
import styles from './page.module.css'
import Flicking from '@egjs/react-flicking'
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import { useEffect, useRef, useState } from 'react';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '@/app/db/firebase';
import Image from 'next/image';
import { SychronizableFlickingOptions, Sync } from '@egjs/flicking-plugins';



export default function page({params}: { params: { productsId: string } }){

    const [product, setProduct] = useState<any>(null)

    const flicking1 = useRef();
    const flicking2 = useRef();
  
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
        getDoc(doc(db, 'products', params.productsId)).then((doc)=>{
            setProduct(doc.data());
            console.log(doc.data())
        })
    },[params.productsId])


    return (
        <section className={styles.pageProduct}>
            <div className={`${styles.gridContainer} container`}>
                <div className={styles.productSlider}>
        
              <Flicking ref={flicking1} className={styles.slide} defaultIndex={0} bounce={30} plugins={plugins}>
                  
                  {product && product.images.map((value:string, index:number)=>(
                      <Image className={`${styles.singleSlider} panel-image  flicking-panel full has-background-primary`} src={value} key={index} alt='' width="1000" height="1000" />
                  ))}
              
              </Flicking>

                <Flicking ref={flicking2} className={styles.slideButtons} moveType="freeScroll" align="prev" bound={true} bounce={30}>
                 
                    {product && product.images.map((value:string, index:number)=>(
                          <Image className={`flicking-panel full has-background-primary thumb-image ${styles.thumbPage}`} src={value} key={index} alt='' width="1000" height="1000" />
                    ))}
                  
                </Flicking>

                <div className={styles.infoProduct}>
                  Info produtos
                </div>
                </div>
            </div>
        </section>
    )
}