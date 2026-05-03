"use client";

import { useCartContext } from "@/context/CartContext";
import styles from "./Header.module.css";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  const { productsInCart } = useCartContext();

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <p>Products in cart: {productsInCart.length}</p>
    </div>
  );
};
