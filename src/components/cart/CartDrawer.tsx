'use client'

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";


const CartDrawer = () => {
      const { cartItems,
    addToCart,
    removeFromCart,
    isCartOpen,
    openCart,
    closeCart,
    showLoginPrompt,
    setShowLoginPrompt } = useCart();
    return (
        <>
  {/* Background Overlay */}
  <div
    onClick={closeCart}
    className={`fixed inset-0 bg-black/40 transition-opacity duration-300 z-[9998] ${
      isCartOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
    }`}
  />

  {/* Main Side Drawer */}
  <div
    className={`fixed top-0 right-0 h-screen w-full sm:w-80 bg-white dark:bg-black shadow-2xl z-[9999] 
    flex flex-col
    transition-transform duration-300 ease-in-out transform ${
      isCartOpen ? "translate-x-0" : "translate-x-full"
    }`}
  >
    {/* Header */}
    <div className="p-4 border-b flex justify-between items-center bg-gray-50 dark:bg-black">
      <h1 className="text-lg font-semibold text-black dark:text-white">Cart</h1>
      <button
        onClick={closeCart}
        className="p-2 text-gray-600 dark:text-white hover:text-black font-bold text-xl transition-colors"
      >
        ✕
      </button>
    </div>

    {/* Content */}
    <div className="flex-1 overflow-y-auto p-4 text-gray-700 dark:text-gray-200">
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">Cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={`${item.productId}-${item.size}`}
              className="flex items-center gap-3 border-b pb-3 last:border-none"
            >
              {/* Product image */}
              <Image
              width={64}
              height={64}
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md border"
              />

              {/* Product info */}
              <div className="flex-1">
                <h2 className="font-medium text-sm text-black dark:text-white">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  ${item.price} x {item.quantity}
                </p>
              </div>

              {/* Subtotal + remove */}
              <div className="text-right">
                <p className="font-semibold text-sm text-black dark:text-white">
                  ${item.price * item.quantity}
                </p>
                <button
                  onClick={() => removeFromCart(item.productId)}
                  className="text-xs text-red-500 hover:underline mt-1"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>

    {/* Footer with total */}
    {cartItems.length > 0 && (
      <div className="p-4 border-t bg-gray-50 dark:bg-black">
        <div className="flex justify-between font-semibold text-black dark:text-white mb-3">
          <span>Total</span>
          <span>
            $
            {cartItems.reduce(
              (sum, item) => sum + item.price * item.quantity,
              0
            )}
          </span>
        </div>
        <Link href={'/checkout'}>
        <button onClick={()=> closeCart()} className="w-full bg-red-700 text-white py-2 rounded-md hover:opacity-90 transition">
          Checkout
        </button>
        </Link>
        
      </div>
    )}
  </div>
</>
    );
};

export default CartDrawer;