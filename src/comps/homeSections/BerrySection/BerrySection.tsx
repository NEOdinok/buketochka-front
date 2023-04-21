import { forwardRef } from 'react';
import Image from 'next/image';
import BerryImg from 'public/img/strawberry.jpg';
import cn from 'classnames';
import styles from './styles.module.scss';

interface Props {
	className?: string;
  active: boolean;
}

const BerrySection = forwardRef<HTMLElement, Props>((props, ref) => {
	const {active} = props;
	return (
		<section ref={ref} className={cn(styles.berrySection, active? styles.active: '')}>
			<h2 className={styles.header}>Почему это</h2>
			<p className={styles.subHeader}>отличный подарок</p>
			<div className={styles.content}>
				<div className={styles.imageContainer}>
					<Image className={styles.image} src={BerryImg} alt="" />
				</div>
				<div className={styles.textContainer}>
					<p className={styles.text}>свежая<br />клубника</p>
				</div>
			</div>
		</section>
	);
})
 
export default BerrySection;