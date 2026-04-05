import "./About.css";
import PageTitle from "../../components/PageTitle/PageTitle";

function About() {
  return (
    <div className="about">

      <PageTitle title="About Us 🌸" subtitle="Welcome to our Flower & Bouquet Shop 💐  
        We deliver fresh flowers with love and care — blooming happiness every day!" />

      <div className="about-grid">

        <div className="about-card">
          <div className="about-icon">🌷</div>
          <h3>Fresh Flowers</h3>
          <p>We provide high-quality and fresh flowers every morning.</p>
        </div>

        <div className="about-card">
          <div className="about-icon">🚚</div>
          <h3>Fast Delivery</h3>
          <p>Quick and safe doorstep delivery with live tracking.</p>
        </div>

        <div className="about-card">
          <div className="about-icon">🎁</div>
          <h3>Custom Bouquets</h3>
          <p>Create your own bouquet with our customization feature.</p>
        </div>

        <div className="about-card">
          <div className="about-icon">💖</div>
          <h3>Love & Care</h3>
          <p>Every order is packed with care and handled with love.</p>
        </div>

      </div>

    </div>
  );
}

export default About;