import { Product } from "@/types/product";
import Image from "next/image";

type ProductListItemProps = {
  product: Product;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <div>
      <Image
        src={product.image.url}
        alt={product.image.altText}
        width={400}
        height={400}
      />
      <span>{product.title}</span>
      <span>{product.description}</span>
      <span>{product.brandLogo}</span>
      <span>{product.brandName}</span>
      <span>{product.price}</span>
      {product.promotion && <span>{product.promotion.percentage}</span>}
    </div>
  );
};
