import styles from './styles.module.scss';
import { ReactNode, useEffect } from 'react';
import cn from "classnames"
import { useState } from 'react';
import { useRouter } from "next/router";
import { getDocs, collection, DocumentData } from 'firebase/firestore';
import { db } from '@/firebase/clientApp';
import { subCategoryDataType, categoriesType, categoryDataType } from '@/types';
import UIStore from '@/stores/UIStore';
import CartStore from '@/stores/CartStore';
import { observer } from 'mobx-react-lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Navbar: React.FC = () => {
	const router = useRouter();
	const [categories, setCategories] = useState<categoriesType>([]);
	const [openCategory, setOpenCategory] = useState<string>('');

	const getNavbarData = async () => {
		const tempCategories: categoriesType = [];

		try {
			const categoriesSnapshot = await getDocs(collection(db, 'users', 'RGdaFnMIZ2PX5xKpwtx25kSC3dB2', 'categories'));
			await Promise.all(
				categoriesSnapshot.docs.map(async categoryDoc => {
					const subCategoriesSnapshot = await getDocs(collection(db, 'users', 'RGdaFnMIZ2PX5xKpwtx25kSC3dB2', 'categories', categoryDoc.id, 'subcategories'));
					const tempSubCategories: Array<subCategoryDataType> = subCategoriesSnapshot.docs.map(subCategoryDoc => ({ 
							id: subCategoryDoc.id,
							name: subCategoryDoc.data().subCategoryName,
							route: subCategoryDoc.data().subCategoryRoute,
						})
					);
					tempCategories.push({
						id: categoryDoc.id,
						name: categoryDoc.data().categoryName,
						route: categoryDoc.data().categoryRoute,
						subcategories: tempSubCategories,
					})
				})
			)

			setCategories(tempCategories);
		} catch (error) {
			// console.warn({error});
			throw new Error(`error`);
		}
	}

	useEffect(() => {
		getNavbarData().finally(() => UIStore.toggleIsLoading());
	}, []);

	useEffect(() => {
		const html = document.querySelector('html');

    if (UIStore.isMenuOpen)
      (html as HTMLElement).classList.add('overflowHidden');
    if (!UIStore.isMenuOpen)
      (html as HTMLElement).classList.remove('overflowHidden');
	}, [UIStore.isMenuOpen]);

	const toggleOpen = (e: React.MouseEvent, route: string): void => {
		e.stopPropagation();
    e.preventDefault();
		if (openCategory === route) setOpenCategory('');
		else setOpenCategory(route);
  };

	const renderSubcategories = (subcategories: Array<subCategoryDataType>) => 
		subcategories.map(
			(subcategory): ReactNode => (
				<li
					id={subcategory.route}
					className={styles.subItem}
					onClick={(e) => { 
						e.stopPropagation();
						console.log('pressed SubCategory');
						router.replace(`/subcategories/${subcategory.route}`)
						UIStore.toggleMenuOpen()
					}}
					key={subcategory.id}
				>
					<span>{subcategory.name}</span>
				</li>
			)
		)

	const renderCategories = () =>
		categories.map(
			(category): ReactNode => (
				<div
					id={category.route}
					className={cn(
						`/categories/${router.query.dynamicCategory}` == `/categories/${category.route}`? styles.active: '',
						styles.navItem,
						(openCategory === `${category.route}`)? styles.hasVisibleSubmenu: '',
						)}
					onClick={() => { router.replace(`/categories/${category.route}`); UIStore.setMenuClosed();}}
					key={category.id}
				>
					<div className={styles.navItemContent}>
						<span className={styles.navItemText}>{category.name}</span>
						{ (category.subcategories.length != 0) && 
							<div
								className={styles.angleContainer}
								onClick={(e: React.MouseEvent) => toggleOpen(e, category.route)}
							>
								<FontAwesomeIcon className={styles.navItemAngle} icon={faAngleDown} />
							</div>
						}
					</div>

					<ul className={ styles.subMenu }>
						{ renderSubcategories(category.subcategories)}
					</ul>
				</div>	
			)
		)

	return (
		<nav className={cn(styles.navbar, UIStore.isMenuOpen? styles.navbarOpen: '')}>
			<div className={ styles.navWrapper }>

				<div className={ cn(router.pathname == '/'? styles.active: '', styles.navItem)}
					onClick={() => { router.push('/'); UIStore.setMenuClosed();}}
				>
					<div className={styles.navItemContent}>
						<span className={styles.navItemText}>Главная</span>
					</div>
				</div>

				{ renderCategories() }

				<div className={cn(styles.cart, CartStore.isEmpty()? '': styles.cartVisible)}
					onClick={() => { router.push('/cart'); UIStore.setMenuClosed(); }}
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
}
 
export default observer(Navbar);

/*
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
*/