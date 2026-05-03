import { Product } from "@/types/product";
import styles from "./ProductList.module.css"

type ProductListProps = {
    products: Product[];
}

export const ProductList = ({products}: ProductListProps) => {
    return (
        <div>
            <h2>Product list</h2>
            {products.map(product => (
                <span key={product.articleNumber}>{product.title}</span>
            ))}
        </div>
    );
};