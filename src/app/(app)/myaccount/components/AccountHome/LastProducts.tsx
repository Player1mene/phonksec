import styles from './LastProducts.module.css';


export default function LastProducts(){

    return (
        <div className={styles.LastProducts}>
            <h3>Olá 👋, Usuário</h3>
            <div className={styles.lastGrid}>
                <div className={styles.lastWishe}>
                    <h4>Ultimo na lista de Desejos</h4>
                    <div className={styles.innerLast}>

                    </div>
                </div>

                <div className={styles.lastRequest}>
                    <h4>Ultimo nos pediddos</h4>
                    <div className={styles.innerLast}>
                        
                    </div>
                </div>

                <div className={styles.lastCart}>
                    <h4>Ultimo no carrinho</h4>
                    <div className={styles.innerLast}>
                            
                    </div>
                </div>
            </div>
        </div>
    )
}