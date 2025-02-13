import heroImage from "../assets/hero.jpg";
import croissantImage from "../assets/croissant.jpg";
import muffinsImage from "../assets/muffins.jpg";
import cookiesImage from "../assets/cookies.jpg";
import "../App.css";

export default function Home() {
    return (
      <div className="home-container">
        {/* Hero Section */}
        <div className="hero-section">
          <img src={heroImage} alt="Cinnamon rolls" className="hero-image" />
          <div className="overlay">
            <h1>Welcome to DishDelights!</h1>
          </div>
        </div>
  
        {/* Centered Text */}
        <div className="centered-text">
          <p>
            Discover a world of flavors and bring the joy of cooking to your home.
            Explore hundreds of recipes tailored to every taste and occasion!
          </p>
        </div>
  
        {/* Image Gallery */}
        <div className="image-gallery">
          <div className="image-row">
            <img src={croissantImage} alt="Croissants" />
            <img src={muffinsImage} alt="Muffins" />
            <img src={cookiesImage} alt="Cookies" />
          </div>
        </div>
  
        {/* Eye-Catching Call to Action Section */}
        <div className="call-to-action">
            <h2>Don't Let the Deliciousness Stop Here!</h2>
            <p>
            We’ve got thousands of recipes waiting for you to try. Whether you're looking 
            for a quick dinner or planning a gourmet meal, we’ve got something for everyone.
            </p>
        </div>
      </div>
    );
  }