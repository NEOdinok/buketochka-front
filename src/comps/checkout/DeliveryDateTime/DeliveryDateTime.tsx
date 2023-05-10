import { DatePicker, TimePicker } from "antd";
import cn from 'classnames';
import styles from "./styles.module.scss";
import 'moment/locale/ru';
import locale from 'antd/lib/date-picker/locale/ru_RU';
import moment from "moment";
import { FormikErrors } from "formik";
import { ErrorMessage } from 'formik';
import { useEffect, useState } from "react";

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
	dateName: string,
	timeName: string,
	setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void,
	className: string,
}

const DeliveryDateTime: React.FC<Props> = ({
	values,
	setFieldValue,
	className,
	dateName,
	timeName,
	errors,
}) => {

	const [time, setTime] = useState('');

	useEffect(() => {
		console.log('time: ', time);
	}, [time]);

	return (
		<div className={styles.deliveryDate}>
			<div className={styles.deliveryWrap}>

				<div className={styles.header}>
					Дата и время доставки
				</ div>

				<div className={styles.input}>
					<DatePicker
						disabledDate={(date) => { return date && date.valueOf() < Date.now()}}
						onChange={(_, dateString) => setFieldValue(dateName, dateString)}
						className={ styles.datePicker }
						format={'DD MMM, YYYY'}
						allowClear={false}
						suffixIcon
						locale={ locale }
					/>
					<ErrorMessage
						name={dateName}
						component="span"
						className={styles.errorMessage}
					/>
				</div>

				<div className={styles.input}>
					<TimePicker
						onChange={(_, timeString) => setFieldValue(timeName, timeString)}
						className={ styles.datePicker }
						allowClear={false}
						locale={ locale }
					/>
					<ErrorMessage
						name={timeName}
						component="span"
						className={styles.errorMessage}
					/>
				</div>
			</div>
		</div>
	);
}
 
export default DeliveryDateTime;