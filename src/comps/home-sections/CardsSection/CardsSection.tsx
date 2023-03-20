import React, { FC, useState } from "react";
import styles from './styles.module.scss'
import cn from "classnames"
import Image from "next/image";
import { SectionItem } from "./SectionItem/SectionItem";

interface Props {
  className?: string;
}

export const CardsSection: React.FC<Props> = ({className}) => {
  return (
    <div className={ cn(styles.sectionWrapper) }>
      <div className={ styles.sectionHeader }>
        <h2 className={ styles.heading }>Клубничные букеты</h2>
      </div>
      <div className={ styles.bouquetsWrapper }>
        <SectionItem name={ 'мини' } link={ '' } />
        <SectionItem name={ 'средние' } link={ '' } />
        <SectionItem name={ 'большие' } link={ '' } />
      </div>
    </div>
  )
}