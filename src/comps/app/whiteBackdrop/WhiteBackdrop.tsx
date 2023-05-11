import React, { useState } from "react";
import styles from './styles.module.scss'
import cn from "classnames"
import UIStore from "@/stores/UIStore";
import { observer } from "mobx-react-lite";

const WhiteBackdrop = observer(() => {
  return (
    <div
      className={ cn(styles.drawerBackdrop, UIStore.isMenuOpen ? styles.open : undefined) }
      onClick={() => { UIStore.setMenuClosed() }}
    />
  )
})

export default WhiteBackdrop;