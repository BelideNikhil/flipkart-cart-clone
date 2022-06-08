import { useProduct } from "../../Context/ProductContext/ProductContext";
import "./SaveLaterCard.css";

export default function SaveLaterCard({ product }) {
    const { productDispatch } = useProduct();
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
                <button
                    className="btn-primary"
                    onClick={() => productDispatch({ type: "MOVE_TO_CART", payload: { product } })}
                >
                    Move to Cart
                </button>
                <button
                    className="btn-secondary"
                    onClick={() => productDispatch({ type: "REMOVE_FROM_SAVE_LATER", payload: { product } })}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}
