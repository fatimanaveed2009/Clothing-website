// src/store/wishlistStore.ts
import { create } from 'zustand';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface WishlistState {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  loadItems: () => void;
}

export const useWishlistStore = create<WishlistState>((set) => ({
  items: [],
  addItem: (product) => set((state) => {
    const updatedItems = [...state.items, product];
    localStorage.setItem('wishlist', JSON.stringify(updatedItems));
    return { items: updatedItems };
  }),
  removeItem: (productId) => set((state) => {
    const updatedItems = state.items.filter(item => item.id !== productId);
    localStorage.setItem('wishlist', JSON.stringify(updatedItems));
    return { items: updatedItems };
  }),
  loadItems: () => set(() => {
    const storedItems = localStorage.getItem('wishlist');
    const items = storedItems ? JSON.parse(storedItems) : [];
    return { items };
  }),
}));
