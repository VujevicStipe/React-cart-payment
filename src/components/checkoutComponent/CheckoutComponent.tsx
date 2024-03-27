import { useContext, useState } from "react";
import { calculateTotalPrice } from "../cartComponent/CartComponent.js";
import { ProductsContext } from "../../App.js";
import useFormData from "../../lib/UseFormData.js";
import doneIcon from '../../../public/assets/purchaseCompletedIcon.svg'
import "./CheckoutComponent.css";
import Modal from "react-modal";

const CheckoutComponent = () => {
  const {
    formData,
    setFormData,
    handleFormChange,
    checkValidation,
    validation,
    formSubmitted,
  } = useFormData();

  const { productsInfo } = useContext<any>(ProductsContext);
  const totalPrice = productsInfo
    ? calculateTotalPrice(productsInfo.articles)
    : 0;
  const shipmentPrice = 50.0;

  const [modal, setModal] = useState<any>({ isOpen: false, data: null });
  const [successModal, setSuccesModal] = useState<any>(false);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (checkValidation()) {
      const formDataModal = { ...formData };
      setModal({ isOpen: true, data: formDataModal });
      console.log(formData);
      console.log("submitted");
      setFormData({
        name: "",
        surname: "",
        email: "",
        street: "",
        streetNumber: "",
        city: "",
        country: "",
        cardName: "",
        cardNumber: "",
        cardExpireDate: "",
        cvv: "",
      });
    } else {
      console.log("nevalja");
    }
  };

  const closeModal = () => {
    setSuccesModal(false);
    setModal({ isOpen: false, data: {} });
  };

  return (
    <div className="checkout-component">
      <h1>Payment Details</h1>
      <form onSubmit={(e) => handleFormSubmit(e)} noValidate>
        <div>
          <span>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => handleFormChange(e)}
            />
            <h5 className="error">{formSubmitted && validation.name}</h5>
          </span>
          <span>
            <label htmlFor="surname">Surname</label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={(e) => handleFormChange(e)}
            />
            <h5 className="error">{formSubmitted && validation.surname}</h5>
          </span>
        </div>
        <span>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleFormChange(e)}
          />
          <h5 className="error">{formSubmitted && validation.email}</h5>
        </span>
        <div>
          <span>
            <label htmlFor="street">Street</label>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={(e) => handleFormChange(e)}
            />
            <h5 className="error">{formSubmitted && validation.street}</h5>
          </span>
          <span>
            <label htmlFor="streetNumber">Number</label>
            <input
              type="text"
              name="streetNumber"
              value={formData.streetNumber}
              onChange={(e) => handleFormChange(e)}
            />
            <h5 className="error">
              {formSubmitted && validation.streetNumber}
            </h5>
          </span>
        </div>
        <div>
          <span>
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={(e) => handleFormChange(e)}
            />
            <h5 className="error">{formSubmitted && validation.city}</h5>
          </span>
          <span>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={(e) => handleFormChange(e)}
            />
            <h5 className="error">{formSubmitted && validation.country}</h5>
          </span>
        </div>
        <div></div>
        <span>
          <label htmlFor="cardName">Card holder</label>
          <input
            type="text"
            name="cardName"
            value={formData.cardName}
            onChange={(e) => handleFormChange(e)}
          />
          <h5 className="error">{formSubmitted && validation.cardName}</h5>
        </span>
        <span>
          <label htmlFor="cardNumber">Credit card number</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={(e) => handleFormChange(e)}
            placeholder="0000-0000-0000-0000"
          />
          <h5 className="error">{formSubmitted && validation.cardNumber}</h5>
        </span>
        <div>
          <span>
            <label htmlFor="cardExpireDate">Expire date</label>
            <input
              type="text"
              name="cardExpireDate"
              value={formData.cardExpireDate}
              onChange={(e) => handleFormChange(e)}
              placeholder="MM/YY"
            />
            <h5 className="error">
              {formSubmitted && validation.cardExpireDate}
            </h5>
          </span>
          <span>
            <label htmlFor="cvv">CVC/CVV</label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={(e) => handleFormChange(e)}
              placeholder="CVC"
            />
            <h5 className="error">{formSubmitted && validation.cvv}</h5>
          </span>
        </div>
        <button type="submit">Process Order</button>
      </form>
      <Modal
        isOpen={modal.isOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
        appElement={document.getElementById("root") || undefined}
      >
        {successModal === "Success" ? (
          <div className="succes-modal">
            <img
              src={doneIcon}
              alt="purchaseCompleted"
            />
            <h1>Success</h1>
            <button onClick={closeModal}>Back to Shopping</button>
          </div>
        ) : (
          <div className="modal-content">
            <h2>Checkout</h2>
            {modal.data &&
              Object.keys(modal.data).map((key, index) => (
                <div key={index}>
                  <h3>{key}</h3>
                  <p>{modal.data[key]}</p>
                </div>
              ))}
            <hr />
            <h2>Total: {totalPrice + shipmentPrice}&euro;</h2>
            <button onClick={() => setSuccesModal("Success")}>
              Pay & Order
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default CheckoutComponent;
