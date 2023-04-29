import { useState } from 'react';
import styles from './styles.module.scss'
import cn from "classnames";
import InputField from '@/comps/app/InputField/InputField';

interface Props {
	setShipOption: React.Dispatch<React.SetStateAction<string>>,
	setShippingAdditional: React.Dispatch<React.SetStateAction<string>>,
}

const ShippingOptions: React.FC<Props> = ({ setShipOption, setShippingAdditional}) => {
	const [selected, setSelected] = useState('');

	return (
		<div className={styles.shippingOptions}>
			<h1 className={styles.header}>Способ доставки</h1>
			<div className={styles.optionCards}>

				<div
					onClick={() => {setSelected('pickup'); setShipOption('pickup')}} 
					className={ cn(styles.option, selected === 'pickup'? styles.active: '') }
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
					onClick={() => {setSelected('delivery'); setShipOption('delivery')}} 
					className={ cn(styles.option, selected === 'delivery'? styles.active: '') }
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

      { selected === 'delivery' && 
			<div className={ styles.additionalDeliveryInfoSection}>
				<span className={styles.deliveryInfoHeader}>Дополнительная информация о доставки</span>
				{/* <Input setState={setDescription} id="address" labelText="Адрес доставки* " type="text" description="" textinput={ true } /> */}
				<InputField
					setState={setShippingAdditional}
					className={styles.additionalInput}
					id="address"
					labelText="Адрес доставки* "
					type="text"
					placeholder=""
					isTextArea={true}
				/>
      </div> }
		</div>
	);
}
 
export default ShippingOptions;