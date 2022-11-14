import React from 'react';
import { Card, Button } from 'react-bootstrap';

export interface ProductCardProps {
  image: string,
  title: string,
  price: number,
}

export const ProductCard = ({ image, title, price }: ProductCardProps) => {

  const priceFormatted = price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <Card className="product_card">
      <Card.Img variant= "top" src={image} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{priceFormatted}</Card.Text>
          <Button variant= "primary">Add To Cart</Button>
        </Card.Body>
    </Card>
  );
};

//export default ProductCard;
