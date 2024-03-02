'use client'
import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './StoreNav.module.css'
import { faBars, faCartShopping, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../../public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import NavMenu from './NavMenu'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import UseSearch from './UseSearch'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets:['latin'] });


export default function StoreNav(){

    

        
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [menu, setMenu] = React.useState<boolean>(false)
    const [search, setSearch] = React.useState<boolean>(false)  
    useEffect(() => {
        setMenu(false)
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
                            
                            <li>Categorias</li>

                            <li><Link href="/products">Sobre nós</Link></li>

                            <li><Link href="/products">Promoções</Link></li>

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