import styles from './styles.module.scss';
import cn from "classnames"
import { useRouter } from "next/router";
import CartStore from '@/stores/CartStore';
import UIStore from '@/stores/UIStore';
import { observer } from 'mobx-react-lite';
import { faTelegram, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface Props {
	test?: string
}

const Navbar: React.FC<Props> = observer(({test}) => {
	const router = useRouter();
	return (
		<nav className={cn(styles.navbar, UIStore.isMenuOpen? styles.navbarOpen: '')}>
			<div className={ styles.navWrapper }>
				<div className={ cn(router.pathname == '/' ? styles.active : undefined, styles.navItem)}
					onClick={() => { router.push('/')}}
				>
					<span className={styles.navItemText}>Главная</span>
				</div>

				<div className={ cn(router.pathname == '/bouquets' ? styles.active : undefined, styles.navItem) }
					onClick={() => { router.push('/bouquets')}}
				>
					<span className={styles.navItemText}>Букеты</span>
					<ul className={ styles.subMenu }>
						<li className={ styles.subItem }>
							<span>Мини</span>
						</li>
						<li className={ styles.subItem }>
							<span>Средние</span>
						</li>
						<li className={ styles.subItem }>
							<span>Большие</span>
						</li>
					</ul>
				</div>
				
				<div className={ cn(router.pathname == '/sets' ? styles.active : undefined, styles.navItem) }
					onClick={() => { router.push('/sets')}}
				>
					<span className={styles.navItemText}>Наборы</span>
					<ul className={ styles.subMenu }>
						<li className={ styles.subItem }>
							<span>9 штук</span>
						</li>
						<li className={ styles.subItem }>
							<span>16 штук</span>
						</li>
						<li className={ styles.subItem }>
							<span>24 штуки</span>
						</li>
					</ul>
				</div>

				<div className={ styles.cart }
					onClick={() => { router.push('/cart')}}
				>
					<div className={ styles.cartContent }>
						<div className={styles.cartIconSection}>
							<i className={ cn(styles.cartIcon, "material-icons") }>add_shopping_cart</i>
							<div className={ styles.counter }>
								<span>{CartStore.count()}</span>
							</div>
						</div>
						<div className={styles.cartArrowSection}>
							<span className={ styles.toCartSpan }>В корзину</span>
							<i className={ cn(styles.arrowIcon, "material-icons") }>keyboard_arrow_right</i>
						</div>
					</div>
				</div>

				<div className={styles.socialSection}>
					<Link href="#" target="_blank" className={styles.socialLink}>
						<FontAwesomeIcon className={cn(styles.telegramIcon, styles.socialIcon)} icon={faTelegram}/>
					</Link>

					<Link href="#" target="_blank" className={styles.socialLink}>
						<FontAwesomeIcon className={cn(styles.telegramIcon, styles.socialIcon)} icon={faWhatsapp}/>
					</Link>

					<Link href="#" target="_blank" className={styles.socialLink}>
						<FontAwesomeIcon className={cn(styles.telegramIcon, styles.socialIcon)} icon={faInstagram}/>
					</Link>
				</div>
			</div>
		</nav>
	);
})
 
export default Navbar;