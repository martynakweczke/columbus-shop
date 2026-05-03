import { Product } from "@/types/product";
import Image from "next/image";
import styles from "./ProductListItem.module.css";
import { formatProductPrice } from "./ProductListItem.utils";

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
        <div className={styles.infoTop}>
        <span className={styles.title}>{product.title}</span>
        <div className={styles.brandLogo}>
          <Image
            src={product.brandLogo}
            alt={product.brandName}
            width={60}
            height={30}
          />
        </div>
        </div>
        <span className={styles.description}>{product.description}</span>
        
        <div className={styles.priceContainer}>
          <span className={styles.price}>{formatProductPrice(product.price)}</span>
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
