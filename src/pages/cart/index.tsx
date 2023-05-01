import { NextPage } from "next";
import styles from './styles.module.scss'
import Image from "next/image";
import CartCard from "@/comps/app/CartCard/CartCard";
import CartStore from "@/stores/CartStore";
import { observer } from "mobx-react-lite";

const renderCartCards = () => (
	CartStore.products.map(product =>
		<CartCard
			product={product}
			key={product.id}
		/>
	)
)

const Cart: NextPage = () => {
	return (
		<div className={styles.cartPage}>
			<h1 className={styles.header}>Корзина</h1>
			<div className={styles.cardsContainer}>
				{ renderCartCards() }
			</div>
		</div>
	);
}
 
export default observer(Cart);