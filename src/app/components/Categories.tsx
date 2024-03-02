import Link from 'next/link'
import styles from './Categories.module.css'

export default function Categories(){


    return (
    <div className={styles.categories}>
        <div className={styles.scrollCategories}>
        <div className={styles.grid}>
            <div className={styles.singleGrid01}>
                <Link href="/products?category=camisa" style={{backgroundImage: `url('https://cdn.discordapp.com/attachments/1088120399478390897/1210542085837684817/image.png?ex=65eaf02c&is=65d87b2c&hm=6517e94fb96209eba45057d7bae293b1634fbdac514b681231136aaae7a467e7&')`}}>Camisas</Link>
                
                <Link href="/products?category=moletom" style={{backgroundImage: `url('https://cdn.discordapp.com/attachments/1088120399478390897/1210542187498967111/image.png?ex=65eaf044&is=65d87b44&hm=e02f685d44413d1ccd00d6fb3cd5b144c81975111ee138fe3661c7043d631154&')`}}>Moletons</Link>
    
            </div>
            <div className={styles.singleGrid02}>
                
                <Link href="/products?category=shorts" style={{backgroundImage: `url('https://cdn.discordapp.com/attachments/1091340777197670460/1210569853182672926/image.png?ex=65eb0a08&is=65d89508&hm=34dfc3cd571fc11a63c5c1f759914ea234e0f12e1bfbee666494cfb83d88c9ee&')`}}>Shorts</Link>

                
                <Link href="/products?category=calcas" style={{backgroundImage: `url('https://cdn.discordapp.com/attachments/1091340777197670460/1210573566974627861/image.png?ex=65eb0d7d&is=65d8987d&hm=d041bf35ccc65602ef6e661b903da8b3bc616606ca193380c8fd2e9b3ff877a2&')`}}>Calças</Link>

                
                <Link href="/products?category=tenis" style={{backgroundImage: `url('https://cdn.discordapp.com/attachments/1091340777197670460/1210573636998660156/image.png?ex=65eb0d8e&is=65d8988e&hm=84c373c6f119588e1a5c1b08c80f5d803adc19e560d6f00913a55978bac9db66&')`}}>Tênis</Link>
            </div>
        </div>
        <div className={styles.grid}>
            <div className={styles.singleGrid01}>
                <Link href="/products?category=sobretudos" style={{backgroundImage: `url('https://cdn.discordapp.com/attachments/1091340777197670460/1210575123376119849/image.png?ex=65eb0ef0&is=65d899f0&hm=8f80b83a47ad65826498faf11cd6df20376c571a8761691e8d83353dc5bf9775&')`}}>Sobretudos</Link>
                
                <Link href="/products?category=ternos" style={{backgroundImage: `url('https://cdn.discordapp.com/attachments/1091340777197670460/1210575313126555699/image.png?ex=65eb0f1e&is=65d89a1e&hm=35febbb3bced743bb22aba5bc94734f898247f0e0e5aebf65facc3f6fe289890&')`}}>Ternos</Link>
    
            </div>
            <div className={styles.singleGrid02}>
                
                <Link href="/products?category=botas" style={{backgroundImage: `url('https://cdn.discordapp.com/attachments/1091340777197670460/1210575192506630144/image.png?ex=65eb0f01&is=65d89a01&hm=9584c9bbb2530d7ebc172ab3d9e03a453429f947d80453fa7c68b6daaff40d39&')`}}>Botas</Link>

                
                <Link href="/products?category=acessorios" style={{backgroundImage: `url('https://cdn.discordapp.com/attachments/1091340777197670460/1210575259917623356/image.png?ex=65eb0f11&is=65d89a11&hm=14332d67f2ce4c86489d9c50df58980be822ac9a7ab7b7d44acad43935aa35d0&')`}}>Acessórios</Link>

            </div>
        </div>
    
 
        </div>
    </div>
    )
}