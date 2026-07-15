import { FiRotateCcw, FiTruck } from "react-icons/fi";


const ProductInfoCard = () => {
    return (
         <div className="mt-6 space-y-3">
          <div className="flex gap-3 rounded-lg bg-neutral-50 p-4">
            <FiTruck className="mt-0.5 h-5 w-5 shrink-0 text-neutral-700" />
            <p className="text-sm text-neutral-600">
              <span className="font-medium text-neutral-900">
                Free Shipping
              </span>
              <br />
              We offer worldwide free delivery on all orders over $100.{" "}
              <a href="#" className="underline underline-offset-2">
                Learn more.
              </a>
            </p>
          </div>
          <div className="flex gap-3 rounded-lg bg-neutral-50 p-4">
            <FiRotateCcw className="mt-0.5 h-5 w-5 shrink-0 text-neutral-700" />
            <p className="text-sm text-neutral-600">
              <span className="font-medium text-neutral-900">
                Easy Returns
              </span>
              <br />
              Return within 30 days of purchase. Duties & taxes are
              non-refundable.{" "}
              <a href="#" className="underline underline-offset-2">
                Returns Details.
              </a>
            </p>
          </div>
        </div>
    );
};

export default ProductInfoCard;