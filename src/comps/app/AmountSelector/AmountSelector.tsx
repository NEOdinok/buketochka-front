import styles from './styles.module.scss';
import CartStore from '@/stores/CartStore';
import { productType } from '@/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { toggleIsProductInCart } from '@/utils/utilFunctions';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';

interface Props {
  product: productType;
}

const AmountSelector: React.FC<Props> = ({ product }) => {
	return (
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
				{CartStore.amountOf(product.id)}
			</span>

			<button className={styles.amountBtn}
				onClick={ () => CartStore.decrementUntilRemove(product.id) }
			>
				<FontAwesomeIcon className={styles.btnIcon} icon={faMinus}/>
			</button>

			<button
				className={cn(styles.cartBtn, CartStore.hasProduct(product.id)? styles.redBtn: styles.greenBtn)}
				onClick={(e) => toggleIsProductInCart(e, product)}
			>
				{/* В корзину */ CartStore.hasProduct(product.id)? 'Удалить': 'В корзину'}
			</button>
		</div>
	);
}
 
export default observer(AmountSelector);