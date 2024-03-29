'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './UseSearch.module.css'
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useCallback, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
export default function UseSearch(props:  { setSearch: React.Dispatch<React.SetStateAction<boolean>>}){
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter()
    const [inputSearch, setInputSearch] = useState<string>('')
    const createQueryString = useCallback(
        (name: string, value: string) => {
          const params = new URLSearchParams(searchParams.toString())
          params.set(name, value)
          return params.toString()
        },
        [searchParams]
      )

    function search(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        if(inputSearch){
            router.push("/products" +"?" + createQueryString('search', inputSearch))
        }
    }

    
    return (
        <form className={styles.search} onSubmit={(e)=>{search(e)}}>
            <label htmlFor='#input' className={styles.label}>
            
            <input type="text" id="input" value={inputSearch} onChange={(e)=>{setInputSearch(e.target.value)}} placeholder="Camisa estampada, tênis, moletons, etc"/>
            <button><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
           
            </label>
        
            <button className={styles.close} onClick={()=>{props.setSearch(false)}}><FontAwesomeIcon icon={faXmark}/></button>

        </form>
    )
}