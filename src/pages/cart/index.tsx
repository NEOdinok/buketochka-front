import { NextPage } from "next";
import styles from './styles.module.scss'
import Image from "next/image";
import CartCard from "@/comps/app/CartCard/CartCard";
import CartStore from "@/stores/CartStore";
import { observer } from "mobx-react-lite";
import ToCheckoutBtn from "@/comps/app/ToCheckoutBtn/ToCheckoutBtn";

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
		<>
			<div className={styles.cartPage}>
				<h1 className={styles.header}>Корзина</h1>
				<div className={styles.cardsContainer}>
					{ renderCartCards() }
				</div>

				{CartStore.count() > 0 && 
					<ToCheckoutBtn
						header='Итого:'
						main={`${+CartStore.totalPrice()} ₽`}
					/>
				}
			</div>
		</>
	);
}
 
export default observer(Cart);