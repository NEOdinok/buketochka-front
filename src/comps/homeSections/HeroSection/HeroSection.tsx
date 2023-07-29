import styles from './styles.module.scss';
import Image from 'next/image';
import heroImage from "public/img/backs/first_section_strawberries.jpeg";
import heroImageMobile from "public/img/backs/first_section_strawberries_small.jpg";
import { forwardRef, useEffect, useState } from 'react';
import cn from 'classnames';

interface Props {
	className?: string;
  active: boolean;
}

const HeroSection = forwardRef<HTMLElement, Props>((props, ref) => {
	const {active, className} = props;
	const [isMobile, setIsMobile] = useState(false);

	return (
		<section ref={ref} className={cn(className, styles.heroSection, active? styles.active: '')}>
			<div className={styles.heroImgWrap}>
				{isMobile && <Image className={styles.heroImg} src={heroImageMobile} alt="Hero image mobile" />}
				{!isMobile && <Image className={styles.heroImg} src={heroImage} alt="Hero image" />}
				<div className={ styles.darkenImage } />
				<p className={cn(styles.heroText, 'white-glow-text')}>Что<br />у нас есть?</p>
			</div>

			<p className={cn(styles.berryEmoji, styles.emoji)}>&#127827;</p>
      <p className={cn(styles.chocoEmoji, styles.emoji)}>&#127851;</p>
      <p className={cn(styles.alcoEmoji, styles.emoji)}>&#127870;</p>
      <p className={cn(styles.giftEmoji, styles.emoji)}>&#127873;</p>
		</section>
	);
})
 
export default HeroSection;