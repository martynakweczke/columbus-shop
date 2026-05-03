"use client";

import { useCartContext } from "@/context/CartContext";
import styles from "./Header.module.css";
import Image from "next/image";
import LogoImage from "../../../public/logo.png";
import { CartIcon } from "../icons/CartIcon";

export const Header = () => {
  const { productsInCart } = useCartContext();

  const productsInCartCount = productsInCart.length;

  return (
    <header className={styles.header}>
      <Image
        loading="eager"
        src={LogoImage}
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
