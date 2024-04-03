'use client'
import { AdminContext } from "@/app/adminContext"
import { useContext, useEffect, useState } from "react"
import styles from './CartEdit.module.css'
import { callbackify } from "util";
import CartSingle from "./CartSingle";
import Button from "@/app/components/inputs/Button";

export default function CartEdit(){

    const { cart } = useContext(AdminContext);
    const [total, setTotal] = useState<number>(0)

    useEffect(()=>{
        function formatValue(value: string) : number {
            const str:string = value.replace(",",".");
            const calc:number = Number(str)
            return calc;
        }

        if(cart.length === 0){
            setTotal(0);
        }else{
            var totalPrice:any = 0

            cart.map((value:any)=>{
                totalPrice += formatValue(value.data().price);
                setTotal(Number(parseFloat(totalPrice).toFixed(2)));
            })
            
        }
    },[cart])


    useEffect(()=>{
        console.log(total)
    },[total])


    return(
        <div className={styles.cart}>
            <div className={styles.CartSingles}>
                {cart.map((value:any, index:number)=>(
                    <CartSingle product={value} key={index}/>
                ))}
            </div>
            <div className={styles.CartPay}>
                    <h3>Total: R${total}</h3>
                    <Button inputName="Comprar"/>
            </div>
        </div>
    )
}