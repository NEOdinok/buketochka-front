import { makeAutoObservable } from "mobx";

class CheckoutStore {
  valid: boolean = false;
  phone: string = '';
  email: string = '';
  name: string = '';
  additionalData: string = '';
  contactOption: string = '';
  date: string = '';
  additionalAddress: string = '';
  shippingOption: string = '';

	constructor() {
    makeAutoObservable(this)
  }

}

export default new CheckoutStore();