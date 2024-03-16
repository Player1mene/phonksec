'use client'
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import "../../globals.css"
import styles from './FilterProducts.module.css'


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
    value: 'conjunto',
  },
  acessorios:  {
    name: 'Acessórios',
    value: 'acessorios'
  },
}

export default function ExampleClientComponent() {

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [color, setColor] = useState<string | null>(null)
    const [category, setCategory] = useState<string | null>(null)


    useEffect(()=>{
      if(searchParams.get('category') && searchParams.get('color')){
        setColor(searchParams.get('color'))
        setCategory(searchParams.get('category'))
      }else if(searchParams.get('category')){
        setColor(null)
        setCategory(searchParams.get('category'))
      }else if(searchParams.get('color')){
        setCategory('All')
        setColor(searchParams.get('color'))
      }else{
        setColor('All')
        setCategory('All')
      }
    },[pathname, searchParams])
   

    const createQueryString = useCallback(
      (name: string, value: string) => {
        const params: URLSearchParams = new URLSearchParams(searchParams.toString())
        params.set(name, value)
        return params.toString()
      },
      [searchParams]
    )

    const deleteQueryString = useCallback(
      (name: string) => {
        const params: URLSearchParams = new URLSearchParams(searchParams.toString())
        params.delete(name)
   
        return params.toString()
      },
      [searchParams]
    )
    

    
    function onCheck(e: React.ChangeEvent<HTMLSelectElement>, method: string){
      if(e.target.value !== "Todas"){
        router.push(pathname + '?' + createQueryString(method, e.target.value))
      }else{
        router.push(pathname + '?' + deleteQueryString(method)); 
      }
      
    
    }


    function clearSearch(){
      router.push(pathname + '?' + deleteQueryString('search'))
    }
    return (
      <>
          <div className={styles.filter} style={{padding: '20px 28px'}}> 
            <div>

            <label className={styles.label} htmlFor="cor">Cores:</label>
            <select id="cor" value={color === null ? 'Todas' : color} onChange={(e)=>{onCheck(e, 'color'),setColor(e.target.value)}}>
                <option value="Todas">Todas</option>
                {Object.values(Color).map((item, index)=>(
                  <option key={index} value={item.value}>{item.name}</option>
              ))} 
            </select>

            </div>
            <div> 

            <label className={styles.label} htmlFor="categoria">Categorias:</label>
          <select id="categoria" value={category === null ? 'Todas' : category} onChange={(e)=>{onCheck(e, 'category'), setCategory(e.target.value)}}>
              <option value="Todas">Todas</option>
              {Object.values(Category).map((item, index)=>(
                <option key={index} value={item.value}>{item.name}</option>
             ))} 
          </select>

          </div>
          <div className={styles.search}>
            {searchParams.has('search') && <h2>Busca: {searchParams.get('search')}</h2>}
            
            {searchParams.has('search') && <button onClick={()=>{clearSearch()}}>Clear</button>}
          </div>
          </div>
      </>
    )
  }