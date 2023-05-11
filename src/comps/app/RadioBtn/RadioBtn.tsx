import styles from './styles.module.scss';
import cn from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

interface Props {

  id: string,
  name: string,
  value: string,

  className?: string,
  icon: string,
  description: string,
  values: {
    name: string,
    email: string,
    phone: string,
    additional: string,
    contactOption: string,
  },
  setFieldValue: (field: string, value: string, shouldValidate?: boolean | undefined) => void,
}

const RadioBtn: React.FC<Props> = ({
  id,
  name,
  value,
  className,
  values,
  icon,
  description, 
  setFieldValue,
}) => {
	return (
	<div
		className={cn(styles.inputField, className)}
		onClick={(e:React.MouseEvent<HTMLElement>) => setFieldValue(name, value)}
	>
		<div className={styles.head}>
			<div className={cn(styles.icon, styles[ id ], (values.contactOption === value)? styles.active: '')}>
				<i className={cn(icon)} />
			</div>

			<div className={styles.description}>
				{ description }
			</div>
		</div>

		<FontAwesomeIcon
			icon={faCircle}
			className={cn(styles.inputCircle, (values.contactOption === value)? styles.inputActiveCircle: '')}
			values={id}
		/>
	</div>
	);
}
 
export default RadioBtn;