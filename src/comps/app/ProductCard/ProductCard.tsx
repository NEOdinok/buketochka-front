import styles from './styles.module.scss';
import cn from 'classnames';
import cardImage from 'public/img/product.jpg';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface Props {
	test?: boolean,
}

const ProductCard: React.FC<Props> = ({ test }) => {
	return (
		 <div className={styles.productCard}>
			<div className={styles.imageSection}>
				<Image src={cardImage} className={styles.cardImage} alt="" />
			</div>
			<div className={styles.lowerSection}>
				<div className={styles.cardText}>
					<p className={styles.productName}>Набор из 16</p>
					<span className={styles.productPrice}>990 ₽</span>
				</div>
				<button className={styles.cardBtn}>
					<FontAwesomeIcon className={styles.btnIcon} icon={faShoppingCart}/>
				</button>
			</div>
		</div>
	);
}
 
export default ProductCard;