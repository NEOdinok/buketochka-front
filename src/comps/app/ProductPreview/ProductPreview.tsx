import styles from './styles.module.scss';
import cn from 'classnames';          
import { NextPage } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { productType } from '@/types';
import CartStore from '@/stores/CartStore';
import { toggleIsProductInCart } from '@/utils/utilFunctions';
import AmountSelector from '../AmountSelector/AmountSelector';

interface productProps {
  product: productType;
}

const Set: NextPage<productProps> = ({ product }) => {
  const [mainImg, setMainImg] = useState(product.imagesData.filter(img => img.isMain === "true")[0].url);

	return (
    <div className={styles.productPreview}>

      <div className={styles.carouselSection}>
        <div className={styles.carousel}>
          <img
						src={mainImg}
						className={styles.mainImg}
						alt=""
					/>
          <div className={styles.previewLine}>
            {product.imageUrls.map(url => (
              <img
                src={url}
                onClick={() => {setMainImg(url)}}
                className={cn(styles.subImg, url === mainImg ? styles.subImgActive: '')}
                alt="Sub Image"
                key={Math.random()}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.nameAndPrice}>
          <h1 className={styles.productName}>{product.name}</h1>
          <h1 className={styles.productPrice}>{product.price} ₽</h1>
        </div>

        <div className={styles.availabilityAndAmount}>
          <div className={styles.availability}>
            <span className={styles.isAvailable}>В наличии</span>
            <FontAwesomeIcon className={styles.availabilityIcon} icon={faCheckCircle}/>
          </div>

          <AmountSelector product={product}/>
        </div>
      </div>
    </div>
	);
}
 
export default observer(Set);