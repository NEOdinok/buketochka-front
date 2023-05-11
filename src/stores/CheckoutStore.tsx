import { makeAutoObservable } from "mobx";

class CheckoutStore {
  phone: string = '';

  isFormValid: boolean = true;
  isPhoneValid: boolean = true;
  isEmailValid: boolean= true;
  isNameValid: boolean = true;
  isContactChoosen: boolean = true;
  isDeliveryDateChoosen: boolean = true;
  isShippingOptionChoosen: boolean = true;
  isAdditionalDeliveryEntered: boolean = true;


  // this.isEmailValid &&
  // this.isNameValid &&
  // this.isContactChoosen &&
  // this.isDeliveryDateChoosen &&
  // this.isShippingOptionChoosen &&
  // this.isAdditionalDeliveryEntered

  validateForm = () => {
    if (
      this.isPhoneValid
    ) {
      this.isFormValid = true;
    } else {
      this.isFormValid = false;
    }
  };

  validatePhone = () => {
    if (this.phone.length == 16) this.isPhoneValid = true;
  } 

	constructor() {
    makeAutoObservable(this)
  }

}

export default new CheckoutStore();