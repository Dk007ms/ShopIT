import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  function handleShopNow() {
    navigate("/");
  }

  const totalAmount = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 mt-28">
      {cart.length > 0 ? (
        <div className="flex flex-col lg:flex-row mx-5">
          <div className="lg:w-3/4">
            <h2 className="text-2xl font-semibold mb-4 ">Your Cart</h2>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="lg:w-1/4 mt-8 lg:mt-0">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">Total:</span>
                <span className="font-semibold">${totalAmount}</span>
              </div>
              <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded">
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-xl font-semibold mb-4">Your cart is empty!</p>
          <button
            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded"
            onClick={handleShopNow}
          >
            Shop Now
          </button>
        </div>
      )}
    </div>
  );
}
