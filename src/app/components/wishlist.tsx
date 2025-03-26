// src/components/Wishlist.tsx
import React, { useEffect } from 'react';
import { useWishlistStore } from '../store/wishliststore';

const Wishlist: React.FC = () => {
  const { items, addItem, removeItem, loadItems } = useWishlistStore();

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  const handleAddToWishlist = (product: { id: number; name: string; price: number; image: string }) => {
    addItem(product);
  };

  const handleRemoveFromWishlist = (productId: number) => {
    removeItem(productId);
  };

  return (
    <div>
      <h2>Your Wishlist</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} width={50} />
            <span>{item.name}</span>
            <span>${item.price}</span>
            <button onClick={() => handleRemoveFromWishlist(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      {/* Example of adding a product */}
      <button onClick={() => handleAddToWishlist({ id: 1, name: 'Product 1', price: 100, image: 'product1.jpg' })}>
        Add Product 1 to Wishlist
      </button>
    </div>
  );
};

export default Wishlist;
