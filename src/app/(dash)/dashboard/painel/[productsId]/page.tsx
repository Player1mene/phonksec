import EditProducts from "../components/EditProducts";

export default function page({ params }: { params: { productsId: string } }){

    return (
        <EditProducts productsId={params.productsId} />       
    )
}