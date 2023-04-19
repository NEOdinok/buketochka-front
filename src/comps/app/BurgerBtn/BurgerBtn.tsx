import { useState } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import UIStore from '@/stores/UIStore';

const BurgerBtn: React.FC = observer(() => {
	return (
		<button
			className={cn(styles.menuBtn, UIStore.isMenuOpen? styles.onMenu: '')}
			onClick={() => UIStore.toggleMenuOpen()}
		>
			<span className={cn(styles.menuBtnLine, styles.menuBtnLineTop)}></span>
			<span className={cn(styles.menuBtnLine, styles.menuBtnLineMid)}></span>
			<span className={cn(styles.menuBtnLine, styles.menuBtnLineBot)}></span>
		</button>
	);
})
 
export default BurgerBtn;