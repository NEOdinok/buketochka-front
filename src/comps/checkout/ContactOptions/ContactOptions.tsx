import styles from './styles.module.scss';
import RadioBtn from '@/comps/app/RadioBtn/RadioBtn';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { Field, FormikErrors } from 'formik';
import cn from 'classnames';

interface Props {
	values: {
    name: string,
    email: string,
    phone: string,
    additional: string,
    contactOption: string,
    deliveryDate: string,
    deliveryTime: string,
    deliveryOption: string,
    deliveryAdditional: string,
	},
	errors: FormikErrors<{
    name: string;
    email: string;
    phone: string;
    additional: string;
    contactOption: string;
    deliveryDate: string;
    deliveryOption: string;
    deliveryAdditional: string;
	}>,
	setFieldValue: (field: string, value: string, shouldValidate?: boolean | undefined) => void,
	className: string,
}

const ContactOptions: React.FC<Props> = ({
	setFieldValue,
	values,
	className,
	errors,
}) => {
	return (
		<div className={cn(styles.contactOptions, className)}>
			{errors.contactOption? 
				<div className={cn(styles.headerError, styles.header)}>
					Как с вами<br className={styles.mobileBreak} /> связаться ?*
				</ div>

				:
				<div className={styles.header}>
					Как с вами<br className={styles.mobileBreak} /> связаться ?
				</ div>
			}
				<Field
					as={RadioBtn}
					id="viber"
					name="contactOption"
					value="viber"
					setFieldValue={setFieldValue}
					values={values}
					description="Написать в Viber "
					icon="fab fa-viber"
				/>

				<Field
					as={RadioBtn}
					id="telegram"
					name="contactOption"
					value="telegram"
					setFieldValue={setFieldValue}
					values={values}
					description="Написать в Telegram"
					icon="fab fa-telegram"
				/>

				<Field
					as={RadioBtn}
					id="whats"
					description="Написать в Whats App "
					icon="fab fa-whatsapp"
					name="contactOption"
					value="whats"
					setFieldValue={setFieldValue}
					values={values}
				/>

				<Field
					as={RadioBtn}
					description="Позвонить мне "
					icon="fas fa-phone-volume"
					id="phone"
					name="contactOption"
					value="phone"
					setFieldValue={setFieldValue}
					values={values}
				/>
		</div>
	);
}
 
export default ContactOptions;