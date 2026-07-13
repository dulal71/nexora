import { getProducts } from "@/lib/api/getProducts";
import ProductCard from "../product/ProductCard";
import { Product } from "../product/ProductContainer";



const NewArrival =async () => {
   const { data: products }: { data: Product[] } = await getProducts();
    return (
        <div className="container mx-auto my-10">
            <h2 className="text-3xl font-semibold text-black dark:text-white text-center mb-10">NEW ARRIVAL</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {
            products.slice(0,4).map(product=><ProductCard key={product._id} product={product}></ProductCard>)
          }
            </div>  
        </div>
    );
};

export default NewArrival;