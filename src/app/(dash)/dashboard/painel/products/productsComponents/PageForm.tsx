'use client'
import FileInpunt from "../../../../../components/Inputs/FileInput";
import FormInput from "../../../../../components/Inputs/FormInput";
import useForm from "@/app/hooks/useform";
import styles from './PageForm.module.css'
import { ReactPropTypes, useState } from "react";
import Button from "@/app/components/Inputs/Button";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "@/app/db/firebase";

interface Category {
    camisa: Parameter,
    moletom: Parameter,
    shorts: Parameter,
    calcas: Parameter,
    tenis: Parameter,
    botas: Parameter,
    sobretudos: Parameter,
    ternos: Parameter,
    conjunto: Parameter,
    acessorios: Parameter,
  }
  interface Parameter {
    name: string,
    value: string,
  }
  interface ColorCheck {
    vermelho: Parameter,
    preto:Parameter,
    branco:Parameter,
    azul:Parameter,
    cinza:Parameter,
  }
  
  const Color: ColorCheck = {
    vermelho: {
      name: 'Vermelho',
      value: 'vermelho'
    },
    preto: {
      name: 'Preto',
      value: 'preto'
    }, 
    branco: {
      name: 'Branco',
      value: 'branco'
    },
    azul: {
      name: 'Azul',
      value: 'azul'
    },
    cinza: {
      name: 'Cinza',
      value: 'cinza'
    },
  }
  
  const Category: Category = {
    camisa: {
      name: 'Camisa',
      value: 'camisa'
    },
    moletom:  {
      name: 'Moletom',
      value: 'moletom'
    },
    shorts:  {
      name: 'Shorts',
      value: 'shorts'
    },
    calcas:  {
      name: 'Calças',
      value: 'calcas'
    },
    tenis: {
      name: 'Tênis',
      value: 'tenis'
    },botas: {
      name: 'Botas',
      value: 'botas'
    },
    sobretudos:  {
      name: 'Sobretudos',
      value: 'sobretudos'
    },
    ternos: {
      name: 'Ternos',
      value: 'ternos'
    },
    conjunto: {
      name: 'Conjunto',
      value: 'conjunto'
    },
    acessorios:  {
      name: 'Acessórios',
      value: 'acessorios'
    },
  }


export default function PageForm(){

    const name = useForm({type: null})
    const price = useForm({type: 'price'})
    const [image, setImage] = useState<File[]>([])
    const [color, setColor] = useState<string | null>(null)
    const [category, setCategory] = useState<string | null>(null)
    const [confirm, setConfirm] = useState(false);
    const storage = getStorage()




    async function handlerSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        if(image && color && category && name.validate() && price.validate()){
        const imagesUrlArray:string[] = [];
        const items = name.value.split(' ');
        let result:any = [];

        for (let i = 0; i < items.length; i++) {

            for (let j = 1; j <= items.length; j++) {

                const slice = items.slice(i,j);

                if (slice.length)
                    result.push(slice.join(' '));
            }

        }

        /* eslint no-var: 0 */
        for (let i = 0; i < image.length; i++) {
            const metadata = {
                contentType: 'image/jpeg'
            };
            /* eslint-disable no-await-in-loop */
            const storageRef = ref(storage, `products/${image[i].name}`);
            const upload = await uploadBytes(storageRef, image[i], metadata);
            const imageUrl = await getDownloadURL(storageRef);
            imagesUrlArray.push(imageUrl);
        }

        Promise.all(imagesUrlArray).then(()=>{
           addDoc(collection(db, "products"), {
            name: name.value,
            price: price.value,
            keywords: result,
            category: category,
            color: color,
            images: imagesUrlArray,
          }).then(()=>{
              setConfirm(true);
          })
        })


        
    }
    }


    return (
        <form className={styles.form} onSubmit={(e)=>{handlerSubmit(e)}}>
         {confirm && <div className={styles.confirm}><p>Produto enviado com sucesso</p></div>} 
            <div className={styles.infoForm}>
               <FileInpunt image={image} setImage={setImage}/>            
            </div>
            <div className={styles.selectForm}>
            <FormInput label="Nome do Produto" name="nome" type='text' placeholder='Digite o nome do produto...' {...name}/>
            <FormInput label='Preço' name='preco' type='text' placeholder='Digite o preço do produto...' {...price} />
                
            <div>    
                <label className={styles.label} htmlFor="cor">Cor:</label>
                <select id="cor" value={color === null ? 'Nenhum' : color} onChange={(e)=>{setColor(e.target.value)}}>
                <option value="Nenhum" disabled>Nenhum</option>
                    {Object.values(Color).map((item, index)=>(
                        <option key={index} value={item.value}>{item.name}</option>
                    ))} 
                </select>
            </div>
            <div>    
                <label className={styles.label} htmlFor="categoria">Categoria:</label>
                <select id="categoria" value={category === null ? 'Nenhum' : category} onChange={(e)=>{setCategory(e.target.value)}}>
                <option value="Nenhum" disabled>Nenhum</option>
                {Object.values(Category).map((item, index)=>(
                    <option key={index} value={item.value}>{item.name}</option>
                ))} 
                </select>
            </div>
            <Button inputName="Enviar Produto"/>
          </div>
        </form>
    )
}