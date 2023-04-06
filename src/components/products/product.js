import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./product copy";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/products/all")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {products.map((product) => (
        <Productwda
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          description={product.description}
          recipe={product.recipe}
        />
      ))}
    </div>
  );
}