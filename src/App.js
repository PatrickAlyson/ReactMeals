import "./App.css";
import menu from "./data";
import Product from "./components/Product";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState(menu);

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
    <div className="main">
      <Header CategoryFilter={CategoryFilter} />
      <main className="content">
        {products.map((product) => {
          return <Product props={product} key={product.id} />;
        })}
      </main>
    </div>
  );
}

export default App;
