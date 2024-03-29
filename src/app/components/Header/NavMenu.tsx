import { Dispatch, SetStateAction, useContext, useState } from 'react'
import styles from './NavMenu.module.css'
import logoMenu from '../../../../public/logoMenu.png'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleRight, faHeart, faHouse, faList, faRightToBracket, faShoppingCart, faUser, faUserPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { AdminContext } from '@/app/adminContext'

const inter = Inter({ subsets: ['latin']})


export default function NavMenu(props: {setMenu: Dispatch<SetStateAction<boolean>>}){

    const [list, setList] = useState<boolean>(false);
    const {login} = useContext(AdminContext)
    

    return (
        <div className={styles.navMenu}>
            <div className={inter.className}>
                <div className={styles.headerNav}>
                    <Image width="200" src={logoMenu} alt=""/>
                    <button className={styles.close} onClick={()=>{props.setMenu(false)}}><FontAwesomeIcon icon={faXmark}/></button>
                </div>
                <ul className={styles.linkList}>
                    {login ? <>
                    
                    <li><Link href="/myaccount"><FontAwesomeIcon icon={faUser}/> Minha Conta</Link></li>
                    <li><Link href="/myaccount/cart"><FontAwesomeIcon icon={faShoppingCart}/> Carrinho</Link></li>
                    <li><Link href="/myaccount/favorites"><FontAwesomeIcon icon={faHeart}/> Favoritos</Link></li>


                    </> : <>
                    
                    <li><Link href="/login"><FontAwesomeIcon icon={faRightToBracket}/> Fazer login</Link></li>
                    <li><Link href="/login/register"><FontAwesomeIcon icon={faUserPlus}/> Cadastrar-se</Link></li>

                    
                    </>}
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

