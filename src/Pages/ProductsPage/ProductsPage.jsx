import "./ProductsPage.css";

import { useProduct } from "../../Context/ProductContext/ProductContext";
import ProductCard from "../../Components/ProductCard/ProductCard";

export default function Products() {
    const {
        productState: { products },
    } = useProduct();

    return (
        <div className="products-wrapper">
            {products?.map((product) => {
                return <ProductCard product={product} key={product.id} />;
            })}
        </div>
    );
}
