import styles from './styles.module.scss'
import { forwardRef, useEffect, useState } from 'react';
import Image from 'next/image';
import comboImage from 'public/img/strawberry_chocko.png';
import cn from 'classnames';

interface Props {
	className?: string;
  active: boolean;
}

const BerrySection = forwardRef<HTMLElement, Props>((props, ref) => {
	const {active} = props;
	return (
		<section ref={ref} className={cn(styles.comboSection, active? styles.active: '')}>
			<div className={styles.content}>
				<div className={styles.textContainer}>
					<p className={cn(styles.text, 'white-glow-text')}>И их безупречное<br />сочетание</p>
				</div>

				<Image className={styles.image} src={comboImage} alt="" />
			</div>
		</section>
	);
})
 
export default BerrySection;