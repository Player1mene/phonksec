'use client'
import Link from 'next/link'
import styles from './Footer/Footer.module.css'
import { Inter } from 'next/font/google'


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
                        <img src='https://cdn.discordapp.com/attachments/1091340777197670460/1213451432628453447/image.png?ex=65f585b6&is=65e310b6&hm=a34062f50e93aa2088a92e70b6d8d655cb142d9e81d68005cde6c2a1da8fa15a&' />
                        <button className={styles.goUp} onClick={handlerScrollTop}>↑ Voltar para cima</button>
                    </div>
                    <div className={styles.footerNav}>
                        <ul>
                            <li><Link href="/">Home</Link></li>

                            <li><Link href="/products">Produtos</Link></li>

                            <li><Link href="/about">Sobre nós</Link></li>
                            
                            <li><Link href="/contact">Contato</Link></li>
                        </ul>
                        <ul>
                            <li><Link href="/">Minha Conta</Link></li>
                            
                            <li><Link href="/">Carrinho</Link></li>

                            <li><Link href="/products">Checkout</Link></li>

                            <li><Link href="/about">Politicas e Termos</Link></li>
                            
                        </ul>
                    </div>
                    
                </div>
            </div>
            <div className={styles.copyright}>
                        <p>COPYRIGHT © 2024 PHONKSEC TODOS OS DIREITOS RESERVADOS</p>
            </div>
        </div>
    )
}