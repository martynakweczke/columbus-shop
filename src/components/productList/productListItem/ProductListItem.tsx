import { Product } from "@/types/product";
import Image from "next/image";
import styles from "./ProductListItem.module.css";

type ProductListItemProps = {
  product: Product;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.image}>
        <Image
          src={product.image.url}
          alt={product.image.altText}
          width={300}
          height={300}
        />
      </div>
      <div className={styles.info}>
        <span className={styles.title}>{product.title}</span>
        <span className={styles.description}>{product.description}</span>
        <div className={styles.brandLogo}>
          <Image
            src={product.brandLogo}
            alt={product.brandName}
            width={50}
            height={30}
          />
        </div>
        <div className={styles.priceContainer}>
          <span className={styles.price}>{product.price}</span>
          {product.promotion && (
            <span className={styles.promotion}>
              Save {product.promotion.percentage}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
