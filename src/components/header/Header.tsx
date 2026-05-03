"use client";

import { useCartContext } from "@/context/CartContext";
import styles from "./Header.module.css";
import Image from "next/image";

export const Header = () => {
  const { productsInCart } = useCartContext();

  return (
    <div className={styles.header}>
      <Image
        src="https://dummyimage.com/160x60/161616/99f500&text=Recruitment"
        alt="Recruitment Task"
        width={160}
        height={60}
      />
      <p>Products in cart: {productsInCart.length}</p>
    </div>
  );
};
