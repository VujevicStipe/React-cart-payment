import { useState } from "react";

interface FormData {
  name: string;
  surname: string;
  email: string;
  street: string;
  streetNumber: string;
  city: string;
  country: string;
  cardName: string;
  cardNumber: string;
  cardExpireDate: string;
  cvv: string;
}

const useFormData = () => {
  const [formData, setFormData] = useState<FormData>({
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

  const [validation, setValidation] = useState<FormData>({
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

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormSubmitted(false);
  };

  const checkValidation = () => {
    let isValid = true;
    let errors = validation

    if (!formData.name.trim()) {
      errors.name = "First name is required";
      isValid = false;
    } else {
      errors.name = ""
    }
    if (!formData.surname.trim()) {
      errors.surname = "Last Name is required";
      isValid = false;
    } else {
      errors.surname = ""
    }
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!formData.email.match(emailRegex)) {
      errors.email = "Please enter a valid email adress";
      isValid = false;
    } else {
      errors.email = "";
    }
    if (!formData.street.trim()) {
      errors.street = "Street is required";
      isValid = false;
    } else {
      errors.street = ""
    }
    if (!formData.streetNumber.trim()) {
      errors.streetNumber = "Street number is required";
      isValid = false;
    } else if (isNaN(parseInt(formData.streetNumber.trim(), 10))) {
      errors.streetNumber = "Need to enter a number";
      isValid = false;
    } else {
      errors.streetNumber = "";
    }
    if (!formData.city.trim()) {
      errors.city = "City is required";
      isValid = false;
    } else {
      errors.city = ""
    }
    if (!formData.city.trim()) {
      errors.country = "Country is required";
      isValid = false;
    } else {
      errors.country = ""
    }
    if (!formData.cardName.trim()) {
      errors.cardName = "Card name is required";
      isValid = false;
    } else {
      errors.cardName = ""
    }
    const cardNumberRegex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    if (!formData.cardNumber.trim()) {
      errors.cardNumber = "Card number is required";
      isValid = false;
    } else if (!formData.cardNumber.match(cardNumberRegex)) {
      errors.cardNumber = "Please enter a valid format";
      isValid = false;
    } else {
      errors.cardNumber = "";
    }
    const cardExpireDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!formData.cardExpireDate.trim()) {
      errors.cardExpireDate = "Expire date is required";
      isValid = false;
    } else if (!formData.cardExpireDate.match(cardExpireDateRegex)) {
      errors.cardExpireDate = "Please enter a valid format";
      isValid = false;
    } else {
      errors.cardExpireDate = "";
    }
    const cvvRegex = /^\d{3}$/;
    if (!formData.cvv.trim()) {
      errors.cvv = "CVV is required";
      isValid = false;
    } else if (!formData.cvv.match(cvvRegex)) {
      errors.cvv = "Please enter a valid format";
      isValid = false;
    } else {
      errors.cvv = "";
    }

    setFormSubmitted(true);
    console.log(errors);
    return isValid;
  };

  return {
    formData,
    setFormData,
    handleFormChange,
    checkValidation,
    validation,
    formSubmitted,
  };
};

export default useFormData;
