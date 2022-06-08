import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components";
import { Products, Cart } from "./Pages";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    );
}

export default App;
