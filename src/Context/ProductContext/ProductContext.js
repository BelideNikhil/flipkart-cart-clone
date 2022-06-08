import data from "../../data/data.json";
import { useContext, createContext, useReducer } from "react";

const ProductContext = createContext();

const initialState = {
    products: data,
    cart: [],
    saveLater: [],
};

function productReducer(state, { type, payload }) {
    switch (type) {
        case "ADD_TO_CART":
            return { ...state, cart: [...state.cart, { ...payload.product, qty: 1 }] };
        case "REMOVE_FROM_CART":
            return { ...state, cart: state.cart.filter((item) => item.id !== payload.product.id) };
        case "INCREASE_QTY":
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === payload.product.id ? { ...item, qty: item.qty + 1 } : item
                ),
            };
        case "DECREASE_QTY":
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === payload.product.id ? { ...item, qty: item.qty - 1 } : item
                ),
            };
        case "SET_SAVE_FOR_LATER":
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== payload.product.id),
                saveLater: [...state.saveLater, payload.product],
            };
        case "REMOVE_FROM_SAVE_LATER":
            return {
                ...state,
                saveLater: state.saveLater.filter((item) => item.id !== payload.product.id),
            };
        case "MOVE_TO_CART":
            return {
                ...state,
                saveLater: state.saveLater.filter((item) => item.id !== payload.product.id),
                cart: [...state.cart, { ...payload.product, qty: 1 }],
            };
        default:
            return state;
    }
}

function ProductProvider({ children }) {
    const [productState, productDispatch] = useReducer(productReducer, initialState);
    return <ProductContext.Provider value={{ productState, productDispatch }}>{children}</ProductContext.Provider>;
}

function useProduct() {
    return useContext(ProductContext);
}

export { ProductProvider, useProduct };
