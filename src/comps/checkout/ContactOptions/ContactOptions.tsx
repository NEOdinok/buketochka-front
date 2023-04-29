import styles from './styles.module.scss';
import RadioBtn from '@/comps/app/RadioBtn/RadioBtn';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import cn from 'classnames';

interface Props {
  contact: string,
  setContact: React.Dispatch<React.SetStateAction<string>>,
	className?: string,
}

const ContactOptions: React.FC<Props> = ({contact, setContact, className}) => {
	return (
		<div className={cn(styles.contactOptions, className)}>
			<div className={styles.header}>Как с вами связаться ?</div>
				<RadioBtn
					active={contact}
					setActive={setContact}
					description="Написать в Telegram"
					icon="fab fa-telegram"
					id="telegram"
				/>
				<RadioBtn
					active={ contact }
					setActive={ setContact }
					description="Написать в Whats App "
					icon="fab fa-whatsapp" id="whats"
				/>
        <RadioBtn
					active={ contact }
					setActive={ setContact }
					description="Написать в Viber "
					icon="fab fa-viber" id="viber"
				/>
        <RadioBtn
					active={ contact }
					setActive={ setContact }
					description="Позвонить мне "
					icon="fas fa-phone-volume"
					id="phone"
				/>
		</div>
	);
}
 
export default ContactOptions;