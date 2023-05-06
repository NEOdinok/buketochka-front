import Image from 'next/image';
import chocoImg from 'public/img/chocko1.png';
import { forwardRef } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

interface Props {
	className?: string;
  active: boolean;
}

const BerrySection = forwardRef<HTMLElement, Props>((props, ref) => {
	const {active} = props;
	return (
		<section ref={ref} className={cn(styles.chocoSection, active? styles.active: '')}>
			<div className={styles.content}>
				<div className={styles.textContainer}>
					<p className={styles.text}>бельгийский<br />шоколад</p>
				</div>

				<div className={styles.imageContainer}>
					<Image className={styles.image} src={chocoImg} alt="" />
				</div>
			</div>
		</section>
	);
})
 
export default BerrySection;