import styles from './styles.module.scss';
import { forwardRef } from 'react';
import Image from 'next/image';
import leftSet from "public/img/set4.png";
import rightSet from "public/img/set1.png";
import cn from 'classnames';

interface Props {
	className?: string;
  active: boolean;
}

const SetsSection = forwardRef<HTMLElement, Props>((props, ref) => {
	const {active, className} = props;
	return (
		<section ref={ref} className={cn(styles.sets, active? styles.active: '')}>
			<h1 className={styles.header}>Ягодные наборы</h1>
			<p className={styles.price}>от 990р.</p>
      <button className={styles.button}>Смотреть</button>
			<Image className={cn(styles.image, styles.leftSet)} src={rightSet} alt="No image" />
			<Image className={cn(styles.image, styles.rightSet)} src={leftSet} alt="No image" />
      <div className={styles.background} />
		</section>
	);
})
 
export default SetsSection;