import { Handjet, Inter, League_Spartan } from 'next/font/google';
import styles from './page.module.css'
import DropDown from '@/app/components/inputs/DropDown';
import Image from 'next/image';


const handjet = Handjet({ 
    subsets: ["latin"],
    weight: ['400','500', '600','700'],
  });

export default function page(){
    return(
        <div className={styles.politics}>
            <section className={styles.politicsWrapper}>
                <div className='container'>
                    <h1 className={handjet.className}>Polítcas & Termos</h1>
                    <p  className={handjet.className}> Seu Guia Completo para uma Experiência Segura e Transparente na Phonksec.</p>    
                </div>
            </section>

            <section className={styles.questionsDrop}>
                <div className='container'>
                    <div className={styles.questionGrid}>
                        <div className={styles.innerDrop}>
                            <DropDown title='Política de Privacidade' dropInfo='Respeitamos sua privacidade e estamos comprometidos em proteger seus dados pessoais. Nossa Política de Privacidade descreve como coletamos, usamos e protegemos suas informações ao utilizar nosso site.'/>

                            <DropDown title='Política de Segurança e Pagamento' dropInfo='Garantimos a segurança das suas transações online. Utilizamos tecnologias seguras para processar seus pagamentos e proteger suas informações financeiras.'/>
                        
                            <DropDown title='Política de Envio' dropInfo='Informamos sobre nossos prazos de entrega e opções de envio. Nossa Política de Envio aborda detalhes sobre os métodos de envio disponíveis, tempos de entrega estimados e informações sobre entregas internacionais.'/>

                            <DropDown title='Política de Devoluções e Trocas' dropInfo='Aceitamos devoluções e trocas de acordo com determinadas condições. Nossa Política de Devoluções e Trocas explica os requisitos e procedimentos para devolver ou trocar um item adquirido em nossa loja'/>

                            <DropDown title='Termos de Uso do Site' dropInfo='Ao acessar e utilizar nosso site, você concorda com nossos Termos de Uso. Estes termos estabelecem as condições gerais de uso do site Phonksec, incluindo direitos autorais, limitações de responsabilidade e outras disposições importantes.'/>

                            <DropDown title='Contato e Suporte' dropInfo='Se tiver dúvidas ou precisar de assistência, nossa equipe de suporte ao cliente está à disposição para ajudar. Entre em contato conosco através do formulário de contato em nosso site ou envie um e-mail para suporte.phonksec@hotmail.com'/>

                            <p>Ao utilizar nosso site e fazer compras na Phonksec, você concorda em cumprir nossas Políticas e Termos estabelecidos acima. Agradecemos por escolher a Phonksec como sua loja de moda alternativa preferida!</p>
                        </div>
                        <Image src="https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/logo-and-wallpapers%2Fquestion-min.webp?alt=media&token=84fff5fa-a637-4116-b4b1-d7014abf9177" width="2000" height="2000" alt=""/>
                    </div>
                </div>
            </section>


        </div>
    )
}