"use client";

import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";

import { Product } from "../product/ProductDetailsView";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";



interface CheckoutModalProps {
  product: Product;
  quantity: number;
  selectedSize: string;
}
const CheckoutModal = ({
    product,
        quantity,
        selectedSize,
}:CheckoutModalProps) => {
  const router = useRouter()
   const {data: session }= authClient.useSession() 
         const user = session?.user
    
      const unitPrice = product.discountPrice ?? product.price;
const price = unitPrice * quantity;
    return (
        <Modal>
  <Button
  onClick={()=>{
     if (!user) {
     router.push(`/login?redirect=/shop/${product._id}`);
      return;
    }

  }}
    variant="ghost"
    className="mt-3 flex h-12 w-full items-center justify-center rounded-full bg-[#f28b7f] text-sm font-medium text-white transition hover:bg-[#ef7a6c]"
  >
    Buy it Now
  </Button>

  <Modal.Backdrop>
    <Modal.Container placement="auto">
      <Modal.Dialog className="max-w-2xl rounded-2xl bg-white dark:bg-neutral-900">
        <Modal.CloseTrigger />

        <Modal.Header>
          <Modal.Heading className="text-2xl font-bold">
            Checkout
          </Modal.Heading>

          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Review your order before payment.
          </p>
        </Modal.Header>

        <Modal.Body className="space-y-6 p-6">

          {/* Product Card */}

          <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-800">

            <div className="flex gap-4">

              <Image
              width={96}
              height={96}
                src={product.images[0]}
                alt={product.name}
                className="h-24 w-24 rounded-lg object-cover"
              />

              <div className="flex-1">

                <h3 className="text-lg font-semibold dark:text-white">
                  {product.name}
                </h3>

                <p className="mt-2 text-sm text-neutral-500">
                  Size :
                  <span className="ml-2 font-medium">
                    {selectedSize}
                  </span>
                </p>

                <p className="text-sm text-neutral-500">
                  Quantity :
                  <span className="ml-2 font-medium">
                    {quantity}
                  </span>
                </p>

              </div>
                <div className="flex flex-col gap-4">
                   <div className="text-right">
               <p className="text-lg font-bold dark:text-white">
                  ${price}

                </p>
                  <div>
               <form action="/api/checkout_sessions" method="POST">
       <input type="hidden" name='price' value={price}></input>
      <section>
        <button type="submit" className="bg-[#f28b7f] px-4 rounded-full text-black" role="link">
          Checkout
        </button>
      </section>
    </form>  
            </div>
            </div>
                </div>
              
           

            </div>

          </div>

        </Modal.Body>
      </Modal.Dialog>
    </Modal.Container>
  </Modal.Backdrop>
</Modal>
    );
};

export default CheckoutModal;