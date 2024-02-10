import React, { useMemo } from "react";
import { MdDelete } from "react-icons/md";
import { clearCart } from "../redux/Slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { addtoCart, removeOne } from "../redux/Slices/CartSlice";

export default function CartItem({ item }) {
  const { image, title, price, description } = item;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  function changeQty(operation) {
    if (operation === "increase") {
      dispatch(addtoCart(item));
    } else if (operation === "decrease") {
      dispatch(removeOne(item));
    }
  }

  const cartItem = useMemo(
    () => cart.find((cartItem) => cartItem.id === item.id) || {},
    [cart, item.id]
  );
  const quantity = cartItem.quantity;

  function deleteItem() {
    dispatch(clearCart(item.id));
  }

  return (
    <div className="flex items-center justify-between border-b border-gray-200 p-4 w-11/12 flex-wrap">
      <div className="flex justify-center gap-4 ">
        <img
          className="w-20 h-20 object-contain mr-8"
          src={image}
          alt={title}
        />
        <div className="">
          <h2 className="text-lg font-semibold w-96">{title}</h2>
          <p className="text-sm text-gray-600 w-96">{description}</p>
          <div className="price-quant flex gap-80">
            <span className="text-lg font-bold">${price}</span>
            <span className="quantity">Quantity : {quantity}</span>
          </div>
        </div>
      </div>
      <div className="counter flex items-center">
        <button
          onClick={() => changeQty("decrease")}
          className="decrement text-4xl"
        >
          <CiSquareMinus />
        </button>
        <span className="quantity px-4 text-2xl">{quantity}</span>
        <button
          onClick={() => changeQty("increase")}
          className="increment text-4xl"
        >
          <CiSquarePlus />
        </button>
      </div>
      <button onClick={deleteItem} className="text-red-500">
        <MdDelete className="w-6 h-6" />
      </button>
    </div>
  );
}
