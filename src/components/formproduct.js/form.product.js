import React, { useState } from "react";
import axios from "axios";
import "./form.style.css";

function ProductsForm() {
  const [title, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [recipe, setRecipe] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/products/add", {
        title,
        price,
        description,
        recipe,
      });

      console.log("La respuesta del servidor es:", response.data);
    } catch (error) {
      console.error("Ocurrió un error al enviar los datos:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          id="name"
          type="text"
          value={title}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">Precio:</label>
        <input
          id="price"
          type="number"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Descripción:</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="recipe">Receta:</label>
        <textarea
          id="recipe"
          value={recipe}
          onChange={(event) => setRecipe(event.target.value)}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default ProductsForm;
