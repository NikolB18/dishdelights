import { Link } from "react-router-dom";
import '../App.css';

export default function Header() {
    return (
        <header className="header-container">
            <nav className="navigation">
                <p>
                    <Link className="linktext" to="">Home</Link>
                </p>
                <p>
                    <Link className="linktext" to="about">About</Link>
                </p>
                <p>
                    <Link className="linktext" to="dishdelights">DishDelights Recipes</Link>
                </p>
                <p>
                    <Link className="linktext" to="personalfavourite">Personal Favorite Recipe</Link>
                </p>
                <p>
                    <Link className="linktext" to="contact">Contact</Link>
                </p>
            </nav>
        </header>
    );
}