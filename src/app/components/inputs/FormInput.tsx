'use client'
import React from 'react'
import styles from './FormInput.module.css';


interface InputParams {
  label: string,
  type: string,
  name: string,
  placeholder: string,
  value: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  error: string | null,
  onBlur: React.FocusEventHandler<HTMLInputElement>,
}


const FormInput = (props: InputParams) => {
  return (
    <div className={styles.wrapper}>
        <label htmlFor={props.name} className={styles.label}>
            {props.label}
        </label>
        <div className={styles.gridInput}>
        <input id={props.name} 
        className={`${styles.input} ${props.error ? styles.inputError : ""}`} 
        type={props.type} 
        name={props.name}
        placeholder={props.placeholder} 
        value={props.value} 
        onChange={props.onChange}
        onBlur={props.onBlur}/>
        </div>
        {props.error && <p className={styles.error}>{props.error}</p>}
    </div>
  )
}

export default FormInput