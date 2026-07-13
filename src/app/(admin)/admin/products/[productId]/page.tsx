import EditProduct from "@/components/admin/EditProduct";
import ProductDetails from "@/components/admin/ProductDetails";
import getProductById from "@/lib/api/getProductById";

interface ProductDetailsProps {
  params: Promise<{ productId: string }>;
}

const ProductDetailsPage = async ({ params }: ProductDetailsProps) => {
  const { productId } = await params;

const product = await getProductById(productId)
  console.log(product);
return (
    <div className="space-y-3">
    <div></div>
    <ProductDetails product={product}></ProductDetails>
     <EditProduct product={product}></EditProduct>
    </div>
  );
};

export default ProductDetailsPage;