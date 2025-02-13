import "../App.css";
import contactImage from "../assets/contact.jpg";

export default function Contact() {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>

            <div className="contact-info">
                <p><strong>Address:</strong> Skoubogade 5-1, 1159 København</p>
                <p><strong>Phone:</strong> +45 12 56 78</p>
                <p><strong>Email:</strong> <a href="">support@dishdelights.com</a></p>
            </div>

            <div className="contact-image">
                <img src={contactImage} alt="Contact DishDelights" />
            </div>

            <div className="social-media">
                <h2>Follow Us</h2>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    Facebook
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    Instagram
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    Twitter
                </a>
            </div>
        </div>
    );
}
