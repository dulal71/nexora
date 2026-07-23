"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface CartItem {
  productId: string;
  name: string;
  image: string;
  size: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: CartItem) => Promise<void>;
  removeFromCart: (productId: string) => Promise<void>;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  showLoginPrompt: boolean;
  setShowLoginPrompt: (value: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const addToCart = async (product:CartItem): Promise<void> => {
  
   setCartItems((prev) => {
  const existingItem = prev.find(
    (item) =>
      item.productId === product.productId &&
      item.size === product.size
  );

  if (existingItem) {
    return prev.map((item) =>
      item.productId === product.productId &&
      item.size === product.size
        ? {
            ...item,
            quantity: item.quantity + product.quantity,
          }
        : item
    );
  }

  return [...prev, product];
});
  };

  const removeFromCart = async (productId: string): Promise<void> => {
    setCartItems((prev) =>
      prev.filter((item) => item.productId !== productId)
    );
  };

  const value: CartContextType = {
    cartItems,
    addToCart,
    removeFromCart,
    isCartOpen,
    openCart,
    closeCart,
    showLoginPrompt,
    setShowLoginPrompt,
  };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
};