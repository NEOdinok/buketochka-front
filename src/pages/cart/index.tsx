import { NextPage } from "next";
import styles from './styles.module.scss'
import Image from "next/image";
import CartCard from "@/comps/app/CartCard/CartCard";

const Cart: NextPage = () => {
	return (
		<div className={styles.cartPage}>
			<h1 className={styles.header}>Корзина</h1>
			<div className={styles.cardsContainer}>
				<CartCard />
				<CartCard />
			</div>
		</div>
	);
}
 
export default Cart;