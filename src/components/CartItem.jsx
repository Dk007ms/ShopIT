import React, { useMemo } from "react";
import { MdDelete } from "react-icons/md";
import { clearCart } from "../redux/Slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { addtoCart, removeOne } from "../redux/Slices/CartSlice";
import { toast } from "react-toastify";
import "./toastStyles.css";

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
    toast.success("Item Removed", {
      position: "bottom-center",
      autoClose: 2000,
      draggable: true,
      bodyClassName: "toastbody",
      className: "toastbody",
      style: {
        borderRadius: "1rem",
      },
    });
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center border-b border-gray-200 p-4 w-full md:w-11/12">
      <div className="flex items-center mb-4 md:mb-0">
        <img
          className="w-12 h-12 object-contain mr-4 sm:mr-8"
          src={image}
          alt={title}
        />
        <div className="about flex flex-col gap-2 md:gap-3">
          <h2 className="text-lg font-semibold md:w-60">{title}</h2>
          <p className="text-xs md:text-sm text-gray-600 md:w-60">
            {description}
          </p>
          <div className="price-quant flex gap-4 md:gap-8">
            <span className="text-sm md:text-lg font-bold">${price}</span>
            <span className="quantity">Qty: {quantity}</span>
          </div>
        </div>
      </div>
      <div className="cartQuantity flex gap-4">
        <div className="counter flex items-center">
          <button
            onClick={() => changeQty("decrease")}
            className="decrement text-xl md:text-4xl"
          >
            <CiSquareMinus />
          </button>
          <span className="quantity px-2 md:px-4 text-sm md:text-2xl">
            {quantity}
          </span>
          <button
            onClick={() => changeQty("increase")}
            className="increment text-xl md:text-4xl"
          >
            <CiSquarePlus />
          </button>
        </div>
        <button onClick={deleteItem} className="text-red-500">
          <MdDelete className="w-4 h-4 md:w-6 md:h-6" />
        </button>
      </div>
    </div>
  );
}
