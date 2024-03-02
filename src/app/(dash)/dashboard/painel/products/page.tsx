import React from 'react'
import { Metadata } from "next";
import styles from '../page.module.css'
import PageForm from './productsComponents/PageForm';

export const metadata: Metadata = {
  title: 'Products - Painel',
  description: "Generated by create next app",
}  

export default function page(){
  

 return (
    <main className={styles.painel}>
        <h2>Produtos</h2>
        <div className={styles.produtoForm}>  
          <PageForm/>
        </div>
    </main>
  )
}
