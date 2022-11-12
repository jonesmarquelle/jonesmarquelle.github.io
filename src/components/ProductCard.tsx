import React from 'react';

interface ProductCardProps {
  imageUrl: string,
  name: string,
  price: number,
}

const ProductCard = ({ imageUrl, name, price }: ProductCardProps) => {

  const priceFormatted = price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className="product_card">
      <img src={imageUrl} alt={name} />
      <h1>{name}</h1>
      <p>{priceFormatted}</p>
    </div>
  );
};

export default ProductCard;
