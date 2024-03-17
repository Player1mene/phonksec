'use client'
import useForm from '@/app/hooks/useform'
import styles from './LoginForm.module.css'
import FormInput from '@/app/components/inputs/FormInput';
import Button from '@/app/components/inputs/Button';


export default function LoginForm(){

    const email = useForm({type: null});
    const password = useForm({type: null});

    function handlerSubmit(e: React.FormEvent){
        e.preventDefault();
    }


    return(
        <form onSubmit={(e)=>{handlerSubmit(e)}}className={styles.loginForm}>
            <h2>Fazer login</h2>
            <FormInput name='email' type='text' label='Seu e-mail:' placeholder='Digite seu e-mail aqui...' {...email}/>
            <FormInput name='password' type='password' label='Sua senha:' placeholder='Digite sua senha aqui...' {...password}/>
            <Button inputName='Login' />
        </form>
    )
}