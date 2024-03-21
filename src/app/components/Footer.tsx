'use client'
import Link from 'next/link'
import styles from './Footer/Footer.module.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Logo from '../../../public/phonkseclogofooter.png'


const inter = Inter({ subsets:['latin'] })

export default function Footer(){

    function handlerScrollTop(){
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    return(
        <div className={`${styles.footer} ${inter.className}`}>
            <div className="container">
                <div className={styles.footerWrapper}>
                    <div className={styles.footerLogo}>
                        <button className={styles.goUp} onClick={handlerScrollTop}>Voltar para cima</button>
                    </div>
                    <div className={styles.footerNav}>
                        <Image src={Logo} width="300" alt='' />
                       
                        <ul>
                            <li><h4>Navegação</h4></li>

                            <li><Link href="/">Home</Link></li>

                            <li><Link href="/products">Produtos</Link></li>

                            <li><Link href="/about">Sobre nós</Link></li>
                            
                            <li><Link href="/contact">Contato</Link></li>
                        </ul>
                        <ul>
                            
                            <li><h4>Links de usuário</h4></li>
                            <li><Link href="/">Minha Conta</Link></li>
                            
                            <li><Link href="/">Carrinho</Link></li>

                            <li><Link href="/products">Checkout</Link></li>

                            <li><Link href="/about">Politicas e Termos</Link></li>
                            
                        </ul>
                    </div>
                    
                </div>
            </div>
            <div className={styles.copyright}>
                        <p>Copyright © 2024 PHONKSEC Todos os direitos reservados</p>
            </div>
        </div>
    )
}