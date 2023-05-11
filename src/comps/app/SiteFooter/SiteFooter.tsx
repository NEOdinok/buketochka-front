import styles from './styles.module.scss'
import Link from 'next/link';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const SiteFooter = () => {
	return (
		<footer className={styles.footer}>
			<h1 className={styles.header}>Свяжитесь с нами</h1>

			<div className={styles.linksContainer}>
				<Link href="#" target="_blank" className={styles.socialLink}>
					<FontAwesomeIcon className={cn(styles.telegramIcon, styles.socialIcon)} icon={faTelegram}/>
				</Link>

				<Link href="#" target="_blank" className={styles.socialLink}>
					<FontAwesomeIcon className={cn(styles.whatsappIcon, styles.socialIcon)} icon={faWhatsapp}/>
					{/* <i className="fab fa-instagram"></i> */}
				</Link>

				<Link href="#" target="_blank" className={styles.socialLink}>
					{/* <FontAwesomeIcon className={cn(styles.instagramIcon, styles.socialIcon)} icon={faInstagram}/> */}
					<i className={cn(styles.instagramIcon, styles.socialIcon, 'fab fa-instagram')}></i>
				</Link>
			</div>
		</footer>
	);
}
 
export default SiteFooter;