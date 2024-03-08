import { Dispatch, SetStateAction, useState } from 'react'
import styles from './NavMenu.module.css'
import logoMenu from '../../../../public/logoMenu.png'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleRight, faHeart, faHouse, faList, faShoppingCart, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin']})


export default function NavMenu(props: {setMenu: Dispatch<SetStateAction<boolean>>}){

    const [list, setList] = useState<boolean>(false);

    

    return (
        <div className={styles.navMenu}>
            <div className={inter.className}>
                <div className={styles.headerNav}>
                    <Image width="100" src={logoMenu} alt=""/>
                    <button className={styles.close} onClick={()=>{props.setMenu(false)}}><FontAwesomeIcon icon={faXmark}/></button>
                </div>
                <ul className={styles.linkList}>
                    <li><Link href="/my-account"><FontAwesomeIcon icon={faUser}/> Minha Conta</Link></li>
                    <li><Link href="/my-account"><FontAwesomeIcon icon={faShoppingCart}/> Carrinho</Link></li>
                    <li><Link href="/my-account"><FontAwesomeIcon icon={faHeart}/> Favoritos</Link></li>
                    <li><div className={styles.categories}>
                        <button onClick={()=>{setList(!list)}}><p className={inter.className}><FontAwesomeIcon icon={faList}/> Categorias</p> {list ? <FontAwesomeIcon icon={faAngleDown}/> : <FontAwesomeIcon icon={faAngleRight}/>} </button>

                        {list && <ul className={styles.categList}>
                            <li><Link href="/products?category=camisa">Camisas</Link></li>
                            
                            <li><Link href="/products?category=moletom">Moletons</Link></li>
                            
                            <li><Link href="/products?category=shorts">Shorts</Link></li>
                            
                            <li><Link href="/products?category=calcas">Calças</Link></li>
                            
                            <li><Link href="/products?category=tenis">Tênis</Link></li>

                            <li><Link href="/products?category=botas">Botas</Link></li>

                            <li><Link href="/products?category=ternos">Ternos</Link></li>

                            <li><Link href="/products?category=sobretudo">Sobretudos</Link></li>
                            
                            <li><Link href="/products?category=acessorios">Acessorios</Link></li>
                        </ul>}
                    </div></li>
                    <li><Link href="/my-account"><FontAwesomeIcon icon={faHouse}/> Sobre nós</Link></li>
                </ul>
            </div>
        </div>
    )
}

