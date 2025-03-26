import React from "react";
import { useCartStore } from "../store/cartStore";
import Button from "./button";

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, clearCart, totalPrice } = useCartStore();

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item:number|string|any) => (
              <li key={item.id} className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">{item.name} (x{item.quantity})</span>
                <span className="font-semibold">${item.price * item.quantity}</span>
                <Button
                  className="bg-red-500 text-white px-3 py-1 rounded-md"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between font-semibold text-lg">
            <span>Total:</span>
            <span>${totalPrice}</span>
          </div>
          <Button className="w-full bg-blue-600 text-white mt-4 py-2" onClick={clearCart}>
            Clear Cart
          </Button>
        </>
      )}
    </div>
  );
};

export default Cart;
