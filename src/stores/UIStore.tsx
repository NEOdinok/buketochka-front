import { makeAutoObservable } from "mobx";

class CartStore {
	isMenuOpen = false;
	isLoading = true;

	setMenuClosed = () => {
		this.isMenuOpen = false;
	}

	toggleMenuOpen = () => {
		this.isMenuOpen = !this.isMenuOpen;
	}

	toggleIsLoading = () => {
		this.isLoading = !this.isLoading;
	}

	constructor() {
    makeAutoObservable(this);
  }
}

export default new CartStore();