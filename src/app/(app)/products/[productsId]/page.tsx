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
import ProductInfo from './components/ProductInfo';
import ListProducts from '@/app/components/ListProducts/ListProducts';



export default function page({params}: { params: { productsId: string } }){



    return (
        <section className={styles.pageProduct}>
            <div className={`${styles.gridContainer} container`}>
              <ProductInfo productsId={params.productsId}/>
            </div>

            <div className={`${styles.recommended} container`}>
                <h1>Produtos que você também pode gostar</h1>
                <ListProducts />
            </div>
        </section>
    )
}