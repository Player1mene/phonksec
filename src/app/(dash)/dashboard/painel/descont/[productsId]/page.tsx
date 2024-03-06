import { Metadata } from "next";
import AddDescont from "../../components/AddDescont";


export const metadata: Metadata = {
  title: 'Adicionar Desconto - Painel',
} 

export default function page({ params }: { params: { productsId: string } }){

    return (
      <AddDescont productsId={params.productsId}/>
    )
}