import Link from "next/link";

export interface Product {
  _id: string;
  name: string;
  category: string;
  brand: string;
  price: string | number;
  description?: string;
  stock?: number;
  images?: string[];
  sizes?: string[];
  colors?: string[];
  createdAt?: string | Date;
  updatedAt?: string | Date;
}

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const {
    _id,
    name,
    category,
    brand,
    price,
    description,
    stock,
    images,
    sizes,
    colors,
  } = product;

  return (
    <div className="max-w-4xl mx-auto bg-[#F9F7F7] dark:bg-[#0F172A] shadow-md  p-6">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            {category}
          </p>
          <h1 className="text-2xl font-semibold text-gray-900">{name}</h1>
          <p className="text-sm text-gray-400 mt-1">ID: {_id}</p>
        </div>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Images */}
        <div>
          {images && images.length > 0 ? (
            <div className="grid grid-cols-2 gap-3">
              {images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${name} image ${i + 1}`}
                  className="w-full aspect-square object-cover rounded-lg border border-gray-200"
                />
              ))}
            </div>
          ) : (
            <div className="w-full aspect-square rounded-lg border border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm">
              No images uploaded
            </div>
          )}
        </div>

        {/* Details */}
        <div className="space-y-5">
          <div>
            <span className="text-2xl font-bold text-gray-900">
              ${Number(price).toFixed(2)}
            </span>
            {typeof stock === "number" && (
              <span
                className={`ml-3 inline-block text-xs font-medium px-2 py-1 rounded-full ${
                  stock > 0
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {stock > 0 ? `${stock} in stock` : "Out of stock"}
              </span>
            )}
          </div>

          <dl className="grid grid-cols-2 gap-y-3 text-sm">
            <dt className="text-gray-500">Brand</dt>
            <dd className="text-gray-900 font-medium">{brand}</dd>

            <dt className="text-gray-500">Category</dt>
            <dd className="text-gray-900 font-medium capitalize">
              {category}
            </dd>

            {sizes && sizes.length > 0 && (
              <>
                <dt className="text-gray-500">Sizes</dt>
                <dd className="text-gray-900 font-medium">
                  {sizes.join(", ")}
                </dd>
              </>
            )}

            {colors && colors.length > 0 && (
              <>
                <dt className="text-gray-500">Colors</dt>
                <dd className="text-gray-900 font-medium">
                  {colors.join(", ")}
                </dd>
              </>
            )}
          </dl>

          {description && (
            <div>
              <h2 className="text-sm font-medium text-gray-500 mb-1">
                Description
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                {description}
              </p>
            </div>
          )}

         
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;