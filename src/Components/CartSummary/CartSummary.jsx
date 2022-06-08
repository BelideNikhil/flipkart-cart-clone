import { useProduct } from "../../Context/ProductContext/ProductContext";
import "./CartSummary.css";

export default function CartSummary() {
    const {
        productState: { cart },
    } = useProduct();
    const priceDetails = cart?.reduce(
        (accum, current) => {
            return {
                ...accum,
                actualPrice: accum.actualPrice + Number(current.actualPrice),
                discountedPrice: accum.discountedPrice + Number(current.price),
            };
        },
        { actualPrice: 0, discountedPrice: 0 }
    );

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
                    <span>Actual Price:</span>
                    <span>
                        <i className="fas fa-rupee-sign"></i>
                        {priceDetails.actualPrice}
                    </span>
                </h3>
            </div>
            <div>
                <hr />
                <h3 className="item">
                    <span>Total Discount:</span>
                    <span>
                        <i className="fas fa-rupee-sign"></i>
                        {priceDetails.actualPrice - priceDetails.discountedPrice}
                    </span>
                </h3>
            </div>
            <div>
                <hr />
                <h3 className="item">
                    <span>Total:</span>
                    <span>
                        <i className="fas fa-rupee-sign"></i>
                        {priceDetails.discountedPrice}
                    </span>
                </h3>
            </div>
        </div>
    );
}
