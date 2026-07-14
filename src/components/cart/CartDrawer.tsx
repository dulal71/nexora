'use client'

import { useCart } from "@/context/CartContext";


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
      {/*  Background Overlay */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 z-[9998] ${
          isCartOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
        }`}
      />

      {/* ২. Main Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-80 bg-white dark:bg-black shadow-2xl z-[9999] 
        transition-transform duration-300 ease-in-out transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b flex justify-between items-center bg-gray-50 dark:bg-black">
          <h1 className="text-lg font-semibold text-black">Cart</h1>
          <button 
            onClick={closeCart} 
            className="p-2 text-gray-600 dark:text-white hover:text-black font-bold text-xl transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-4 text-gray-700">
          Cart is empty
        </div>
      </div>
    </>
    );
};

export default CartDrawer;