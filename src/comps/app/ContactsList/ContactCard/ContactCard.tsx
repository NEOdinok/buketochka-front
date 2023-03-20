import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import cn from "classnames";

type Props = {
  link: string,
  type: string,
  id: string,
}
export const ContactCard = (props: Props) => {
  const { link, type, id } = props
  return (
    <div key={id} id={id} onClick={ () => { window.open(link) } } className={ styles.socialItem }>
        <i className={ cn(styles[id], type) }>
        </i>
        <span className={ styles.title }>
          { id }
        </span>
    </div>
  )
}