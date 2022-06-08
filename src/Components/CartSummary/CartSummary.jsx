import { useProduct } from "../../Context/ProductContext/ProductContext";
import "./CartSummary.css";

export default function CartSummary() {
    const {
        productState: { cart },
    } = useProduct();
    const total = cart?.reduce((accum, current) => {
        return (accum += Number(current.price));
    }, 0);
    return (
        <div className="cart-summary-wrapper">
            <h2>Cart Summary</h2>
            <hr />
            <div>
                <h3>Items:</h3>
                <hr />
                {cart?.map((item) => {
                    return (
                        <div className="item" key={item.id}>
                            <h4>{item.title}</h4>
                            <div> X {item.qty}</div>
                        </div>
                    );
                })}
            </div>
            <div>
                <hr />
                <h3 className="item">
                    Total: <i className="fa-solid fa-indian-rupee-sign"></i> {total}
                </h3>
            </div>
        </div>
    );
}
