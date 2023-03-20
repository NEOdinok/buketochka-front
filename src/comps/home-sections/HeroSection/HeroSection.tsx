import Image from "next/image";
import { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import largeBackground from 'src/assets/imgs/backs/first_section_strawberries.jpeg';
import smallBackground from 'src/assets/imgs/backs/first_section_strawberries_small.jpg';
import React from "react";

interface Props {
  className?: string;
  active?: boolean;
}

export const HeroSection = React.forwardRef<HTMLDivElement, Props>(({active, className}, ref) => {
	const [src, setSrc]: any = useState('')
	useEffect(()=>{
    if (window.innerWidth > 600) {
      setSrc(largeBackground);
    } else {
      setSrc(smallBackground);
    }
  }, [])

	return (
		<div ref={ref} className={ cn(styles.sectionWrapper, active ? styles.active : undefined) }>
			<div className={ styles.image }>
				{ <Image src={ largeBackground } alt=""></Image>}
				<div className={ styles.darkenImage } />
			</div>
			<div className={ styles.sectionHeading }>Что<br/>у нас есть?</div>

			<p className={ styles.strawberryEmoji }>&#127827;</p>
			<p className={ styles.chocoEmoji }>&#127851;</p>
			<p className={ styles.alcoEmoji }>&#127870;</p>
			<p className={ styles.giftEmoji }>&#127873;</p>
		</div>
	);
})