import { ProductTable } from '@/components/admin/ProductTable';
import { PaginationWithEllipsis } from '@/components/shared/Pagination';
import { getProducts } from '@/lib/api/getProducts';
type ProductProps = {
  searchParams: Promise<{ page?: string }>;

};
const Products = async ({searchParams}:ProductProps) => {
 const {page}=await searchParams
  const currentPage = Number(page)|| 1
  const { data: products,total } = await getProducts(currentPage);

  return (
    <div className= " max-w-7xl mx-auto  p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Products</h1>
        <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
          Manage your store's products, prices, and categories.
        </p>
      </div>

      <div>
        <ProductTable products={products} />
      </div>
      <PaginationWithEllipsis total={total}></PaginationWithEllipsis>
    </div>
  );
};

export default Products;