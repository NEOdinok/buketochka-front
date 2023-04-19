import { makeAutoObservable } from "mobx";

class CartStore {
	isMenuOpen = false;

	toggleMenuOpen = () => {
		this.isMenuOpen = !this.isMenuOpen;
	}

	constructor() {
    makeAutoObservable(this);
  }
}

export default new CartStore();