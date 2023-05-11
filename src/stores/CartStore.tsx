import { makeAutoObservable } from "mobx";
import { productType } from "@/types";

class CartStore {
  products: Array<productType> = [];

  addProduct = (value: productType) => {
    this.products.push(value);
    this.incrementCartAmountOf(value.id);
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  incrementCartAmountOf = (id: string) => {
    this.getProductById(id).cartAmount++;
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  count = () => {
    if (this.products.length) {
      return this.products.reduce((acc, obj) => (acc + obj.cartAmount), 0);
    } else {
      return  0;
    }
  }

  isEmpty = () => {
    if (this.count() == 0) return true;
    else return false;
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
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  decrementUntilRemove = (id: string) => {
    if (!this.hasProduct(id)) {
      return;
    } else if (this.getProductById(id).cartAmount < 2) {
      this.removeProduct(id)
      return
    }
    this.products.filter(product => product.id === id)[0].cartAmount--;
    localStorage.setItem('products', JSON.stringify(this.products));
  }

	constructor() {
    makeAutoObservable(this);
  }

}

export default new CartStore();