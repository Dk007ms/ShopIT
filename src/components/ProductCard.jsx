import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart, clearCart } from "../redux/Slices/CartSlice";

export default function ProductCard({ item }) {
  const { image, description, title, price } = item;

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function removeItem() {
    dispatch(clearCart(item.id));
  }

  function addItem() {
    dispatch(addtoCart(item));
  }

  return (
    <div className="product-card border-2 shadow-sm shadow-black w-96 p-3 flex flex-col justify-between rounded-md bg-white mb-4">
      <img
        className="product-image w-full h-56 object-contain mx-auto"
        src={image}
        alt={title}
      />
      <div className="product-details mt-4">
        <h2 className="product-title text-lg font-bold text-gray-800 mb-2">
          {title}
        </h2>
        <p className="product-description text-sm text-gray-600 mb-4">
          {description.substr(0, 150) + "..."}
        </p>
        <div className="product-price text-xl font-bold text-gray-900 flex justify-between items-center">
          <span>${price}</span>
          <div className="">
            {cart.some((cartItem) => cartItem.id === item.id) ? (
              <button
                onClick={removeItem}
                className="cart-btn bg-red-600  text-white font-thin py-1 px-4 rounded"
              >
                Remove
              </button>
            ) : (
              <button
                onClick={addItem}
                className="cart-btn bg-green-400  text-white font-thin py-1 px-4 rounded"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
