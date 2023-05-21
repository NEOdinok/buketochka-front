import { NextPage } from "next";
import styles from './styles.module.scss';

const Thanks: NextPage = () => {
	return (
		<div className={styles.wrap}>
			<span className={styles.thanksText}>Спасибо за заказ! 🍓</span>
		</div>
	);
}
 
export default Thanks;