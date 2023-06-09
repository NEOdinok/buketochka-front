import { NextPage } from "next";
import styles from './styles.module.scss';
import { Formik, FormikHelpers, Form } from 'formik';
import { observer } from "mobx-react-lite";
import ContactOptions from "../ContactOptions/ContactOptions";
import DeliveryDateTime from "../DeliveryDateTime/DeliveryDateTime";
import ShippingOptions from "../ShippingOptions/ShippingOptions";
import RecieverData from "../RecieverData/RecieverData";
import SubmitBtn from "@/comps/app/SubmitBtn/SubmitBtn";
import { sendOrderToTelegam } from "@/utils/utilFunctions";
import { useRouter } from "next/router";
import * as Yup from 'yup';

interface FormValues {
	name: string,
	email: string,
	phone: string,
	additional: string,
	contactOption: string,
	deliveryDate: string,
	deliveryTime: string,
	deliveryOption: string,
	deliveryAdditional: string,
}

const OrderSchema = Yup.object().shape({
  name: Yup.string()
    .required('Введите ваше имя*')
		.min(2, 'Имя должно быть минимум 2 символа*'),
	email: Yup.string()
		.email('Введите верный email*')
		.required('Заполните email*'),
	phone: Yup.string()
		.required("Введите ваш номер*")
		.min(16, 'Введите номер полностью*'),
	contactOption: Yup.string()
    .required('Выберите метод связи*'),
	deliveryDate: Yup.string()
		.required('Введите дату доставки*'),
	deliveryTime: Yup.string()
		.required('Введите время доставки*'),
	deliveryOption: Yup.string()
		.required('Выберите способ доставки*'),
});

const CheckoutForm: NextPage = () => {
	const router = useRouter();

	const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    console.log('triggering function with:', values);
		await sendOrderToTelegam(values);
    setSubmitting(false);
		router.replace(`/thanks`);
  };

	return (
    <Formik
      initialValues={{ 
				name: '',
				email: '',
				phone: '',
				additional: '',
				contactOption: '',
				deliveryDate: '',
				deliveryTime: '',
				deliveryOption: '',
				deliveryAdditional: '',
			}}
      validationSchema={ OrderSchema }
      onSubmit={handleSubmit}
			clasName={styles.checkoutForm}
    >
      {({ isSubmitting, values, setFieldValue, errors }) => (
        <Form>
					<div className={styles.recieverSection}>
						<RecieverData
							setFieldValue={setFieldValue}
							values={values}
							className={styles.recieverData}
							errors={errors}
						/>

						<ContactOptions 
							setFieldValue={setFieldValue}
							values={values}
							className={styles.recieverData}
							errors={errors}
						/>
					</div>

					<div className={styles.deliverySection}>
						<DeliveryDateTime
							values={values}
							dateName="deliveryDate"
							timeName="deliveryTime"
							setFieldValue={setFieldValue}
							className=""
							errors={errors}
						/>

						<ShippingOptions
							values={values}
							name="deliveryOption"
							setFieldValue={setFieldValue}
							className=""
							errors={errors}
						/>
					</div>

  
					<SubmitBtn 
						type="submit"
					/>
        </Form>
      )}
    </Formik>
	);
}
 
export default observer(CheckoutForm);
