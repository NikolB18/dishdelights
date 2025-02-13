import "../App.css";
import bakingImage from "../assets/baking.jpg";
import bookImage from "../assets/book.jpg";

export default function About() {
  return (
    <div className="about-container">
      {/* Intro Section */}
      <h1>About DishDelights</h1>
      <p className="about-description">
        Welcome to <strong>DishDelights</strong>, your go-to platform for discovering and sharing amazing baking recipes. Whether you're a seasoned baker or just starting out, our goal is to inspire your creativity and make baking enjoyable for everyone.
      </p>

      {/* Images and Text Section */}
      <div className="about-content">
        <div className="about-section">
          <img src={bakingImage} alt="Baking" className="about-image" />
          <p>
            At DishDelights, we provide a wide variety of carefully curated baking recipes. From classic cakes and cookies to artisan breads and pies, you'll find something for every occasion and every skill level. Our step-by-step instructions make it easy to follow along and create something truly delicious.
          </p>
        </div>

        <div className="about-section reverse">
          <img src={bookImage} alt="Book recipes" className="about-image" />
          <p>
            We also believe in the power of sharing. That's why DishDelights allows you to add your own favorite recipes to the platform. Share your baking secrets and inspire others with your unique creations, turning our website into a community-driven hub of baking excellence.
          </p>
        </div>
      </div>
    </div>
  );
}
