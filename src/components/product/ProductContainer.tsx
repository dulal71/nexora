import  { PaginationWithEllipsis } from "../shared/Pagination";
import ProductCard from "./ProductCard";
import ProductToolbar from "./ProductToolbar";





export interface Product {
  _id: string; 
  name: string;
 brand: string;
  price: number;          
  discountPrice?: string; 
 images: string[];        
}
interface ProductContainerProps {
  products: Product[];
  total:number;
}

const ProductContainer = ({ products,total }: ProductContainerProps) => {
  return (
    <div className="container mx-auto">
      <div>
        <ProductToolbar></ProductToolbar>
      </div>
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <PaginationWithEllipsis total={total} />
      </div>
    </div>
  );
};

export default ProductContainer;