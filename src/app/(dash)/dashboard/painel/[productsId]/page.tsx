import { Metadata } from "next";
import EditProducts from "../components/EditProducts";


export const metadata: Metadata = {
    title: 'Editar Produto - Painel',
  }  
  

export default function page({ params }: { params: { productsId: string } }){

    return (
        <EditProducts productsId={params.productsId} />       
    )
}