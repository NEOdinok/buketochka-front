import React, { FC, useState } from "react";
import styles from './styles.module.scss'
import cn from "classnames"
import Image from "next/image";
import background from 'src/assets/imgs/backs/bouquet_card.jpg'

interface Props {
  className?: string;
  name: string;
  link: string;
}

export const SectionItem = (props: Props) => {
  const { name } = props
  return (
    <div className={ cn(styles.itemWrapper) }>
      <div className={ styles.image }>
        <Image src={ background } alt="" fill></Image>
        <div className={ styles.name }>{ name }</div>
      </div>
    </div>
  )
}