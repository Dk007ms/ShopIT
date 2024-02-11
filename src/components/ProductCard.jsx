import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart, removeOne } from "../redux/Slices/CartSlice";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./toastStyles.css";

export default function ProductCard({ item }) {
  const { image, description, title, price } = item;

  const cart = useSelector((state) => state.cart);
  const { isLoggedin } = useSelector((state) => state.login);
  const navigate = useNavigate();

  // Memoize cartItem to avoid unnecessary recalculations
  const cartItem = useMemo(
    () => cart.find((cartItem) => cartItem.id === item.id) || {},
    [cart, item.id]
  );
  const quantity = cartItem.quantity || 0;

  const dispatch = useDispatch();

  function addItem() {
    if (isLoggedin) {
      dispatch(addtoCart(item));
      toast.success("Item added Successfully", {
        autoClose: 2000,
        draggable: true,
        bodyClassName: "toastbody",
        className: "toastbody",
        style: {
          borderRadius: "1rem",
        },
      });
    } else {
      toast.error("Please Login", {
        autoClose: 2000,
        draggable: true,
        bodyClassName: "toastbody",
        className: "toastbody",
        style: {
          borderRadius: "1rem",
        },
      });
      navigate("/login");
    }
  }

  function changeQty(operation) {
    if (operation === "increase") {
      dispatch(addtoCart(item));
    } else if (operation === "decrease") {
      dispatch(removeOne(item));
    }
  }

  return (
    <div className="product-card border-2 shadow-sm shadow-black lg:w-96 w-5/6 p-3 flex flex-col justify-between rounded-md bg-white mb-4">
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
          <div className="cartButtons">
            {quantity >= 1 ? (
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
