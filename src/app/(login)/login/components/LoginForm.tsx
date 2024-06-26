'use client'
import useForm from '@/app/hooks/useform'
import styles from './LoginForm.module.css'
import FormInput from '@/app/components/FormInputs/FormInput';
import Button from '@/app/components/ButtonsInput/Button';
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faG } from '@fortawesome/free-solid-svg-icons';
import { AdminContext } from '@/app/adminContext';
import Loading from '@/app/(app)/loading';
import Link from 'next/link';
import Logo from '../../../../../public/logo.png'
import Image from 'next/image';


export default function LoginForm(){

    const email = useForm({type: 'email'});
    const password = useForm({type: null});
    const { signIn, loginGoogle, loading} = useContext(AdminContext)

    function handlerSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        if(email.validate() && password.validate()){
            signIn(email.value, password.value)
        }
    }


    return(
        <form onSubmit={(event)=>{handlerSubmit(event)}}className={styles.loginForm}>
            {loading && <Loading/>}
       
            <Link href="/"><Image alt='' src={Logo} width="30"/></Link> 
            
            <h2>Fazer login</h2>
            
            <FormInput name='email' type='text' label='Seu e-mail:' placeholder='Digite seu e-mail aqui...' {...email}/>
            
            <FormInput name='password' type='password' label='Sua senha:' placeholder='Digite sua senha aqui...' {...password}/>

            <div className={styles.buttonAndLink}>
                <Button inputName='Login' />
                <Link href="/login/register">Cadastre-se aqui</Link>
            </div>
            
            <h2>Ou</h2>

            <p className={styles.loginGoogle} onClick={()=>{loginGoogle()}}><FontAwesomeIcon icon={faG}/> Fazer login com o google</p>
        </form>
    )
}