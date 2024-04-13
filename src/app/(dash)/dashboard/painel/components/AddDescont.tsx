'use client'
import { db } from "@/app/db/firebase";
import { doc, getDoc, updateDoc} from "firebase/firestore";
import { useEffect, useState } from "react"
import stylesP from '../page.module.css';
import styles from '../products/productsComponents/PageForm.module.css'
import FormInput from "components/Inputs/FormInput";
import useForm from "hooks/useform";
import Button from "@/app/components/ButtonsInput/Button";


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


export default function AddDescont(params: { productsId: string }){

    const [product,  setProduct] = useState<any>([])
    useEffect(()=>{
        getDoc(doc(db, 'products', params.productsId)).then((doc)=>{
            setProduct(doc.data());
        })
    },[params.productsId])

    const lastPrice = useForm({type: 'price'})
    const price = useForm({type: 'price'})
    const percent = useForm({type: 'percent'})
    const [confirm, setConfirm] = useState<boolean>(false)

    useEffect(()=>{
        lastPrice.setValue(product.price)
        price.setValue(product.price)
    },[product])


    useEffect(()=>{
      if(percent.validate()){
        let priceSplit:string[] = lastPrice.value.split(',');
        let priceNumber:number = Number(priceSplit[0]+'.'+priceSplit[1])
        let percentSplit:string[] = percent.value.split('%')
        let descont:number = (Number(percentSplit[0]) * priceNumber) / 100;
        let AtualPrice:number = priceNumber - descont;
        let StringPrice:string[] = AtualPrice.toString().split('.');
        if(StringPrice.length > 1){
          price.setValue(StringPrice[0]+','+StringPrice[1].substring(0, 2))
        }else{
          price.setValue(StringPrice[0]+',00')
        }
      }
    },[percent.value])

        
        async function handlerSubmit(e: React.FormEvent<HTMLFormElement>){
            e.preventDefault()
            if(price.validate() && lastPrice.validate() && percent.validate()){
                const product = doc(db, 'products', params.productsId);
        
         
                   updateDoc(product, {
                    descontPercent: percent.value,
                    lastPrice: lastPrice.value,
                    price: price.value,
                    docDate: new Date().getTime(), 
                    date: new Date().toLocaleDateString(),
                  }).then(()=>{
                    setConfirm(true)
                  })
        
                
        }
    }




    return (
    <div className={stylesP.painel}>
        <h2>Produto</h2>
         <form className={styles.form} onSubmit={(e)=>{handlerSubmit(e)}}>
            {confirm && <div className={styles.confirm}><p>Informações Alteradas com exito</p></div>} 
            <div className={styles.selectForm}>
            <h1>{product.name}</h1>
            <FormInput label='Antigo preço' name='lastpreco' type='text' placeholder='' {...lastPrice} />
            <FormInput label='Desconto (em porcentagem)' name='percent' type='text' placeholder='Digite o desconto do produto...' {...percent} />
            <FormInput label='Preço Atual' name='preco' type='text' placeholder='' {...price} />
                
   

            <Button inputName="Adicionar Desconto"/>
          </div>
        </form>
    </div>
    )
}