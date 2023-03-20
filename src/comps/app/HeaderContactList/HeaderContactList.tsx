import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';
import cn from "classnames";

const HeaderContactList = () => {
	return (
		<div className={cn(styles.HeaderContactList)}>
			<div className={cn(styles.phoneSection)}>
				{/* phone
				phone icon */}
			</div>
			<div className={cn(styles.socialSection)}>
				{/* inst
				telegram
				whats */}
			</div>
		</div>
	);
}
 
export default HeaderContactList;