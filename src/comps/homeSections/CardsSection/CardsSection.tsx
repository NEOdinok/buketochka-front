import styles from './styles.module.scss'
import { forwardRef, useEffect, useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';

interface Props {
	className?: string;
  active: boolean;
}

const CardsSection= forwardRef<HTMLElement, Props>((props, ref) => {
	const {active, className} = props;

	return (
		<section className={styles.types}>
			<h2 className={styles.sectionHeader}>Bouquets</h2>

			<div className={styles.cardsContainer}>
				<Link href="#" target="_blank" className={styles.card}>
					<span className={styles.cardInfo}>Mini</span>
				</Link> 

				<Link href="#" target="_blank" className={styles.card}>
					<span className={styles.cardInfo}>Mini</span>
				</Link> 

				<Link href="#" target="_blank" className={styles.card}>
					<span className={styles.cardInfo}>Mini</span>
				</Link> 
			</div>
  </section>
	);
})
 
export default CardsSection;