'use client'
import React from 'react'
import styles from "./page.module.css";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Handjet, Inter } from 'next/font/google';
import Link from 'next/link';
import Phonk from '../../../public/image.png'
import Image from 'next/image';
import Categories from '../components/Categories';
import ListProducts from '../components/ListProducts';


const handjet = Handjet({ 
  subsets: ["latin"],
  weight: ['400','500', '600','700'],
});

const inter = Inter({
  subsets: ["latin"],
})


export default function Home() {

  return (
    <main className={styles.main}>
      <section className={styles.presentation}>
          <div className={`${handjet.className} ${styles.abs} `}>
          <img className="torn-paper-right" src="https://media.discordapp.net/attachments/1091340777197670460/1210552528278655007/black-torn-paper-left.png?ex=65eaf9e5&is=65d884e5&hm=ecbcab3bede2fd2470f2f1b4fe2979deaaef7d36df8d48c15e82d813c4d41eb4&=&format=webp&quality=lossless&width=72&height=473"/>
           
            <div className={styles.absHeader}>
              <h1>PHONKSEC DIZ:</h1>
              <button className={styles.closeButton}>
                <FontAwesomeIcon icon={faXmark}/>
              </button>
            </div>
            <div className={styles.welcomeInfo}>
              <img className={styles.logoImage} src="https://cdn.discordapp.com/attachments/1124075504446738512/1213889958591340564/phonksec_logo.png?ex=65f71e1f&is=65e4a91f&hm=fc32524d959e1e67458372587b8fce4ec3dbcaf70ff904ef0e3c18fe22d6095d&"/>
              <p>Bem-vindo(a) ao Phonksec - Sua Destinação de Moda Alternativa!
                Explore a autenticidade em cada costura. Seja único(a).
                Descubra mais sobre nossa coleção exclusiva.
                Clique abaixo para saber mais sobre a loja.</p>
              <div className={styles.welcomeButtons}>
                <Link href="/about">Sobre nós</Link>
                <Image width="120" src={Phonk} alt=''/>
              </div> 
            </div>
            <img className='torn-paper-left' src='https://media.discordapp.net/attachments/1091340777197670460/1210552528538968094/black-torn-paper-right.png?ex=65eaf9e5&is=65d884e5&hm=3f56150bac83d2d91e2eabe50c2575cc2931ab22e52b81dce8b4b06a6d03660c&=&format=webp&quality=lossless&width=72&height=473'/>
          </div>
      </section>

      <div className='container'>
          <section className={styles.categories}>
            <img className="torn-paper torn-paper-top" src='https://media.discordapp.net/attachments/1091340777197670460/1210552528891027456/black-torn-paper-top.png?ex=65eaf9e5&is=65d884e5&hm=c9d3c77e8256fc0d9f2a977976295bbb375c99d2c7d1b06570ee0f841e4ac67c&=&format=webp&quality=lossless&width=960&height=141'/>
            <h1>Categorias</h1>
            <Categories/>
            <img className='torn-paper torn-paper-bottom' src='https://media.discordapp.net/attachments/1091340777197670460/1210552528022933545/black-torn-paper-bottom.png?ex=65eaf9e5&is=65d884e5&hm=475f325961a8bf861ee3c534a123b375ed79bd178e5cb764554f235676818c4d&=&format=webp&quality=lossless&width=960&height=147'/>
          </section>
      </div>
      

      <section className={styles.products}>
        <div className='container'>
        <h1>Produtos</h1>
          <ListProducts/>
          <div className={styles.more}>
            <Link href="/products">Mostrar mais</Link>
          </div>          
        </div>
        <img className='torn-paper torn-paper-bottom' src='https://media.discordapp.net/attachments/1091340777197670460/1210552529386086450/white-torn-paper-bottom.png?ex=65eaf9e5&is=65d884e5&hm=98e98cf1201060019115774af2566079e1457a589d3ed63409733a7ef3051c80&=&format=webp&quality=lossless&width=1025&height=150'/>
      </section>

      <section className={`${inter.className} ${styles.infos}`}>
          <div className='container'>
          <div className={styles.w1}>
            <img className={styles.imgMobile}src="https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/products%2FCamisa1.webp?alt=media&token=bf689ab9-1170-4479-aac6-a5b75bc66b38"/>
            <img className={styles.imgPC} src="https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/products%2FphonksecTorn.webp?alt=media&token=ece883a0-bd1a-44b7-97ed-86f4a09f38a2" alt=''/>
            <img className="torn-paper torn-paper-top" src='https://media.discordapp.net/attachments/1091340777197670460/1210552528891027456/black-torn-paper-top.png?ex=65eaf9e5&is=65d884e5&hm=c9d3c77e8256fc0d9f2a977976295bbb375c99d2c7d1b06570ee0f841e4ac67c&=&format=webp&quality=lossless&width=960&height=141'/>
              
            <div className={styles.infoWrapper}>
                <h1>Explorando a Essência Visual</h1>
                <p>Descubra a intensidade das nossas camisas, onde demônios e caveiras se encontram na expressão única da sua individualidade. Vista-se com ousadia, destacando-se na multidão com estampas que transcendem o convencional. Sinta o poder da moda que desafia limites.</p>    
            </div>
            <img className='torn-paper torn-paper-bottom' src='https://media.discordapp.net/attachments/1091340777197670460/1210552528022933545/black-torn-paper-bottom.png?ex=65eaf9e5&is=65d884e5&hm=475f325961a8bf861ee3c534a123b375ed79bd178e5cb764554f235676818c4d&=&format=webp&quality=lossless&width=960&height=147'/>
            
          </div>
           
          <div className={styles.w2}>
          <img className={styles.imgMobile} src="https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/products%2FCamisa2.webp?alt=media&token=d6f758a1-5dc6-4590-975b-e54327cb813f"/>
          <img className={styles.imgPC} src="https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/products%2FphonksecTorn3.webp?alt=media&token=53e78880-cd6d-482b-aaa4-9c7608816957" alt=''/>
           
          <img className="torn-paper torn-paper-top" src='https://media.discordapp.net/attachments/1091340777197670460/1210552528891027456/black-torn-paper-top.png?ex=65eaf9e5&is=65d884e5&hm=c9d3c77e8256fc0d9f2a977976295bbb375c99d2c7d1b06570ee0f841e4ac67c&=&format=webp&quality=lossless&width=960&height=141'/>
          <div className={styles.infoWrapper}>
            <h1>Ofertas da Semana: Economize com Nossos Descontos Exclusivos</h1>
            <p>Descubra oportunidades imperdíveis a cada semana! Navegue pela nossa seleção especial de produtos com descontos incríveis. Renove seu estilo, economizando. Seja rápido, pois estas ofertas exclusivas são válidas apenas por tempo limitado. Aproveite os melhores preços e atualize seu guarda-roupa agora!</p>
          </div>
          </div>
          <img className='torn-paper torn-paper-bottom' src='https://media.discordapp.net/attachments/1091340777197670460/1210552528022933545/black-torn-paper-bottom.png?ex=65eaf9e5&is=65d884e5&hm=475f325961a8bf861ee3c534a123b375ed79bd178e5cb764554f235676818c4d&=&format=webp&quality=lossless&width=960&height=147'/>
          </div>
        </section>


        <section className={styles.artist}>
            <div className='container'>
                <div className={styles.artistWrapper}>
                    <div className={styles.artistDesc}>
                          <h1>PhonkSec também é música</h1>
                          <p>Colaboramos com talentosos artistas do cenário Phonk, trazendo a energia única dessa cultura para nossas roupas. Cada compra na PhonkSec é uma forma de apoiar diretamente a cena musical, proporcionando um impacto real para os artistas que nos inspiram. Junte-se a nós nessa jornada onde a moda encontra o ritmo, e cada peça conta uma história sonora.</p>
                    </div>

                    <div className={styles.artistSlide}>
                      <div className={styles.artistSliderWrapper}>
                        <div className={styles.artistSingle}>
                          <img src='https://i.scdn.co/image/ab67616d0000b273bd67691fcaf49fae1ff6920f'/>
                          <div className={styles.artDesc}>
                            <h5>UNORDIANRYBEATS</h5>
                            <p>Prod.Musical & Artista</p>
                          </div>
                        </div>

                        <div className={styles.artistSingle}>
                          <img src='https://i.scdn.co/image/ab6761610000e5eb31049d3b79601d1980a9070e'/>
                          <div className={styles.artDesc}>
                            <h5>LITTLE 4N</h5>
                            <p>Prod.Musical & Artista</p>
                          </div>
                        </div>


                        <div className={styles.artistSingle}>
                          <img src='https://i.scdn.co/image/ab6761610000e5ebc4f05eeb14410f82b5a8d575'/>
                          <div className={styles.artDesc}>
                            <h5>UGOVHB</h5>
                            <p>Prod.Musical & Artista</p>
                          </div>
                        </div>


                        <div className={styles.artistSingle}>
                          <img src='https://resources.tidal.com/images/43af587b/11ee/462e/b8a1/292d333ddf7a/750x750.jpg'/>
                          <div className={styles.artDesc}>
                            <h5>FREDDIE DREDD</h5>
                            <p>Prod.Musical & Artista</p>
                          </div>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  );
}
