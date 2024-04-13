'use client'
import { Inter } from "next/font/google";
import styles from  "./Button.module.css"

const inter = Inter({ subsets: ["latin"], weight: ["400","500", "600", "700"], display: 'swap' });



export default function Button({inputName}: {inputName:string}) {
  
  return (           
    <button className={`${styles.button} ${inter.className}`}>
        {inputName}
    </button>
  );
}
