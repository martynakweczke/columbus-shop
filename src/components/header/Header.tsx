"use client";

import { useCartContext } from "@/context/CartContext";
import styles from "./Header.module.css";
import Image from "next/image";
import { CartIcon } from "../icons/CartIcon";

export const Header = () => {
  const { productsInCart } = useCartContext();

  const productsInCartCount = productsInCart.length;

  return (
    <header className={styles.header}>
      <Image
        src="https://dummyimage.com/160x60/161616/99f500&text=Recruitment"
        alt="Recruitment Task"
        width={160}
        height={60}
      />

      <div className={styles.cartContainer}>
        <CartIcon />
        {productsInCartCount > 0 && (
          <span className={styles.badge}>{productsInCartCount}</span>
        )}
      </div>
    </header>
  );
};
