
import Image from "next/image";
import { Product } from "./ProductDetailsView";


interface ProductGalleryProps {
  product: Product;
  activeImage: number;
  setActiveImage: React.Dispatch<React.SetStateAction<number>>;
}

const ProductGallery = ({product,activeImage,setActiveImage}:ProductGalleryProps) => {
    
    return (
        <div>
      
      <div>
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md bg-neutral-100">
          {product.images[activeImage] && (
            <Image
              src={product.images[activeImage]}
              alt={`${product.name} - view ${activeImage + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          )}
        </div>

        {product.images.length > 1 && (
          <div className="mt-4 grid grid-cols-4 gap-3">
            {product.images.map((img, idx) => (
              <button
                key={img + idx}
                type="button"
                onClick={() => setActiveImage(idx)}
                aria-label={`Show image ${idx + 1}`}
                aria-current={activeImage === idx}
                className={`relative aspect-square overflow-hidden rounded-md bg-neutral-100 ring-2 transition ${
                  activeImage === idx
                    ? "ring-neutral-900"
                    : "ring-transparent hover:ring-neutral-300"
                }`}
              >
                <Image
                  src={img}
                  alt={`${product.name} thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="120px"
                />
              </button>
            ))}
          </div>
        )}
      </div>
      </div>

    );
};

export default ProductGallery;