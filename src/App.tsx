import { useState, useEffect } from 'react';
import './App.css';
import { Row } from 'react-bootstrap';
import { ProductCardProps, ProductCard } from './components/ProductCard';
import { fetchAllProducts } from './api/fetchProducts';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchAllProducts()
      .then((res) => {
        const productCards = res.map((product: ProductCardProps) =>
          <ProductCard {...product}/>
        );
        setProducts(productCards);
      })
  }, []);

  return (
    <div className="App">
      <Row sm={6} md={4}>
        {
        products ? (
          products
        ) : null
        }
      </Row>
    </div>
  );
}

export default App;
