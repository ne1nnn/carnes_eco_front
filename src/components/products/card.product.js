const CardProduct = ({ title, price, description, recipe, image }) => {
  return (
    <div>
      <div>
        <img className="product__image" src={image} alt={title} />
      </div>
      <div className="product__card">
        <h2 className="product__title">{title}</h2>
        <p className="product__description">{description}</p>
        <p className="product__price">Precio: {price} $</p>
        <p className="product__recipe">Receta: {recipe}</p>
        <button className="product__button">Comprar</button>
      </div>
    </div>
  );
};

export default CardProduct;
