const API_URL = 'https://fakestoreapi.com/products';

export const fetchProductById = (itemId: number) => (
  fetch(`${API_URL}/${itemId}`)
    .then((res) => res.json())
);

export const fetchProductsByCategory = (category: string) => (
  fetch(`${API_URL}/category/${category}`)
    .then((res) => res.json())
);

export const fetchAllProducts = () => (
  fetch(API_URL)
    .then((res) => res.json())
);
