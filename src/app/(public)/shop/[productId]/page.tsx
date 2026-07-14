import { ProductDetailsProps } from "@/app/(admin)/admin/products/[productId]/page";
import ProductDetailsView from "@/components/product/ProductDetailsView";
import getProductById from "@/lib/api/getProductById";
import { getSession } from "@/lib/api/userSession";
import { redirect } from "next/navigation";


const ProductDetails =async ({params}:ProductDetailsProps) => {
    const user = await getSession()
    const { productId } = await params;
const product = await getProductById(productId)
if(!user){
    redirect(`/login?redirect=/shop/${productId}`)
}
    return (
        <div>
    <ProductDetailsView product={product}></ProductDetailsView>
        </div>
    );
};

export default ProductDetails;