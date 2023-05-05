import { useState } from 'react';
import { FormikErrors } from 'formik';
import styles from './styles.module.scss'
import cn from "classnames";
import Input from '@/comps/app/Input/Input';

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

const ShippingOptions: React.FC<Props> = ({
	values,
	setFieldValue,
	className,
	name,
	errors,
}) => {
	return (
		<div className={styles.shippingOptions}>
			{errors.deliveryOption? 
				<div className={cn(styles.headerError, styles.header)}>
					Дата доставки*
				</ div>

				:
				<div className={styles.header}>
					Способ доставки
				</ div>
			}
			<div className={styles.optionCards}>

				<div
					onClick={() => setFieldValue(name, 'pickup')} 
					className={ cn(styles.option, values.deliveryOption === 'pickup'? styles.active: '') }
				>
					<div className={styles.optionNameAndPriceSection}>
						<span className={cn(styles.optionName, styles.optionText)}>Самовывоз из г. Видное</span>
						<span className={cn(styles.optionPrice, styles.optionText)}>Бесплатно</span>
					</div>
					<div className={styles.optionIconSection}>
						<i className={styles.icon}>📍</i>
					</div>
				</div>

				<div 
					onClick={() => setFieldValue(name, 'delivery')} 
					className={ cn(styles.option, values.deliveryOption === 'delivery'? styles.active: '') }
				>
					<div className={styles.optionNameAndPriceSection}>
						<span className={cn(styles.optionName, styles.optionText)}>Доставка</span>
						<span className={cn(styles.optionPrice, styles.optionText)}>Дорого</span>
					</div>
					<div className={styles.optionIconSection}>
						<i className={styles.icon}>🚚</i>
					</div>
				</div>
			</div>

      { values.deliveryOption === 'delivery' && 
			<div className={ styles.additionalDeliveryInfoSection}>
				<span className={styles.deliveryInfoHeader}>Дополнительная информация о доставке</span>
				<Input
					id="address"
          name="deliveryAdditional"
					type="text"
					className={styles.additionalInput}
					isTextArea={true}
          label="Дополнительно о доставке: "
				/>
      </div> }
		</div>
	);
}
 
export default ShippingOptions;