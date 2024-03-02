'use client'
import styles from  "./Button.module.css"

export default function Button({inputName}: {inputName:string}) {
  
  return (           
    <button className={styles.button}>
        {inputName}
    </button>
  );
}
