import type { NextPage } from 'next'
import cn from 'classnames';
import styles from './styles.module.scss';
import cardImage from 'public/img/product.jpg';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import ProductCard from '@/comps/app/ProductCard/ProductCard';

const Bouqets: NextPage = () => {
  return (
		<div className={styles.bouquets}>

      <h1 className={styles.header}>Ягодные букеты</h1>
      <section className={styles.cardsContainer}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </div>
  )
}

export default Bouqets
