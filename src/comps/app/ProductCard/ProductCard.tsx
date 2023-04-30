import styles from './styles.module.scss';
import Link from 'next/link';
import cn from 'classnames';
import cardImage from 'public/img/product.jpg';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { productType } from '@/types';

interface Props {
	name: string,
	price: number,
	id: string,
	page: string,
	product: productType, 
}

const ProductCard: React.FC<Props> = ({ name, price, id, page, product}) => {
	return (
		 <Link className={styles.productCard} href={`/${page}/${id}`}>
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
				<button className={styles.cardBtn}>
					<FontAwesomeIcon className={styles.btnIcon} icon={faShoppingCart}/>
				</button>
			</div>
		</Link>
	);
}
 
export default ProductCard;