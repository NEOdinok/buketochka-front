import { NextPage } from "next";
import styles from './styles.module.scss';
import { useState } from "react";
import RecieverData from "../RecieverData/RecieverData";
import ContactOptions from "../ContactOptions/ContactOptions";
import DeliveryDate from "../DeliveryDate/DeliveryDate";
import ShippingOptions from "../ShippingOptions/ShippingOptions";

const CheckoutForm: NextPage = () => {
	const [ valid, setValid ] = useState(false)
	//RecieverData
  const [ phone, setPhone ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ name, setName ] = useState('')
  const [ additional, setAdditional ] = useState('')
	//Contact 
  const [ contact, setContact ] = useState('')
	//Delivery
  const [ date, setDate ] = useState('')
	//Shipping options
  const [ shipOption, setShipOption ] = useState('')
  const [ shippingAdditional, setShippingAdditional ] = useState('')

	const submitHandler = (event: React.MouseEvent) => {
		console.log('submit handler');
  }

	return (
		<form className={styles.checkoutForm}>
			<div className={styles.socialSection}>
				<RecieverData
					setPhone={ setPhone }
					setEmail={ setEmail }
					setName={ setName }
					setAdditional={ setAdditional }
					className={styles.recieverSection}
				/>
				<ContactOptions 
					contact={ contact }
					setContact={ setContact } 
					className={styles.recieverSection}
				/>
			</div>

			<div className={styles.deliverySection}>
				<DeliveryDate setDate={setDate} />
				<ShippingOptions
					setShippingAdditional = { setShippingAdditional}
					setShipOption={setShipOption}
				/>
			</div>
		</form>
	);
}
 
export default CheckoutForm;
