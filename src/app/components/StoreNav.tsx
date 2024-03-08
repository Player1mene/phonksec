'use client'
import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './header/StoreNav.module.css'
import { faBars, faCaretDown, faCaretRight, faCartShopping, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../../public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import NavMenu from './Header/NavMenu'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import UseSearch from './Header/UseSearch'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets:['latin'] });


export default function StoreNav(){

    

        
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [menu, setMenu] = React.useState<boolean>(false)
    const [search, setSearch] = React.useState<boolean>(false)  
    const [categ, setCateg] = React.useState<boolean>(false)
    useEffect(() => {
        setMenu(false);
        setCateg(false)
    }, [pathname, searchParams])

    return (
        <header className={styles.headerW}>
            <div className={`container ${styles.header}`}>    
                    {menu && <NavMenu setMenu={setMenu}/>}
                    {search && <UseSearch setSearch={setSearch}/>}
                    <div className={styles.navigation}>
                    <button onClick={()=>{setMenu(!menu)}}><FontAwesomeIcon icon={faBars} /></button>
                    <button onClick={()=>{setSearch(!search)}}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    </div>
                    <div className={styles.logo}>
                        <Link href="/">
                            <Image width="35" src={Logo} alt=''/>
                        </Link>
                    </div>
                    <div className={styles.navigationPc}>
                        <ul className={inter.className}>
                            <li><Link href="/">Home</Link></li>

                            <li><Link href="/products">Produtos</Link></li>
                            
                            <li className={styles.drop} onClick={()=>{setCateg(!categ)}}>
                                Categorias 
                                {categ ? <FontAwesomeIcon icon={faCaretDown}/> : <FontAwesomeIcon icon={faCaretRight}/>}
                            </li>

                            {categ && <ul className={styles.categ}>
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

                            <li><Link href="/products">Sobre nós</Link></li>

                        </ul>
                        <UseSearch setSearch={setSearch}/>
                        <button><FontAwesomeIcon icon={faUser} /></button>
                        <button><FontAwesomeIcon icon={faCartShopping} /></button>
                    </div>
                    <div className={styles.navigation}>    
                        <button><FontAwesomeIcon icon={faUser} /></button>
                        <button><FontAwesomeIcon icon={faCartShopping} /></button>
                    </div>
            </div>
        </header>
    )
}