"use client";

import { Product } from "@/types/product";
import Image from "next/image";
import styles from "./ProductListItem.module.css";
import {
  formatDiscountedProductPrice,
  formatProductPrice,
} from "./ProductListItem.utils";
import { useState } from "react";
import { useCartContext } from "@/context/CartContext";

type ProductListItemProps = {
  product: Product;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const { addProductToCart } = useCartContext();

  const handleAddToCartClick = async () => {
    try {
      setIsAddingToCart(true);

      await addProductToCart(product);
    } catch {
      console.error("Adding to cart failed");
    } finally {
      setIsAddingToCart(false);
    }
  };

  return (
    <article className={styles.productCard}>
      <div className={styles.image}>
        <Image
          src={product.image.url}
          alt={product.image.altText}
          width={300}
          height={300}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.infoTop}>
          <span className={styles.title}>{product.title}</span>
          <div className={styles.brandLogo}>
            <Image
              src={product.brandLogo}
              alt={product.brandName}
              width={75}
              height={30}
            />
          </div>
        </div>
        <p className={styles.description}>{product.description}</p>

        <div className={styles.priceContainer}>
          {product.promotion ? (
            <>
              <span className={styles.oldPrice}>
                {formatProductPrice(product.price)}
              </span>
              <div className={styles.promotionContainer}>
                <span className={styles.currentPrice}>
                  {formatDiscountedProductPrice(
                    product.price,
                    product.promotion.percentage,
                  )}
                </span>
                <span className={styles.promotion}>
                  Save {product.promotion.percentage}%
                </span>
              </div>
            </>
          ) : (
            <span className={styles.currentPrice}>
              {formatProductPrice(product.price)}
            </span>
          )}
        </div>
        <button
          className={styles.addToCartButton}
          onClick={handleAddToCartClick}
          disabled={isAddingToCart}
        >
          {isAddingToCart ? "Adding..." : "Add to Cart"}
        </button>
      </div>
    </article>
  );
};
