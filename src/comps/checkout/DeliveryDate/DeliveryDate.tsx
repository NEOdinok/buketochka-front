import { DatePicker } from "antd";
import cn from 'classnames';
import styles from "./styles.module.scss";
import 'moment/locale/ru';
import locale from 'antd/lib/date-picker/locale/ru_RU';
import moment from "moment";
import { FormikErrors } from "formik";

interface Props {
	values: {
    name: string,
    email: string,
    phone: string,
    additional: string,
    contactOption: string,
    deliveryDate: string,
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
	name: string,
	setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void,
	className: string,
}

const DeliveryDate: React.FC<Props> = ({
	values,
	setFieldValue,
	className,
	name,
	errors,
}) => {
	return (
		<div className={styles.deliveryDate}>
			{errors.deliveryDate? 
				<div className={cn(styles.headerError, styles.header)}>
					Дата доставки*
				</ div>

				:
				<div className={styles.header}>
					Дата доставки
				</ div>
			}
      <DatePicker
				disabledDate={(date) => { return date && date.valueOf() < Date.now()}}
				onChange={(_, dateString) => setFieldValue(name, dateString)}
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