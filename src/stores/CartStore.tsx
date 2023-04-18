import { makeAutoObservable } from "mobx";
import type { product } from "@/types";

class CartStore {
	products: product[] = []

	addProduct = (value: product) => {
    this.products.push(value)
    this.add(value.id)
  }

  getProductById = (id: number) => {
    return this.products.filter(x => x.id === id)
  }

  removeProduct = (id: number) => {
    if (this.getProductById(id) === undefined) {
      return
    }
    this.products = this.products.filter(x => x.id !== id)
  }

  hasProduct = (id: number) => {
    return this.products.filter(x => x.id === id).length > 0
  }

  amountOf = (id: number) => {
    if (this.hasProduct(id)) {
      return this.products[ id ].amount
    } else {
      return 0
    }

  }

  count = () => {
    return this.products.length
  }

  add = (id: number) => {
    this.products.filter(x => x.id === id)[ 0 ].amount++
  }

  remove = (id: number) => {
    if (!this.hasProduct(id)) {
      return
    }
    if (this.getProductById(id)[0].amount < 2) {
      this.removeProduct(id)
      return
    }
    this.products.filter(x => x.id === id)[ 0 ].amount--
  }

  sum = () => {
    let sum = 0;
    this.products.forEach(element => {
      sum += parseInt(element.price) * element.amount
    });
    return sum
  }

	constructor() {
    makeAutoObservable(this)
  }
}

export default new CartStore();