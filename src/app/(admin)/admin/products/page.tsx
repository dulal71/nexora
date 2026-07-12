import { ProductTable } from '@/components/admin/ProductTable';
import { getProducts } from '@/lib/api/getProducts';

const Products = async () => {
  const { data: products } = await getProducts();

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
    </div>
  );
};

export default Products;