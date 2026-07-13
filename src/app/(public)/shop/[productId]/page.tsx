import { ProductDetailsProps } from "@/app/(admin)/admin/products/[productId]/page";
import ProductDetailsView from "@/components/product/ProductDetailsView";
import getProductById from "@/lib/api/getProductById";


const ProductDetails =async ({params}:ProductDetailsProps) => {
    const { productId } = await params;

const product = await getProductById(productId)
  console.log(product);
    return (
        <div>
    <ProductDetailsView product={product}></ProductDetailsView>
        </div>
    );
};

export default ProductDetails;