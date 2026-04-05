import "./Flowercard.css";

function Flowercard({ product }) {
  return (
    <div className="flower-card">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p className="price">${product.price}</p>
    </div>
  );
}

export default Flowercard;