'use client'
import React from 'react'



interface TypeVal {
    regex: RegExp,
    message: string,
}

interface Types {
    email: TypeVal,
    password: TypeVal,
    number: TypeVal,
    price: TypeVal,
}

const types: Types = {
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Preencha um email valido"
    },
    password: {
        regex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
        message: "Senha fraca, deve ter no minimo 1 caracter minusculo, 1 maiusculo, 1 especial e no minimo 8 digitos"
    },
    number: {
        regex: /^\d+$/,
        message: "Ultilize Numeros Apenas",
    },
    price: {
        regex: /\d{1,3}\.?,\d{2}/,
        message: "Coloque um valor valido"
    }

}


const useForm = ({type}: {type:keyof Types | null}) => {


    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState<string | null>(null)

    function validate(value:string) : boolean {
        if (!type) return true;
            if (value.length === 0) {
                setError("Preencha um valor");
                return false;
            } else if (types[type] && !types[type].regex.test(value)){
                setError(types[type].message)
                return false;
            } else {
                setError(null)
                return true;
            }
   }

    function onChange({target}: React.ChangeEvent<HTMLInputElement>){
        if (error) validate(target.value);
        setValue(target.value);
    }
  
    return {
        value,
        setValue,
        onChange,
        error,
        validate: () => validate(value),
        onBlur: () => validate(value)
  }
}

export default useForm