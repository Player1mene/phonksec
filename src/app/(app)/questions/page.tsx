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
        <div className={styles.questions}>
            <section className={styles.questionsWrapper}>
                <div className='container'>
                    <h1 className={handjet.className}>Perguntas Frequentes</h1>
                    <p  className={handjet.className}>Respondemos suas dúvidas comuns! Confira nossas Perguntas Frequentes.</p>    
                </div>
            </section>

            <section className={styles.questionsDrop}>
                <div className='container'>
                    <div className={styles.questionGrid}>
                        <div className={styles.innerDrop}>
                            <DropDown title='Quais são as opções de pagamento aceitas pela Phonksec?' dropInfo='Aceitamos pagamentos via cartão de crédito (Visa, MasterCard, American Express) e PayPal para garantir uma experiência de compra conveniente e segura.'/>

                            <DropDown title='Como posso rastrear meu pedido?' dropInfo='Assim que seu pedido for despachado, você receberá um e-mail com as informações de rastreamento. Você também pode acessar essas informações diretamente na sua conta Phonksec.'/>
                        
                            <DropDown title='Quanto tempo leva para meu pedido ser entregue?' dropInfo='O prazo de entrega varia de acordo com a localização do destino. Em geral, nossos pedidos são entregues dentro de 10 dias úteis. Para mais detalhes, consulte nossa página de Política de Envio.'/>

                            <DropDown title='Posso devolver ou trocar um item?' dropInfo='Sim, aceitamos devoluções e trocas dentro de 3 dias a partir da data de entrega, desde que o item não tenha sido usado e ainda esteja em sua embalagem original. Consulte nossa página de Política de Devoluções para obter mais detalhes.'/>

                            <DropDown title='Vocês fazem entregas internacionais?' dropInfo='Sim, entregamos internacionalmente para a maioria dos países. As taxas de envio internacionais podem variar e serão calculadas no momento do checkout.'/>

                            <DropDown title='Vocês oferecem descontos para clientes frequentes?' dropInfo='Sim, temos um programa de fidelidade para clientes frequentes. Inscreva-se em nossa newsletter para receber informações sobre ofertas especiais e descontos exclusivos.'/>

                            <DropDown title='Como faço para entrar em contato com o suporte ao cliente da Phonksec?' dropInfo='Você pode entrar em contato com nossa equipe de suporte ao cliente através do formulário de contato em nosso site ou enviando um e-mail para suporte.phonksec@hotmail.com. Estamos aqui para ajudar!'/>

                        </div>
                        <Image src="https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/logo-and-wallpapers%2Fquestion-min.webp?alt=media&token=84fff5fa-a637-4116-b4b1-d7014abf9177" width="2000" height="2000" alt=""/>
                    </div>
                </div>
            </section>


        </div>
    )
}