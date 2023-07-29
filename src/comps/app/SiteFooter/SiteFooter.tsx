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
					<p className={styles.linkText}>Telegram</p>
				</Link>

				<Link href="#" target="_blank" className={styles.socialLink}>
					<FontAwesomeIcon className={cn(styles.whatsappIcon, styles.socialIcon)} icon={faWhatsapp}/>
					<p className={styles.linkText}>Whatsapp</p>
				</Link>

				<Link href="#" target="_blank" className={styles.socialLink}>
					<i className={cn(styles.instagramIcon, styles.socialIcon, 'fab fa-instagram')}></i>
					<p className={styles.linkText}>Instagram</p>
				</Link>
			</div>
		</footer>
	);
}
 
export default SiteFooter;