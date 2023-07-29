import styles from './styles.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { productType, imagesDataType } from '@/types';
import { useEffect } from 'react';
import CartStore from '@/stores/CartStore';
import { observer } from 'mobx-react-lite';

interface Props {
	product: productType,
}

const CartCard: React.FC<Props> = ({ product }) => {
	const placeholderImg = "https://firebasestorage.googleapis.com/v0/b/buketochka-quasar-backend.appspot.com/o/images%2Fb467ea5a-4538-4b9b-b0e0-9f1c8ae6f3b5.jpg?alt=media&token=91c2ff69-ed08-45db-a945-61e6dfdf58b7"

	return (
		<div className={styles.cartCard}>
			<div className={styles.imageSection}>
				<img
					src={product.imagesData.filter(img => img.isMain === true)[0].url}
					className={styles.mainImg} alt="No image.. :("
				/>
			</div>

			<div className={styles.infoSection}>
				<h1 className={styles.productName}>{product.name}</h1>
				<h1 className={styles.productPrice}>{product.price} ₽</h1>

				<div className={styles.amountSelector}>
					<button className={styles.amountBtn}
						onClick={
              CartStore.amountOf(product.id) > 0 ?
              () => { CartStore.incrementCartAmountOf(product.id) }
              :
              () => { CartStore.addProduct(product) }
            }
					>
						<FontAwesomeIcon className={styles.btnIcon} icon={faPlus}/>
					</button>

					<span className={styles.amount}>
						{ CartStore.amountOf(product.id) }
					</span>

					<button className={styles.amountBtn}
						onClick={ () => CartStore.decrementUntilRemove(product.id) }
					>
						<FontAwesomeIcon className={styles.btnIcon} icon={faMinus}/>
					</button>
					<button className={styles.cartBtn}
						onClick={() => CartStore.removeProduct(product.id)}
					>
						Удалить
					</button>
				</div>
			</div>
		</div>
	);
}
 
export default observer(CartCard);