
import "./Home.css";
import Bodyconatiner from "../../components/Bodycontainer/Bodycontainer";
import Flowercard from "../../components/Flowercard/Flowercard";
import PRODUCTS from "./../../config";
import PageTitle from "../../components/PageTitle/PageTitle";

function Card({ title, description, price, image }) {
  return (
    <div className="flower-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p className="price">${price}</p>
    </div>
  );
}

function Home() {
  return (
    <div className="home">

      <PageTitle title="🌸 Flower & Bouquet Shop 🌸" />

      <Bodyconatiner>
        <div className="grid">
          {PRODUCTS.map((product) => (
            <Flowercard product={product} key={product.id} />
          ))}
        </div>
      </Bodyconatiner>

    </div>
  );
}

export default Home;