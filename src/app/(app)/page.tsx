import React from 'react'
import styles from "./page.module.css";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Handjet, Inter } from 'next/font/google';
import Link from 'next/link';
import "./app.css"
import Phonk from '../../../public/image.png'
import Image from 'next/image';
import Categories from 'components/ListCategories/Categories';
import ListProducts from 'components/ListProducts/ListProducts';



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
          <Image alt="" width="1025" height="150" className="torn-paper-right" src="https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/torn-paper-image%2Fblack-torn-paper-left.png?alt=media&token=e36e47c6-5130-455e-bc11-ae4f75ef2566"/>
           
            <div className={styles.absHeader}>
              <h1>PHONKSEC DIZ:</h1>
              <button className={styles.closeButton}>
                <FontAwesomeIcon icon={faXmark}/>
              </button>
            </div>
            <div className={styles.welcomeInfo}>
              <Image alt='' width='1000' height="0" className={styles.logoImage} src="https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/logo-and-wallpapers%2Fphonksec_logo.png?alt=media&token=8b2a0c5c-8d85-41d7-954b-560b7d9d7e93"/>
              <p>Bem-vindo(a) ao Phonksec - Sua Destinação de Moda Alternativa!
                Explore a autenticidade em cada costura. Seja único(a).
                Descubra mais sobre nossa coleção exclusiva.
                Clique abaixo para saber mais sobre a loja.</p>
              <div className={styles.welcomeButtons}>
                <Link href="/about">Sobre nós</Link>
                <Image width="120" src={Phonk} alt=''/>
              </div> 
            </div>
            <Image alt="" width="1025" height="150" className='torn-paper-left' src='https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/torn-paper-image%2Fblack-torn-paper-right.png?alt=media&token=30939c55-4444-47f2-b5e6-b45381adb594'/>
          </div>
      </section>

      <div className='container'>
          <section className={styles.categories}>
            <Image alt="" width="1025" height="150" className="torn-paper torn-paper-top" src='https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/torn-paper-image%2Fblack-torn-paper-top.png?alt=media&token=8ad84f11-b352-490e-a64b-faed37220a49'/>
            <h1>Categorias</h1>
            <Categories/>
            <Image alt="" width="1025" height="150" className='torn-paper torn-paper-bottom' src='https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/torn-paper-image%2Fblack-torn-paper-bottom.png?alt=media&token=588716c1-1bfe-4b6a-881e-3698591b0c43'/>
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
        <Image alt="" width="1025" height="150" className='torn-paper torn-paper-bottom' src='https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/torn-paper-image%2Fwhite-torn-paper-bottom.png?alt=media&token=8f94fb87-8577-43a7-960c-ca2556380433'/>
      </section>

      <section className={`${inter.className} ${styles.infos}`}>
          <div className='container'>
          <div className={styles.w1}>
            <Image width="774" height="886" alt='' loading='lazy' className={styles.imgMobile}src="https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/products%2FCamisa1.webp?alt=media&token=bf689ab9-1170-4479-aac6-a5b75bc66b38"/>
            <Image width="1000" height="700" alt='' loading='lazy' className={styles.imgPC} src="https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/products%2FphonksecTorn.webp?alt=media&token=ece883a0-bd1a-44b7-97ed-86f4a09f38a2"/>
            <Image width='1000' height='100' alt='' className="torn-paper torn-paper-top" src='https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/torn-paper-image%2Fblack-torn-paper-top.png?alt=media&token=8ad84f11-b352-490e-a64b-faed37220a49'/>
              
            <div className={styles.infoWrapper}>
                <h1>Explorando a Essência Visual</h1>
                <p>Descubra a intensidade das nossas camisas, onde demônios e caveiras se encontram na expressão única da sua individualidade. Vista-se com ousadia, destacando-se na multidão com estampas que transcendem o convencional. Sinta o poder da moda que desafia limites.</p>    
            </div>
            <Image width='1000' height='100' alt="" className='torn-paper torn-paper-bottom' src='https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/torn-paper-image%2Fblack-torn-paper-bottom.png?alt=media&token=588716c1-1bfe-4b6a-881e-3698591b0c43'/>
            
          </div>
           
          <div className={styles.w2}>
          <Image width="774" height="832" alt='' loading='lazy' className={styles.imgMobile} src="https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/products%2FCamisa2.webp?alt=media&token=d6f758a1-5dc6-4590-975b-e54327cb813f"/>
          <Image width="1246" height="0" alt='' loading='lazy'className={styles.imgPC} src="https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/products%2FphonksecTorn3.webp?alt=media&token=53e78880-cd6d-482b-aaa4-9c7608816957"/>
           
          <Image width='1000' height='100' alt='' className="torn-paper torn-paper-top" src='https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/torn-paper-image%2Fblack-torn-paper-top.png?alt=media&token=8ad84f11-b352-490e-a64b-faed37220a49'/>
          <div className={styles.infoWrapper}>
            <h1>Ofertas da Semana: Economize com Nossos Descontos Exclusivos</h1>
            <p>Descubra oportunidades imperdíveis a cada semana! Navegue pela nossa seleção especial de produtos com descontos incríveis. Renove seu estilo, economizando. Seja rápido, pois estas ofertas exclusivas são válidas apenas por tempo limitado. Aproveite os melhores preços e atualize seu guarda-roupa agora!</p>
          </div>
          </div>
          <Image width='1000' height='100' alt='' className='torn-paper torn-paper-bottom' src='https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/torn-paper-image%2Fblack-torn-paper-bottom.png?alt=media&token=588716c1-1bfe-4b6a-881e-3698591b0c43'/>
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


                        <div className={styles.artistSingle}>
                          <img src='https://yt3.googleusercontent.com/ytc/AIdro_mqI2BoGUDVTTmOMwV-VRPRRnq4m5CQt5GAc4-_Iw=s900-c-k-c0x00ffffff-no-rj'/>
                          <div className={styles.artDesc}>
                            <h5>YUN LI</h5>
                            <p>Prod.Musical & Artista</p>
                          </div>
                        </div>

                        <div className={styles.artistSingle}>
                          <img src='https://i.scdn.co/image/ab6761610000e5eb18e8eae52ffbcb93b6428ebd'/>
                          <div className={styles.artDesc}>
                            <h5>BIFFE</h5>
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
