import React, { FC, forwardRef, useState } from "react";
import styles from './styles.module.scss'
import cn from "classnames"
import Image from "next/image";
import strawberryPic from 'src/assets/imgs/strawberry.jpg';

interface Props {
  className?: string;
  active: boolean;
}

export const StrawberrySection = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { active } = props
  return (
    <div ref={ ref } className={ cn(styles.sectionWrapper, active ? styles.active : undefined) }>
      <div className={ styles.sectionHeader }>
        <h2 className={ styles.heading }>Почему это</h2>
        <p className={ styles.subHeading }> отличный подарок?</p>
      </div>
      <div className={ styles.content }>
        <div className={ styles.imageContainer }>
          <Image className={ styles.image } src={strawberryPic} fill alt=""></Image>
        </div>
        <p className={ styles.text }>свежая клубника</p>
      </div>
    </div>
  )
})