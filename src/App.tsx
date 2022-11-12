import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductCard from './components/ProductCard';
import { fetchProductById } from './api/fetchProducts';

function App() {
  const [product, setProduct] = useState<any>();

  useEffect (() => {
    const productId = Math.floor(Math.random() * 20) + 1;
    fetchProductById(productId)
      .then((res) => setProduct(res));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {product && <ProductCard
            imageUrl={product.image}
            name={product.title}
            price={product.price}
        />}
      </header>
    </div>
  );
}

export default App;
