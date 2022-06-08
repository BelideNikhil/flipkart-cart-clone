import "./Navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const naviagate = useNavigate();
    return (
        <header className="navbar-wrapper">
            <h2
                role="button"
                onClick={() => {
                    naviagate("/");
                }}
            >
                Flipkart
            </h2>
            <nav>
                <button
                    className="add-to-cart-btn"
                    onClick={() => {
                        naviagate("/cart");
                    }}
                >
                    <i className="fas fa-shopping-cart"></i>
                </button>
            </nav>
        </header>
    );
}
