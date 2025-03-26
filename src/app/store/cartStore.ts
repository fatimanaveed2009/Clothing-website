import { create } from 'zustand';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
  totalPrice: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  cartItems: [],
  totalPrice: 0,
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cartItems.find((cartItem) => cartItem.id === item.id);
      let updatedCart;
      if (existingItem) {
        updatedCart = state.cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        updatedCart = [...state.cartItems, { ...item, quantity: 1 }];
      }
      return {
        cartItems: updatedCart,
        totalPrice: updatedCart.reduce(
          (total, cartItem) => total + cartItem.price * cartItem.quantity,
          0
        ),
      };
    }),
  removeFromCart: (id) =>
    set((state) => {
      const updatedCart = state.cartItems.filter((item) => item.id !== id);
      return {
        cartItems: updatedCart,
        totalPrice: updatedCart.reduce(
          (total, cartItem) => total + cartItem.price * cartItem.quantity,
          0
        ),
      };
    }),
  clearCart: () => set({ cartItems: [], totalPrice: 0 }),
}));
