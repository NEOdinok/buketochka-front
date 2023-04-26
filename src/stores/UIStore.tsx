import { makeAutoObservable } from "mobx";

class CartStore {
	isMenuOpen = false;
	isLoading = false;

	toggleMenuOpen = () => {
		this.isMenuOpen = !this.isMenuOpen;
	}

	toggleIsLoading= () => {
		this.isLoading = !this.isLoading;
	}

	constructor() {
    makeAutoObservable(this);
  }
}

export default new CartStore();