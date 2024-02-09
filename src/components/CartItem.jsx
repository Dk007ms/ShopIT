import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/Slices/CartSlice";

export default function CartItem({ item }) {
  const { image, title, price, description } = item;
  const dispatch = useDispatch();

  function deleteItem() {
    dispatch(clearCart(item.id));
  }

  return (
    <div className="flex items-center justify-between border-b border-gray-200 p-4 w-11/12">
      <div className="flex justify-center gap-4 ">
        <img className="w-20 h-20 object-fill mr-8" src={image} alt={title} />
        <div>
          <h2 className="text-lg font-semibold w-96">{title}</h2>
          <p className="text-sm text-gray-600 w-96">{description}</p>
          <span className="text-lg font-bold">${price}</span>
        </div>
      </div>
      <button onClick={deleteItem} className="text-red-500">
        <MdDelete className="w-6 h-6" />
      </button>
    </div>
  );
}
