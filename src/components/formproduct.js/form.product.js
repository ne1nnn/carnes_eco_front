import React, { useState } from "react";
import axios from "axios";
import "./form.style.css";
import Button from "@mui/material/Button";

function ProductsForm() {
  const [title, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [recipe, setRecipe] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("recipe", recipe);
      formData.append("image", image);

      const response = await axios.post("http://localhost:4000/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("La respuesta del servidor es:", response.data);
    } catch (error) {
      console.error("Ocurrió un error al enviar los datos:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="form"
      encType="multipart/form-data"
    >
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
      <div>
        <label htmlFor="image">Imagen:</label>
        <input
          id="image"
          type="file"
          multiple
          onChange={(event) => setImage(event.target.files[0])}
        />
      </div>
      <Button
        className="button-card"
        variant="contained"
        color="success"
        type="submit"
      >
        Cargar producto
      </Button>
    </form>
  );
}

export default ProductsForm;
