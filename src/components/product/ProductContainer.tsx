import Pagination from "../shared/Pagination";
import ProductCard from "./ProductCard";





export interface Product {
  _id: string; 
  name: string;
 brand: string;
  price: string;          
  discountPrice?: string; 
 images: string[];        
}
interface ProductContainerProps {
  products: Product[];
}

const ProductContainer = ({ products }: ProductContainerProps) => {
  return (
    <div className="container mx-auto">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Pagination />
      </div>
    </div>
  );
};

export default ProductContainer;