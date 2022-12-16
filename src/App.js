import React, { useState } from "react";
// Components
import Product from "./components/Product";
import Header from "./components/Header";
import TopNav from "./components/TopNav";
import Cart from "./components/Cart";
import CartProvider from "./store/CartProvider";
// css, data
import menu from "./data";
import "./App.css";

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

function App() {
  const [products, setProducts] = useState(menu);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showCloseModal = () => {
    setIsModalVisible((prevIsModalVisible) => !prevIsModalVisible);
  };

  const CategoryFilter = (categoria) => {
    if (categoria === "all") {
      setProducts(menu);
    } else {
      const newProducts = menu.filter((product) => {
        return product.category === categoria;
      });
      setProducts(newProducts);
    }
  };

  return (
    <CartProvider>
      <div className="main">
        {isModalVisible && <Cart onShow={showCloseModal} />}
        <TopNav modal={showCloseModal} />
        <Header CategoryFilter={CategoryFilter} categories={allCategories} />
        <main className="content">
          {products.map((product) => {
            return <Product props={product} key={product.id} />;
          })}
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
