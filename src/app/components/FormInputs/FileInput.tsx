'use client'
import React, { useEffect } from 'react'
import styles from './FileInput.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ["latin"], weight: ["400","500", "600", "700"], display: 'swap' });



interface SetImages {
    setImage: React.Dispatch<React.SetStateAction<File[]>>,
    image: File[],
}


export default function FileInpunt(props: SetImages){

    function putFiles({
        currentTarget: {files},
      }: React.ChangeEvent<HTMLInputElement>){
          if (files && files.length) {
              props.setImage(existing => existing.concat(Array.from(files)));
            }
        }

    function delFiles(name: string){
        props.setImage(props.image.filter((item) => item.name !== name));
    }

    return (
        <div className={`${styles.input} ${inter.className}`}>
            <label htmlFor='file'>Escolher Arquivos
                <input id="file" multiple type='file' name="nome" hidden onChange={(e)=>{putFiles(e)}}/>    
            </label>
            <div className={styles.images}>     
                {props.image.length > 0 ? props.image.map((item, index)=>(
                    <div key={index} className={styles.imgPreview} style={{backgroundImage: `url('${URL.createObjectURL(item)}')`}}>
                        <div className={styles.close} onClick={()=>{delFiles(item.name)}}><FontAwesomeIcon icon={faXmark}/></div>
                    </div>
                )) : <p className={styles.notImages}>Sem imagens</p>}
            </div>
        </div>    
    )
}