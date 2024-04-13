'use client'
import React, { useContext, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './StoreNav.module.css'
import { faBars, faCaretDown, faCaretRight, faCartShopping, faMagnifyingGlass, faRightToBracket, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../../../public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import NavMenu from './NavMenu'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import UseSearch from './UseSearch'
import { Inter } from 'next/font/google'
import { AdminContext } from '../../adminContext'
import useMedia from 'hooks/useMedia'

const inter = Inter({ subsets:['latin'] });


export default function StoreNav(){

    
    const mobile = useMedia('(max-width: 800px)')
    const user = useContext(AdminContext);
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [menu, setMenu] = React.useState<boolean>(false)
    const [search, setSearch] = React.useState<boolean>(false)  
    const [categ, setCateg] = React.useState<boolean>(false)
    useEffect(() => {
        setMenu(false);
        setCateg(false)
    }, [pathname, searchParams])

    useEffect(()=>{
        if(mobile == false){
            setSearch(false);
        }
    },[mobile])

    useEffect(()=>{
        function menuMobile(){

            setCateg(false)
            setMenu(false)
        }
        window.addEventListener('resize',menuMobile);


        return ()=> window.removeEventListener('resize', menuMobile)
    },[pathname,searchParams])

    React.useEffect(() => {
        function hideCateg(){
            setCateg(false)
        }

        window.addEventListener('scroll', hideCateg);

        return () => {
           window.removeEventListener('scroll', hideCateg);
        };
    }, [pathname, searchParams]);

    return (
        <div>

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
                            <Image width="30" src={Logo} alt=''/>
                        </Link>
                    </div>
                    <div className={styles.navigationPc}>
                        <ul className={`${inter.className} ${styles.pcCateg}`}>
                       
                            <li><Link href="/">Home</Link></li>

                            <li><Link href="/products">Produtos</Link></li>
                            
                            <li className={styles.drop} onClick={()=>{setCateg(!categ)}}>
                                Categorias {categ ? <FontAwesomeIcon icon={faCaretDown}/> : <FontAwesomeIcon icon={faCaretRight}/>}
                            </li> 

                            <li><Link href="/about">Sobre nós</Link></li>

                        </ul>

                        <UseSearch setSearch={setSearch}/>
                        {user.login && <Link href="/myaccount"><FontAwesomeIcon icon={faUser} /></Link>}
                        {user.login && <Link href="/myaccount/cart" className={styles.cart}><FontAwesomeIcon icon={faCartShopping} /> {user.cart && user.cart.length > 0 ? <p>{user.cart.length}</p> : <p>0</p>}</Link>}
                        {!user.login && <Link href="/login" className={styles.login}>Fazer Login / Cadastrar-se</Link>}
                    </div>
                    <div className={styles.navigation}>    
                        {user.login && <Link href="/myaccount"><FontAwesomeIcon icon={faUser} /></Link>}
                        {user.login && <Link href="/myaccount/cart" className={styles.cart}><FontAwesomeIcon icon={faCartShopping} /> {user.cart && user.cart.length > 0  ? <p>{user.cart.length}</p> : <p>0</p>}</Link>}
                        {!user.login && <Link href="/login"><FontAwesomeIcon icon={faRightToBracket}/></Link>}
                        {!user.login && <Link href="/register"><FontAwesomeIcon icon={faUserPlus}/></Link>}
                      </div>
            </div>

            
        </header>


            
        <div className={`${styles.categ} ${!categ && styles.categFade}`}>
                                    <li><Link href="/products?category=camisa"  style={{backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/categories%2Fcamisa.png?alt=media&token=a0d341dd-2924-48ad-b73f-bbc1f50f4fdd')`}}>Camisas</Link></li>
                                    
                                    <li><Link href="/products?category=moletom" style={{backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/categories%2Fmoletom.png?alt=media&token=329eb6ed-3abd-4585-bb42-95de04150f0e')`}}>Moletons</Link></li>
                                    
                                    <li><Link href="/products?category=shorts" style={{backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/categories%2Fshorts.png?alt=media&token=3ab291d8-6c66-47ed-a91f-ec230d1a719f')`}}>Shorts</Link></li>
                                    
                                    <li><Link href="/products?category=calcas" style={{backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/categories%2Fcalcas.png?alt=media&token=91b10a55-bb34-4e79-98bd-7797ea4b71db')`}}>Calças</Link></li>
                                    
                                    <li><Link href="/products?category=tenis"  style={{backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/categories%2Ftenis.png?alt=media&token=faace332-dd52-4c09-99bf-c80dd13560ce')`}}>Tênis</Link></li>

                                    <li><Link href="/products?category=botas" style={{backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/categories%2Fbota.png?alt=media&token=8c3929f4-52b1-47cf-9e23-9fb6b0b5c40e')`}}>Botas</Link></li>

                                    <li><Link href="/products?category=ternos" style={{backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/categories%2Fterno.png?alt=media&token=835668da-b7b7-4faf-8224-ddfbe9dd8b44')`}}>Ternos</Link></li>

                                    <li><Link href="/products?category=sobretudo" style={{backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/categories%2Fsobretudo.png?alt=media&token=2058a869-4619-44b7-894e-aaf26198a5a4')`}} >Sobretudos</Link></li>
                                    
                                    <li><Link href="/products?category=acessorios" style={{backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/categories%2Facessorio.png?alt=media&token=40f0aae2-a8de-4a35-a79c-78af8a5cf6c2')`}}>Acessorios</Link></li>
                                </div>

        </div>
        
    )
}