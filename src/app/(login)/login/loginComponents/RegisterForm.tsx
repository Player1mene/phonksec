'use client'
import useForm from '@/app/hooks/useform'
import styles from './LoginForm.module.css'
import FormInput from '@/app/components/inputs/FormInput';
import Button from '@/app/components/inputs/Button';
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faG } from '@fortawesome/free-solid-svg-icons';
import { AdminContext } from '@/app/adminContext';
import Loading from '@/app/(app)/loading';
import Link from 'next/link';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '@/app/db/firebase';
import { addDoc, collection } from 'firebase/firestore';
import Logo from '../../../../../public/logo.png'
import Image from 'next/image';


export default function RegisterForm(){

    
    const name = useForm({type: null});
    const email = useForm({type: 'email'});
    const password = useForm({type: 'password'});
    const { loginGoogle, loading} = useContext(AdminContext)

    function handlerSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        if(name.validate() && email.validate() && password.validate()){
            createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                const user = userCredential.user;
                addDoc(collection(db, "users"), {
                    name: name.value,
                    userId: user.uid,
                    admin: false,
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        }
    }


    return(
        <form onSubmit={(event)=>{handlerSubmit(event)}}className={styles.loginForm}>
            {loading && <Loading/>}

           <Link href="/"><Image alt='' src={Logo} width="30"/></Link> 
            
            <h2>Fazer Cadastro</h2>

            <FormInput name='name' type='text' label='Seu nome:' placeholder='Digite seu nome aqui...' {...name}/>
            
            <FormInput name='email' type='text' label='Seu e-mail:' placeholder='Digite seu e-mail aqui...' {...email}/>
            
            <FormInput name='password' type='password' label='Sua senha:' placeholder='Digite sua senha aqui...' {...password}/>

            <div className={styles.buttonAndLink}>
                <Button inputName='Fazer cadastro' />
                <Link href="/login">Faça login aqui</Link>
            </div>
            
            <h2>Ou</h2>

            <p className={styles.loginGoogle} onClick={()=>{loginGoogle()}}><FontAwesomeIcon icon={faG}/> Cadastrar-se com o google</p>
        </form>
    )
}