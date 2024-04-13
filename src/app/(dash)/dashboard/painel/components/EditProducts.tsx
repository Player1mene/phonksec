'use client'
import { db } from "@/app/db/firebase";
import { collection, doc, getDoc, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import React, { useEffect, useState } from "react"
import stylesP from '../page.module.css';
import styles from '../products/productsComponents/PageForm.module.css'
import FormInput from "@/app/components/FormInputs/FormInput";
import useForm from "@/app/hooks/useform";
import Button from "@/app/components/ButtonsInput/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";


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


export default function EditProducts(params: { productsId: string }){

    const [sizes, setSizes] = useState<string[]>(['']);
    const [product,  setProduct] = useState<any>([])
    useEffect(()=>{
        getDoc(doc(db, 'products', params.productsId)).then((doc)=>{
            setProduct(doc.data());
        })
    },[params.productsId])


    const name = useForm({type: null})
    const price = useForm({type: 'price'})
    const size = useForm({type: null})
    const [color, setColor] = useState<string | null>(null)
    const [confirm, setConfirm] = useState<boolean>(false)
    const [category, setCategory] = useState<string | null>(null)
    const [modal, setModal] = useState<boolean>(false);
    const [textarea, setTextarea] = useState<string>('');


    useEffect(()=>{
        name.setValue(product.name)
        price.setValue(product.price)
        setCategory(product.category)
        setColor(product.color)
        if(product.sizes){
          setSizes(product.sizes);
        }else{
          setSizes([]);
        }
    },[product])

        
        async function handlerSubmit(){
            if(color && category && sizes && name.validate() && price.validate() && textarea){
                const items = name.value.split(' ');
                let result:any = [];
                const product = doc(db, 'products', params.productsId);
        
                for (let i = 0; i < items.length; i++) {
        
                    for (let j = 1; j <= items.length; j++) {
        
                        const slice = items.slice(i,j);
        
                        if (slice.length)
                            result.push(slice.join(' '));
                    }
        
                }
        
                

                Promise.all(result).then(()=>{      
                   updateDoc(product, {
                    name: name.value,
                    price: price.value,
                    category: category,
                    keywords: result,
                    description: textarea,
                    color: color,
                    sizes: sizes,
                    docDate: new Date().getTime(), 
                    date: new Date().toLocaleDateString(),
                  }).then(()=>{
                    setConfirm(true)
                  })
                })
        
        
                
        }
    }

    function activeSizeModal(){
      setModal(true)
    }

    function addSize(){
      if(size.validate()){
        setSizes([...sizes, size.value])
      }
    }


    function removeSize(value: string){
      setSizes(sizes.filter((item) => item !== value));
  }

    function handlerOutSide(event: React.MouseEvent){
      if(event.target === event.currentTarget) setModal(false)
    }
  



    return (
    <div className={stylesP.painel}>
        <h2>Produto</h2>
         <form className={styles.form} onSubmit={(e)=>{e.preventDefault()}}>
          {modal && 
          <div className={styles.modal} onClick={(event)=>{handlerOutSide(event)}}>
            <div className={styles.formModal} >
              <FormInput label="Nome do tamanho" name="tamanho" type="text" placeholder="Digite o nome do tamanho" {...size} />
              <button onClick={()=>{addSize()}}>Adicionar</button>
            </div>
          </div>
          }
            {confirm && <div className={styles.confirm}><p>Informações Alteradas com exito</p></div>} 
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
            <button className={styles.button} onClick={()=>{handlerSubmit()}}>Atualizar Produto</button>
          </div>
          <div className={styles.sizeButtons}>
            <div className={styles.sizes}>
              {sizes && sizes.map((value, index)=>(
                  <button className={`${styles.addSizes} ${styles.size}`}  key={index}>{value} <p onClick={()=>{removeSize(value)}}><FontAwesomeIcon icon={faXmark}/></p></button>
              ))}

              <button className={styles.addSizes} onClick={()=>{activeSizeModal()}}><FontAwesomeIcon icon={faPlus}/></button>
            </div>

            <div className={styles.textArea}>
              <textarea onChange={(e)=>{setTextarea(e.target.value)}} value={textarea}></textarea>
            </div>
          </div>

          

         

        </form>

        
    </div>
    )
}