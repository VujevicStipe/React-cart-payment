import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import ProductPaymentComponent from "./components/productPaymentComponent/ProductPaymentComponent";
import productsContext from "./lib/Products.json";

export const ProductsContext = createContext<any>(null);

const App: React.FC = () => {
  const [productsInfo, setProductsInfo] = useState<any>(null);

  useEffect(() => {
    setProductsInfo(productsContext);
  }, []);

  return (
    <div className="app">
      <ProductsContext.Provider value={{ productsInfo }}>
        <ProductPaymentComponent />
      </ProductsContext.Provider>
    </div>
  );
};

export default App;
