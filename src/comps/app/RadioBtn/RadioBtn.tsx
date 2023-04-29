import styles from './styles.module.scss';
import cn from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

interface Props {
  description: string,
  id: string,
  icon: string,
  active: string,
  setActive: React.Dispatch<React.SetStateAction<string>>,
}

const RadioBtn: React.FC<Props> = ({description, id, icon, active, setActive}) => {
	return (
	<div className={styles.inputField} onClick={()=>{setActive(id)}}>
		<div className={styles.head}>
			<div className={cn(styles.icon, styles[ id ], active === id ? styles.active : '')}>
				<i className={cn(icon)} />
			</div>

			<div className={styles.description}>
				{ description }
			</div>
		</div>

		<FontAwesomeIcon
			icon={faCircle}
			className={cn(styles.inputCircle, (active === id)? styles.inputActiveCircle: '')}
			values={id}
		/>
	</div>
	);
}
 
export default RadioBtn;