import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const API_URL = "https://fakestoreapi.com/products";
var output = [];

export default function Home() {
  const [loading, setLoading] = useState(false);
  async function getProducts() {
    setLoading(true);
    try {
      let response = await axios.get(API_URL);
      output = response.data;
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="products w-screen relative mx-auto justify-center gap-4 mt-24 flex flex-wrap">
      {loading
        ? "Loading"
        : output.map((item) => <ProductCard key={item.id} item={item} />)}
    </div>
  );
}
