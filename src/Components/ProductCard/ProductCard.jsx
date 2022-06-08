import { useNavigate } from "react-router-dom";
import { useProduct } from "../../Context/ProductContext/ProductContext";
import "./ProductCard.css";

export default function ProductCard({ product }) {
    const {
        productDispatch,
        productState: { cart },
    } = useProduct();
    const navigate = useNavigate();

    const foundInCart = cart?.find((item) => item.id === product.id);
    return (
        <div className="card">
            <div className="card-image">
                <img src={product.imgUrl} alt={product.title} />
            </div>
            <div className="card-body">
                <h3>{product.title}</h3>
                <h4>
                    <i className="fas fa-rupee-sign"></i>
                    {product.price}
                </h4>
            </div>
            <div className="card-actions">
                {foundInCart ? (
                    <button className="btn-primary" onClick={() => navigate("/cart")}>
                        Go to Cart
                    </button>
                ) : (
                    <button
                        className="btn-primary"
                        onClick={() => productDispatch({ type: "ADD_TO_CART", payload: { product } })}
                    >
                        Add to Cart
                    </button>
                )}
            </div>
        </div>
    );
}
