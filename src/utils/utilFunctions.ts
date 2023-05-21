import { productType, FormValuesType } from "@/types";
import { SyntheticEvent } from "react";
import CartStore from "@/stores/CartStore";
import axios from "axios";

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

const sendOrderToTelegam = async (values: FormValuesType) => {
	try {
		const number = 5;
		const message = encodeURI(`

		Новый заказ! 🍓

		👤 Получатель:
		Имя: ${values.name}
		Почта: ${values.email}
		Телефон: ${values.phone}
		Просит связаться через: ${values.contactOption}
		Дополнительно: ${values.additional}

		🚚 Доствка:
		Способ получения: ${values.deliveryOption}
		Дата: ${values.deliveryDate}
		Время: ${values.deliveryTime}
		Дополнительно: ${values.deliveryAdditional}
		`)
		const res = axios.get(`
			https://api.telegram.org
			/bot${process.env.NEXT_PUBLIC_BUKETOCHKA_BOT_TOKEN}
			/sendMessage?chat_id=${process.env.NEXT_PUBLIC_BUKETOCHKA_ORDERS_CHANNEL_ID}
			&parse_mode=html
			&text=${message}`
		);
	} catch (error) {
		console.warn({ error });
	}
}

export {
	capitalizeFirstLetter,
	toggleIsProductInCart,
	sendOrderToTelegam,
}