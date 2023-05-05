import styles from './styles.module.scss'
import { forwardRef, useEffect, useState } from 'react';
import Image from 'next/image';
import chocoImg from 'public/img/chocko1.png';
import cn from 'classnames';

interface Props {
	className?: string;
  active: boolean;
}

const ChocoSection= forwardRef<HTMLElement, Props>((props, ref) => {
	const {active, className} = props;

	return (
		<section ref={ref} className={cn(styles.chocoSection, active? styles.active: '')}>
			<div className={styles.content}>
				<div className={styles.textContainer}>
					<p className={styles.text}>Бельгийский<br />шоколад</p>
				</div>

				<Image className={styles.image} src={chocoImg} alt="" />
			</div>
		</section>
	);
})
 
export default ChocoSection;