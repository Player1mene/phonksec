"use client"
import React from 'react'
import styles from "./page.module.css";
import { faQuoteLeft, faQuoteRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Handjet, Inter, League_Spartan } from 'next/font/google';
import Link from 'next/link';
import Phonk from '../../../../public/image.png'
import Image from 'next/image';
import { Metadata } from 'next';



const handjet = Handjet({ 
  subsets: ["latin"],
  weight: ['400','500', '600','700'],
});

const inter = Inter({
  subsets: ["latin"],
})

const spartan = League_Spartan({
  subsets: ["latin"],
  weight: ['400','500', '600','700'],
})

export const metadata: Metadata = {
  title: "Sobre nós - PhonkSec",
};


export default function page() {

  return (
    <main className={styles.main}>
      <section className={styles.presentation}>
          <div className={`${handjet.className} ${styles.abs} `}>
            <div className={styles.welcomeInfo}>
              <div>
              <Image alt='' width='2000' height="0" className={styles.logoImage} src="https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/logo-and-wallpapers%2Fphonksec_logo.png?alt=media&token=8b2a0c5c-8d85-41d7-954b-560b7d9d7e93"/>
              </div>
              <div>

                <h1>Sobre nós</h1>

                <p>Explore nossa história e valores,
                mergulhe na essência da nossa marca.</p>

              </div>
            </div>
          </div>
      </section>
      <section className={`${styles.aboutInfo}  ${spartan.className}`}>
          <div className={`container ${styles.aboutGrid}`}>

            <div className={styles.singleInfo}>
                <div className={styles.infoImage}>
                    <Image src="https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/logo-and-wallpapers%2Fhist%C3%B3ria.png?alt=media&token=dc69987e-2b2c-4600-b628-cbee466a4c27" width="2000" height="2000" alt='' />
                </div>
                <div className={styles.info}>
                  <h2>Nossa história</h2>
                  <p>Embarque em uma jornada através do tempo e descubra a história por trás da Phonkse c.
                     Desde nossas humildes origens até nos tornarmos uma referência na moda alternativa,
                     cada capítulo desta narrativa é marcado pela paixão, inovação e compromisso com a autenticidade.
                    <br></br>
                    <br></br>
                    Fundada por visionários da moda alternativa, 
                    a Phonksec nasceu da necessidade de um espaço que desafiasse as convenções, 
                    celebrasse a individualidade e oferecesse uma plataforma para a expressão criativa. Ao longo dos anos, crescemos e evoluímos,
                     mantendo firme nosso compromisso de fornecer uma experiência única para os amantes da moda alternativa em todo o mundo.
                     <br></br>
                     <br></br>
                    Nossa história é tecida com momentos de ousadia, experimentação e colaboração. Desde colaborações emocionantes com designers independentes até o lançamento de coleções exclusivas que desafiam os padrões estabelecidos,
                     cada marco reflete nosso compromisso em oferecer uma experiência excepcional aos nossos clientes.
                     <br></br>
                     <br></br>
                  Junte-se a nós enquanto revivemos os momentos que moldaram a Phonksec e celebramos a comunidade vibrante que nos impulsiona para o futuro. Estamos ansiosos para compartilhar nossa história com você e inspirá-lo(a) a fazer parte deste emocionante movimento de moda alternativa.
                  </p>
                </div>
            </div>

            <div className={styles.singleInfo}>
                
                <div className={styles.info}>
                  <h2>Nossa Equipe</h2>
                  <p>
                    Conheça as mentes criativas por trás da Phonksec. Nossa equipe é composta por uma coleção diversificada de indivíduos apaixonados pela moda alternativa, 
                    unidos por um objetivo comum: redefinir os limites da expressão pessoal e da criatividade.
                    <br></br>
                    <br></br>
                    Cada membro da nossa equipe traz consigo uma riqueza de experiência, talento e visão únicos.
                     Desde designers visionários que dão vida a nossas coleções até especialistas 
                     em atendimento ao cliente dedicados que garantem uma experiência excepcional para cada cliente, 
                    cada pessoa desempenha um papel vital na criação do universo vibrante da Phonksec.
                    <br></br>
                     <br></br>
                     Estamos unidos por nossa paixão pela moda alternativa e nosso compromisso em oferecer produtos de qualidade e um serviço excepcional. Trabalhamos em estreita colaboração, 
                     inspirando-nos mutuamente e impulsionando a inovação em tudo o que fazemos. 
                     <br></br>
                     <br></br>
                      Conheça a equipe por trás da Phonksec e descubra o talento e a dedicação que alimentam nossa paixão pela moda alternativa. 
                  Estamos ansiosos para compartilhar nosso entusiasmo com você e tornar sua jornada de moda verdadeiramente memorável.
                   </p>
                </div>

                <div className={styles.infoImage}>
                    <Image src="https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/logo-and-wallpapers%2Fequipe.png?alt=media&token=aa13e4d4-8c53-4221-bbea-487e48e04614" width="2000" height="2000" alt='' />
                </div>

            </div>


            <div className={styles.singleInfo}>

            <div className={styles.infoImage}>
                    <Image src="https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/logo-and-wallpapers%2Fpercerias.png?alt=media&token=1b094615-d046-401f-afc0-609be8c08606" width="2000" height="2000" alt='' />
                </div>
                
                <div className={styles.info}>
                  <h2>Parcerias e Colaborações</h2>
                  <p>
                  Na Phonksec, nossa visão transcende as fronteiras da moda. Acreditamos que a moda é uma forma de expressão artística que se entrelaça com outras formas de criatividade, como música e arte visual. 
                    <br></br>
                    <br></br>
                    É por isso que valorizamos profundamente as parcerias e colaborações com músicos e artistas que compartilham nossa paixão pela expressão pessoal e pela originalidade.
                     <br></br>
                     <br></br>
                     Colaborar com músicos e artistas nos permite explorar novos territórios criativos, criar experiências imersivas e ampliar os limites da moda alternativa. De colaborações em coleções exclusivas a eventos colaborativos que fundem moda, música e arte, buscamos constantemente maneiras de celebrar a interseção dessas formas de expressão. <br></br>
                     <br></br>
                     Nossos parceiros musicais e artistas nos inspiram a criar coleções que transcendem o comum, incorporando elementos de sua arte em nossos designs e eventos. Essas colaborações não apenas enriquecem nossa oferta de produtos, mas também criam conexões emocionais mais profundas com nossa comunidade de clientes, proporcionando uma experiência verdadeiramente única e envolvente.
                      <br></br>
                      <br></br>

Junte-se a nós enquanto exploramos as fronteiras da moda e da arte, celebrando a criatividade em todas as suas formas. Se você é um músico ou artista interessado em colaborar conosco, estamos ansiosos para ouvir suas ideias e explorar as infinitas possibilidades que o futuro reserva.
                      </p>
                </div>


            </div>


            <div className={styles.singleInfo}>

    
    <div className={styles.info}>
      <h2>Depoimentos de Clientes</h2>
      <p>
      Nada nos enche de mais orgulho do que ouvir os elogios de nossa comunidade de clientes. Na seção de depoimentos dos clientes da Phonksec, você encontrará as histórias inspiradoras e experiências emocionantes compartilhadas por pessoas que fizeram parte da jornada da moda alternativa conosco.
        <br></br>
        <br></br>
        De clientes fiéis a novos entusiastas da moda alternativa, cada depoimento oferece uma visão única sobre o impacto que nossas coleções, atendimento ao cliente excepcional e experiência de compra incomparável tiveram em suas vidas. Essas histórias refletem não apenas a qualidade de nossos produtos, mas também o senso de comunidade e conexão que cultivamos em torno da Phonksec
         <br></br>
         <br></br>
        
Ao ler os depoimentos de nossos clientes, você entenderá o que nos diferencia como uma marca de moda alternativa e por que tantas pessoas escolhem a Phonksec para expressar sua autenticidade e estilo pessoal.  
        <br></br>
        <br></br>
        Estamos profundamente gratos por fazer parte das jornadas individuais de nossos clientes e por sermos capazes de inspirar e capacitar cada pessoa a abraçar sua singularidade.
           <br></br>
          <br></br>
          Junte-se à comunidade Phonksec e descubra o que nossos clientes têm a dizer sobre suas experiências. Se você já fez uma compra conosco, adoraríamos ouvir sua história! Compartilhe seu depoimento e ajude-nos a continuar a construir uma comunidade vibrante e acolhedora de amantes da moda alternativa.
  </p>
    </div>

    
<div className={styles.infoImage}>
        <Image src="https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/logo-and-wallpapers%2Fclientes.png?alt=media&token=7d7e85a6-ec60-4ae3-b33d-7fde5ea87d09" width="2000" height="2000" alt='' />
    </div>


</div>

<div className={styles.singleDepoiment}>
  <div className={styles.depoiment}>
    <FontAwesomeIcon icon={faQuoteLeft} className={styles.quoteLeft}/>
    <Image src="https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/peopleImages%2Fcarol.jpg?alt=media&token=c4d15369-5e4e-4b36-b6bb-6648c8a428c9" alt="Carol" width="1000" height="1000"/>
    <h2>Carol</h2>
    <p>&quot;Descobri a Phonksec por acaso e desde então não consigo mais parar de comprar suas peças únicas! Cada item que adquiro é uma expressão da minha personalidade e me faz sentir poderosa. A qualidade é impecável e o estilo alternativo realmente ressoa comigo. Estou orgulhosa de fazer parte dessa comunidade vibrante!&quot;</p>
    <FontAwesomeIcon icon={faQuoteRight} className={styles.quoteRight}/>
  </div>

  <div className={styles.depoiment}>
  <FontAwesomeIcon icon={faQuoteLeft} className={styles.quoteLeft}/>
  <Image src="https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/peopleImages%2Fmarina.jpg?alt=media&token=1455a96b-7669-41be-895f-c5fa96fab4f3" alt="Marina" width="1000" height="1000"/>
    <h2>Marina</h2>
    <p>&quot;As roupas da Phonksec são uma verdadeira obra de arte! Sou apaixonada pela criatividade e originalidade de cada coleção. O melhor de tudo é que encontro opções para todas as ocasiões, desde peças do dia a dia até looks deslumbrantes para eventos especiais. A equipe da Phonksec sempre foi incrivelmente atenciosa e ágil. Recomendo para todas as amantes de moda alternativa!&quot;</p>
    <FontAwesomeIcon icon={faQuoteRight} className={styles.quoteRight}/>
  </div>

  <div className={styles.depoiment}>
  <FontAwesomeIcon icon={faQuoteLeft} className={styles.quoteLeft}/>
  <Image src="https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/peopleImages%2Fluana.jpg?alt=media&token=d2598dad-8708-4a12-ad18-dee27dd9cf9a" alt="Luana" width="1000" height="1000"/>
    <h2>Luana</h2>
    <p>&quot;Como artista, sempre busquei me expressar através da moda. A Phonksec me conquistou com suas colaborações únicas com artistas e músicos. Cada peça conta uma história e me inspira a criar. A sensação de vestir uma roupa Phonksec vai muito além do estilo; é como estar conectada a uma comunidade criativa e autêntica. Mal posso esperar para ver o que eles lançarão a seguir!&quot;;</p>
    <FontAwesomeIcon icon={faQuoteRight} className={styles.quoteRight}/>
  </div>
</div>

          </div>
      </section>
    </main>
  );
}
