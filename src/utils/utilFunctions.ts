import { productType } from "@/types";
import { SyntheticEvent } from "react";
import CartStore from "@/stores/CartStore";

const capitalizeFirstLetter = (string: string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

const toggleIsProductInCart = (e: SyntheticEvent, product: productType) => {
	e.preventDefault();
	if (CartStore.hasProduct(product.id)) {
		CartStore.removeProduct(product.id);
	} else {
		CartStore.addProduct(product as productType);
	}
}

export {
	capitalizeFirstLetter,
	toggleIsProductInCart,
}