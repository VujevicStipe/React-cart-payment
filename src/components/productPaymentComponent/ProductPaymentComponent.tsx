import CartComponent from "../cartComponent/CartComponent";
import CheckoutComponent from "../checkoutComponent/CheckoutComponent";
import './ProductPaymentComponent.css'

const ProductPaymentComponent = () => {

  return (
    <div className="product-payment-component">
      <CartComponent />
      <CheckoutComponent />
    </div>
  );
};

export default ProductPaymentComponent;
