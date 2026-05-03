import { Product } from "@/types/product";
import styles from "./ProductList.module.css";
import { ProductListItem } from "./productListItem/ProductListItem";

type ProductListProps = {
  products: Product[];
};

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <>
      <h2 className={styles.productListTitle}>Our Products</h2>
      <div className={styles.mainContainer}>
        {products.map((product) => (
          <ProductListItem key={product.articleNumber} product={product} />
        ))}
      </div>
    </>
  );
};
