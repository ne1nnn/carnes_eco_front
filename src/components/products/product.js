import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeReviewCard from "./Card/RecipeReviewCard";
import Grid from "@mui/material/Grid";
import "./product.styles.css";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/all")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="product-list-container">
      <Grid container spacing={0.5}>
        {products.map((product) => (
          <Grid
            item
            xs={6}
            sm={6}
            md={3}
            key={product.id}
            style={{ marginTop: "1.5%" }}
          >
            <RecipeReviewCard
              id={product._id}
              title={product.title}
              price={product.price}
              image={product.image}
              description={product.description}
              stock={product.stock}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
