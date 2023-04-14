import React, { useState, useEffect } from "react";
import axios from "axios";
import CardProduct from "./card.product";
import Grid from "@mui/material/Grid";

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
    <div className="card-product">
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <CardProduct
              title={product.title}
              price={product.price}
              image={product.image}
              description={product.description}
              recipe={product.recipe}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
