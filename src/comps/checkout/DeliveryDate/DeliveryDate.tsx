import { DatePicker } from "antd";
import styles from "./styles.module.scss";
import 'moment/locale/ru';
import locale from 'antd/lib/date-picker/locale/ru_RU';
import moment from "moment";

interface Props {
  setDate: React.Dispatch<React.SetStateAction<string>>
}

const DeliveryDate: React.FC<Props> = ({ setDate }) => {
	return (
		<div className={styles.deliveryDate}>
			<h1 className={styles.header}>Дата доставки</h1>
      <DatePicker
				disabledDate={(date) => { return date && date.valueOf() < Date.now()}}
				onChange={(_, dateString) => setDate(dateString)}
				className={ styles.datePicker }
				format={'DD MMM, YYYY'}
				allowClear={false}
				suffixIcon
				locale={ locale }
			/>
		</div>
	);
}
 
export default DeliveryDate;