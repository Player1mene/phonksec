'use client'
import useForm from '@/app/hooks/useform'
import styles from './LoginForm.module.css'
import FormInput from '@/app/components/inputs/FormInput';
import Button from '@/app/components/inputs/Button';
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faG } from '@fortawesome/free-solid-svg-icons';
import { AdminContext } from '@/app/adminContext';


export default function LoginForm(){

    const email = useForm({type: 'email'});
    const password = useForm({type: null});
    const { signIn, loginGoogle} = useContext(AdminContext)

    function handlerSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        if(email.validate() && password.validate()){
            signIn(email.value, password.value)
        }
    }


    return(
        <form onSubmit={(event)=>{handlerSubmit(event)}}className={styles.loginForm}>
            <h2>Fazer login</h2>
            <FormInput name='email' type='text' label='Seu e-mail:' placeholder='Digite seu e-mail aqui...' {...email}/>
            <FormInput name='password' type='password' label='Sua senha:' placeholder='Digite sua senha aqui...' {...password}/>
            <Button inputName='Login' />

            <h2>Ou</h2>

            <p className={styles.loginGoogle} onClick={()=>{loginGoogle()}}><FontAwesomeIcon icon={faG}/> Fazer login com o google</p>
        </form>
    )
}