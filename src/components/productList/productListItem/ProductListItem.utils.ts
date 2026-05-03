export const formatProductPrice = (price: number) => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "EUR",
  }).format(price);
};

const getDiscountedProductPrice = (
  price: number,
  promotionPercentage: number,
) => {
  return (price * (100 - promotionPercentage)) / 100;
};

export const formatDiscountedProductPrice = (
  price: number,
  promotionPercentage: number,
) => {
  const discountedProductPrice = getDiscountedProductPrice(
    price,
    promotionPercentage,
  );

  return formatProductPrice(discountedProductPrice);
};
