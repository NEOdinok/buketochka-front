import styles from './styles.module.scss';
import { ReactNode, useEffect } from 'react';
import cn from "classnames"
import { useState } from 'react';
import { useRouter } from "next/router";
import { observer } from 'mobx-react-lite';
import { getDocs, collection, DocumentData } from 'firebase/firestore';
import { db } from '@/firebase/clientApp';
import { subCategoryDataType, categoriesType, categoryDataType } from '@/types';
import UIStore from '@/stores/UIStore';

// interface Props {
// 	data: navBarDataType
// }

const Navbar: React.FC = observer(() => {
	const router = useRouter();
	const [categories, setCategories] = useState<Array<{name: string, id: string, route: string}>>([]);

  useEffect(() => {
		UIStore.toggleIsLoading();

    const getNavbarData = async () => {
      try {
				const categoriesSnapshot = await getDocs(collection(db, 'users', 'RGdaFnMIZ2PX5xKpwtx25kSC3dB2', 'categories'))
				const categoriesList = categoriesSnapshot.docs.map(doc => ({
					id: doc.id,
					name: doc.data().categoryRoute,
					route: doc.data().categoryName,
				}));	
				console.log('const categories:', categoriesList);
				setCategories(data => ([...data, ...categoriesList]))
				if (categories) console.log('state categories:', categories);
				UIStore.toggleIsLoading();
      } catch (error) {
        console.warn({error});
      }
    }

    getNavbarData();
  }, []);

	// const renderSubcategories = (subcategories: Array<subCategoryDataType>) => 
	// 	subcategories.map(
	// 		(subcategory): ReactNode => (
	// 			<li
	// 				className={styles.subItem}
	// 				onClick={() => { router.push(`/${subcategory.route}`)}}
	// 				key={subcategory.id}
	// 			>
	// 				<span>{subcategory.name}</span>
	// 			</li>
	// 		)
	// 	)

	// const renderNavbarCategories = () =>
	// 	navBarData.map(
	// 		(category): ReactNode => (
	// 			<div className={ cn(router.pathname == `/${category.route}` ? styles.active : undefined, styles.navItem) }
	// 				onClick={() => { router.push(`/${category.route}`)}}
	// 				key={category.id}
	// 			>
	// 				<span className={styles.navItemText}>{category.name}</span>
	// 				<ul className={ styles.subMenu }>
	// 					{ renderSubcategories(category.subcategories)}
	// 				</ul>
	// 			</div>	
	// 		)
	// 	)

	return (
		<nav className={cn(styles.navbar, UIStore.isMenuOpen? styles.navbarOpen: '')}>
			<div className={ styles.navWrapper }>
				<div className={ cn(router.pathname == '/' ? styles.active : undefined, styles.navItem)}
					onClick={() => { router.push('/')}}
				>
					<span className={styles.navItemText}>Главная</span>
				</div>
				{/* { renderNavbarCategories() } */}
			</div>
		</nav>
	);
})
 
export default Navbar;

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