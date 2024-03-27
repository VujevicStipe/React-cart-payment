import React, { useContext } from "react";
import { ProductsContext } from "../../App";
import cartBackgroundImg from '../../../public/assets/cart-bg.jpg'
import "./CartComponent.css";

interface ProductProps {
  id: number;
  name: string;
  price: number;
}

export const calculateTotalPrice = (
  productsInfo: ProductProps[] | undefined
): number => {
  return (
    productsInfo?.reduce((accumulator: number, currentItem: ProductProps) => {
      return accumulator + currentItem.price;
    }, 0) ?? 0
  );
};

const CartComponent: React.FC = () => {
  const { productsInfo } = useContext<any>(ProductsContext);
  if(!Array.isArray(productsInfo?.articles)) {
    console.log("nije niz")
  } else {
    console.log("niz")
  }
  const totalPrice = productsInfo ? calculateTotalPrice(productsInfo.articles) : 0;
  console.log(totalPrice);
  const shipmentPrice = 50.0;
  return (
    <div className="cart-component">
      <div className="cart-products">
        <h1>Your Cart</h1>
        <h4>Take a closer look of your items</h4>
        <hr />
        {productsInfo && productsInfo.articles?.map((item: ProductProps, index: number) => (
          <li key={index}>
            <span>{item.name}</span>
            <span>{item.price}&euro;</span>
          </li>
        ))}
      </div>
      <div className="cart-total">
        <h3>
          <span>Subtotal:</span> <span>{totalPrice}&euro;</span>
        </h3>
        <h3>
          <span>Shipment:</span> <span>{shipmentPrice}&euro;</span>
        </h3>
        <hr />
        <h2>
          <span>Total:</span> <span>{totalPrice + shipmentPrice}&euro;</span>
        </h2>
      </div>
      <img src={cartBackgroundImg} alt="cart-bg" />
    </div>
  );
};

export default CartComponent;
