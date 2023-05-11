import styles from './styles.module.scss';
import Link from 'next/link';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { productType } from '@/types';
import CartStore from '@/stores/CartStore';
import { observer } from 'mobx-react-lite';
import { toggleIsProductInCart } from '@/utils/utilFunctions';

interface Props {
	id: string,
	pageType: string,
	page: string,
	product: productType, 
}

const ProductCard: React.FC<Props> = ({id, page, product, pageType}) => {

	return (
		 <Link className={styles.productCard} href={`/${pageType}/${page}/${id}`}>
			<div className={styles.imageSection}>
				<img 
					src={product.imagesData.filter(img => img.isMain === "true")[0].url}
					className={styles.cardImage}
					alt=""
				/>
			</div>
			<div className={styles.lowerSection}>
				<div className={styles.cardText}>
					<p className={styles.productName}>{product.name}</p>
					<span className={styles.productPrice}>{product.price} ₽</span>
				</div>

				<button
					className={cn(styles.cardBtn, CartStore.hasProduct(product.id)? styles.inCartBtn: '')}
					onClick={(e:React.MouseEvent<HTMLElement>) => toggleIsProductInCart(e, product)}
				>
					{
						CartStore.hasProduct(product.id)?
						<FontAwesomeIcon className={cn(styles.btnIcon, styles.inCartCheck)} icon={faCheck} />
						:
						<FontAwesomeIcon className={styles.btnIcon} icon={faShoppingCart} />
					}
				</button>

			</div>
		</Link>
	);
}
 
export default observer(ProductCard);