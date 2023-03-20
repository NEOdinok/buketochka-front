import React, { forwardRef } from "react";
import styles from './styles.module.scss'
import cn from "classnames"
import Image from "next/image";
import chokoImg from 'src/assets/imgs/strawberry_chocko.png';

interface Props {
  className?: string;
  active?: boolean;
}

export const CombinationSection = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { active } = props
  return (
    <div ref={ ref } className={ cn(styles.sectionWrapper, active ? styles.active : undefined) }>
      <div className={ styles.text }>
        и их безупречное сочетание
      </div>
      <div className={ styles.imageContainer }>
        <Image className={ styles.image } src={chokoImg} fill alt=""></Image>
      </div>
    </div>
  )
})