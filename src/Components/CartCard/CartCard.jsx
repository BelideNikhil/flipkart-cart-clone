import "./CartCard.css";
import { useProduct } from "../../Context/ProductContext/ProductContext";

export default function CartCard({ product }) {
    const { productDispatch } = useProduct();
    return (
        <div>
            <div className="cart-card">
                <div className="card-image">
                    <img src={product.imgUrl} alt={product.title} />
                </div>
                <div className="card-content">
                    <div className="card-body">
                        <h3>{product.title}</h3>
                        <h4>
                            <i className="fas fa-rupee-sign"></i>
                            {product.price}
                        </h4>
                    </div>
                    <div>
                        <div className="card-qty">
                            {product.qty === 1 ? (
                                <button
                                    onClick={() => productDispatch({ type: "REMOVE_FROM_CART", payload: { product } })}
                                >
                                    <i className="fas fa-minus"></i>
                                </button>
                            ) : (
                                <button onClick={() => productDispatch({ type: "DECREASE_QTY", payload: { product } })}>
                                    <i className="fas fa-minus"></i>
                                </button>
                            )}
                            <h3>{product.qty}</h3>
                            <button onClick={() => productDispatch({ type: "INCREASE_QTY", payload: { product } })}>
                                <i className="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                    <div className="card-actions">
                        <button
                            className="btn-primary"
                            onClick={() => productDispatch({ type: "SET_SAVE_FOR_LATER", payload: { product } })}
                        >
                            Save For Later
                        </button>
                        <button
                            className="btn-secondary"
                            onClick={() => productDispatch({ type: "REMOVE_FROM_CART", payload: { product } })}
                        >
                            Remove to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
