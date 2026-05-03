"use client";

import { apiClient } from "@/api/apiClient";
import { Product } from "@/types/product";
import { createContext, ReactNode, useContext, useState } from "react";

interface CartContextType {
  productsInCart: Product[];
  addProductToCart: (product: Product) => Promise<void>;
}

interface CartContextProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [productsInCart, setProductsInCart] = useState<Product[]>([]);

  const addProductToCart = async (product: Product) => {
    await apiClient.addProductToCart(product.articleNumber);

    setProductsInCart((prev) => [...prev, product]);
  };

  return (
    <CartContext value={{ productsInCart, addProductToCart }}>
      {children}
    </CartContext>
  );
}

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }

  return context;
};
