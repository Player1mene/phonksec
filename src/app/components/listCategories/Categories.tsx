import Link from 'next/link'
import styles from './Categories.module.css'

export default function Categories(){


    return (
    <div className={styles.categories}>
        <div className={styles.scrollCategories}>
        <div className={styles.grid}>
            <div className={styles.singleGrid01}>
                <Link href="/products?category=camisa" style={{backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/categories%2Fcamisa.png?alt=media&token=a0d341dd-2924-48ad-b73f-bbc1f50f4fdd')`}}>Camisas</Link>
                
                <Link href="/products?category=moletom" style={{backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/categories%2Fmoletom.png?alt=media&token=329eb6ed-3abd-4585-bb42-95de04150f0e')`}}>Moletons</Link>
    
            </div>
            <div className={styles.singleGrid02}>
                
                <Link href="/products?category=shorts" style={{backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/categories%2Fshorts.png?alt=media&token=3ab291d8-6c66-47ed-a91f-ec230d1a719f')`}}>Shorts</Link>

                
                <Link href="/products?category=calcas" style={{backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/categories%2Fcalcas.png?alt=media&token=91b10a55-bb34-4e79-98bd-7797ea4b71db')`}}>Calças</Link>

                
                <Link href="/products?category=tenis" style={{backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/categories%2Ftenis.png?alt=media&token=faace332-dd52-4c09-99bf-c80dd13560ce')`}}>Tênis</Link>
            </div>
        </div>
        <div className={styles.grid}>
            <div className={styles.singleGrid01}>
                <Link href="/products?category=sobretudos" style={{backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/categories%2Fsobretudo.png?alt=media&token=2058a869-4619-44b7-894e-aaf26198a5a4')`}}>Sobretudos</Link>
                
                <Link href="/products?category=ternos" style={{backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/categories%2Fterno.png?alt=media&token=835668da-b7b7-4faf-8224-ddfbe9dd8b44')`}}>Ternos</Link>
    
            </div>
            <div className={styles.singleGrid02}>
                
                <Link href="/products?category=botas" style={{backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/categories%2Fbota.png?alt=media&token=8c3929f4-52b1-47cf-9e23-9fb6b0b5c40e')`}}>Botas</Link>

                
                <Link href="/products?category=acessorios" style={{backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/categories%2Facessorio.png?alt=media&token=40f0aae2-a8de-4a35-a79c-78af8a5cf6c2')`}}>Acessórios</Link>

            </div>
        </div>
    
 
        </div>
    </div>
    )
}