import styles from './styles.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

interface Props {

}

const CartCard = () => {
	const placeholderImg = "https://firebasestorage.googleapis.com/v0/b/buketochka-quasar-backend.appspot.com/o/images%2Fb467ea5a-4538-4b9b-b0e0-9f1c8ae6f3b5.jpg?alt=media&token=91c2ff69-ed08-45db-a945-61e6dfdf58b7"
	return (
		<div className={styles.cartCard}>
			<div className={styles.imageSection}>
				<img src={placeholderImg} className={styles.mainImg} alt="no image" />
			</div>

			<div className={styles.infoSection}>
				<h1 className={styles.productName}>Test Name</h1>
				<h1 className={styles.productPrice}>1050 ₽</h1>

				<div className={styles.amountSelector}>
					<button className={styles.amountBtn}>
						<FontAwesomeIcon className={styles.btnIcon} icon={faPlus}/>
					</button>
					<span className={styles.amount}>2</span>
					<button className={styles.amountBtn}>
						<FontAwesomeIcon className={styles.btnIcon} icon={faMinus}/>
					</button>
					<button className={styles.cartBtn}>
						Удалить
					</button>
				</div>
			</div>
		</div>
	);
}
 
export default CartCard;