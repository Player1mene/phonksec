'use client'
import styles from  "./page.module.css"
import React from 'react'
import { singIn } from '../../db/firebase';
import useForm from '../../hooks/useform'
import Back from "../../components/buttonBack/Back";
import { Handjet } from 'next/font/google'
import FormInput from '../../components/inputs/FormInput'
import Button from "../../components/inputs/Button";
import Logo from '../../../../public/logo.png'
import Image from "next/image";
import { AdminContext } from "../../adminContext";
import { redirect } from "next/navigation";

const handjet = Handjet({ 
  subsets: ["latin"],
  weight: ['400','500','700'],
});

export default function Login() {

  const email = useForm({type:'email'});
  const password = useForm({type: null});

  const user = React.useContext(AdminContext)



  function login(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    if(email.validate() && password.validate()){
      singIn(email.value, password.value)
    }
  }
   if(user.admin === true) return redirect('/dashboard/painel/')
   else
   return (
    <main className={styles.main}>
      <section className={styles.overlay}>
      <section className={styles.dashboard}>
          <div className={styles.header}>
            <Back path="/" name="Home"/>
          </div>


          <div className={styles.formWrapper}>
            <div className={styles.formInner}>

              <form className={styles.form}  onSubmit={(e)=>{login(e)}}>
                    <h1 className={handjet.className}>Faça login</h1>
                    <FormInput label="E-mail" type="email" name="email" placeholder="Digite seu email..." {...email}/>
                    <FormInput label="Senha" type="password" name="password" placeholder="Digite sua senha..." {...password}/>
                    <Button inputName="Fazer login"/>
              </form>

              <div className={styles.imageBack}>  
                <div className={styles.wrapperImage}>
                  <Image width="100" src={Logo} alt=""/>
                </div>
              </div>

            </div>
          </div>
      </section>
      </section>
    </main>
  );
}
