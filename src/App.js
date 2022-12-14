import "./App.css";
import menu from "./data";
import Product from "./components/Product";
import Header from "./components/Header";
import { useState } from "react";
import TopNav from "./components/TopNav";
import Cart from "./components/Cart";
import CartProvider from "./store/CartProvider";

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
        <Header CategoryFilter={CategoryFilter} />
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
