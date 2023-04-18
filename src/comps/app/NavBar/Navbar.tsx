import styles from './styles.module.scss';
import { useState } from 'react';
import cn from "classnames"
import { useRouter } from "next/router";
import CartStore from '@/stores/cartStore';

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();
	return (
		<nav className={cn(styles.navbar, isOpen? styles.navbarOpen: '')}>
			<div className={ styles.navWrapper }>
				<div className={ cn(router.pathname == '/' ? styles.active : undefined, styles.navItem)}
					onClick={() => { router.push('/')}}
				>
					Главная
				</div>
				<div className={ cn(router.pathname == '/bouquets' ? styles.active : undefined, styles.navItem) }
					onClick={() => { router.push('/bouquets')}}
				>
					Букеты
					<ul className={ styles.subMenu }>
						<li className={ styles.subItem }>
							Мини
						</li>
						<li className={ styles.subItem }>
							Средние
						</li>
						<li className={ styles.subItem }>
							Большие
						</li>
					</ul>
				</div>
				<div className={ cn(router.pathname == '/sets' ? styles.active : undefined, styles.navItem) }
					onClick={() => { router.push('/sets')}}
				>
					Наборы
					<ul className={ styles.subMenu }>
						<li className={ styles.subItem }>
							9 штук
						</li>
						<li className={ styles.subItem }>
							16 штук
						</li>
						<li className={ styles.subItem }>
							24 штуки
						</li>
					</ul>
				</div>
				<div className={ styles.cart }
					onClick={() => { router.push('/cart')}}
				>
					<div className={ styles.cartContent }>
						<i className={ cn(styles.cartIcon, "material-icons") }>add_shopping_cart</i>
						<div className={ styles.counter }>
							<span>{CartStore.count()}</span>
						</div>
						{/* <span className={ styles.toCartSpan }>В корзину</span>
						<i className={ cn(styles.toCartI, "material-icons") }>keyboard_arrow_right</i> */}
					</div>
				</div>
				{/* <SocialsList type={ 'drawer' } /> */}
			</div>
		</nav>
	);
}
 
export default Navbar;