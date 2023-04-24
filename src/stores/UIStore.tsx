import { makeAutoObservable } from "mobx";

class CartStore {
	isMenuOpen = false;
	isLoading = false;

	toggleMenuOpen = () => {
		this.isMenuOpen = !this.isMenuOpen;
	}

	constructor() {
    makeAutoObservable(this);
  }
}

export default new CartStore();