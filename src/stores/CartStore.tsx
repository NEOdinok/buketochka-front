import { makeAutoObservable } from "mobx";
import { productType } from "@/types";

class CartStore {
  products: Array<productType> = [];

  addProduct = (value: productType) => {
    this.products.push(value);
    this.incrementCartAmountOf(value.id);
  }

  incrementCartAmountOf = (id: string) => {
    // this.products.filter(product => product.id === id)[0].cartAmount++;
    this.getProductById(id).cartAmount++;
  }

  count = () => {
    if (this.products.length) {
      return this.products.reduce((acc, obj) => (acc + obj.cartAmount), 0);
    } else {
      return  0;
    }
  }

  totalPrice = () => {
    if (this.products.length) {
      return this.products.reduce((acc, obj) => (
        acc + obj.price * obj.cartAmount
      ), 0);
    } else {
      return 0;
    }
  }

  hasProduct = (id: string) => {
    return this.products.filter(product => product.id === id).length > 0
  }

  amountOf = (id: string) => {
    if (this.hasProduct(id)) {
      return this.getProductById(id).cartAmount;
    } else {
      return 0;
    }
  }

  getProductById = (id: string) => {
    return this.products.filter(product => product.id === id)[0];
  }

  removeProduct = (id: string) => {
    if (!this.getProductById(id)) {
      return;
    }
    this.products = this.products.filter(product => product.id !== id);
  }

  decrementUntilRemove = (id: string) => {
    if (!this.hasProduct(id)) {
      return;
    } else if (this.getProductById(id).cartAmount < 2) {
      this.removeProduct(id)
      return
    }
    this.products.filter(product => product.id === id)[0].cartAmount--;
  }

	constructor() {
    makeAutoObservable(this);
  }

}

export default new CartStore();