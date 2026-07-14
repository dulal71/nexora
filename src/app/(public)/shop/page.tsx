import ProductContainer from "@/components/product/ProductContainer";
import { getProducts } from "@/lib/api/getProducts";

type ShopPageProps = {
  searchParams: Promise<{ page?: string }>;

};

const ShopPage = async ({searchParams}:ShopPageProps) => {
  const query=await searchParams
  const {page,search="",sort="",category=''}=query
  const currentPage = Number(page)|| 1
  const { data: products,total } = await getProducts(currentPage,search,sort,category);
 
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header/Title */}
      <h1 className="text-3xl font-semibold mb-6 text-center">Our Collection</h1>

      {/* Product List Section */}
      <div>
        {products && products.length > 0 ? (
      
          <ProductContainer products={products} total={total} />
        ) : (

          <div className="flex justify-center items-center h-64">
            <p className="text-gray-500 text-lg">No products found at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;