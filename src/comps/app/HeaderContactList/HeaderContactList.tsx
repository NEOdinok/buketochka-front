import { faTelegram, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import styles from './styles.module.scss';
import cn from "classnames";

const HeaderContactList = () => {
	return (
		<div className={styles.headerContactList}>
			<div className={cn(styles.numberSection, styles.contactsSection)}>
				<a className={styles.phone}>+7(903)624-55-56</a>
			</div>
			<div className={cn(styles.socialSection, styles.contactsSection)}>
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
	);
}
 
export default HeaderContactList;