import "./Cart.css";
import { useProduct } from "../../Context/ProductContext/ProductContext";
import { CartCard, SaveLaterCard, CartSummary } from "../../Components";

export default function Cart() {
    const {
        productState: { cart, saveLater },
    } = useProduct();

    return (
        <div className="cart-wrapper">
            <div>
                <div className="cart-products-wrapper">
                    <h2>Cart {cart?.length ? cart.length : null}</h2>
                    {cart?.map((item) => {
                        return <CartCard key={item.id} product={item} />;
                    })}
                </div>
                <div className="save-later-wrapper">
                    <h2>{saveLater?.length ? `Save Later ${saveLater.length} ` : null}</h2>
                    {saveLater?.map((item) => {
                        return <SaveLaterCard key={item.id} product={item} />;
                    })}
                </div>
            </div>
            <CartSummary />
        </div>
    );
}
