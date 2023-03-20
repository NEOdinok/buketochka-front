import React, { FC, forwardRef, useState } from "react";
import styles from './styles.module.scss'
import cn from "classnames"
import Image from "next/image";
import set1 from 'src/assets/imgs/set1.png';
import set2 from 'src/assets/imgs/set2.png';

interface Props {
  className?: string;
  active?: boolean;
}

export const SetsSection = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { active } = props
  return (
    <div ref={ ref } className={ cn(styles.sectionWrapper, active ? styles.active : undefined) }>
      <div className={ styles.sectionHeader }>
        <h2 className={ styles.heading }>Ягодные наборы</h2>
      </div>
      <div className={ styles.imageOne }>
        <Image className={ styles.image } alt="" src={set1} fill></Image>
      </div>
      <div className={ styles.imageTwo }>
        <Image className={ styles.image } alt="" src={set2} fill></Image>
      </div>
      <p className={ styles.text }>от 999р.</p>
      <div className={ styles.button }>Смотреть</div>
      <div className={styles.background} />
    </div>
  )
})