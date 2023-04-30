import { makeAutoObservable } from "mobx";
import { productType } from "@/types";

class CartStore {
  products: Array<productType> = [];

  addProduct = (value: productType) => {
    this.products.push(value);
    this.incrementCartAmountOf(value.id);
  }

  incrementCartAmountOf = (id: string) => {
    this.products.filter(product => product.id === id)[0].cartAmount++;
  }

  count = () => {
    return this.products.length;
  }

	constructor() {
    makeAutoObservable(this);
  }

}

export default new CartStore();