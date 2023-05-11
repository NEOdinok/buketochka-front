import styles from './styles.module.scss';
import cn from 'classnames';
import Input from "@/comps/app/Input/Input";
import { FormikErrors } from 'formik';

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
	setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void,
	className: string,
}

const RecieverData: React.FC<Props> = ({
  className,
  values,
  errors,
  setFieldValue,
}) => {
	return ( 
		<div className={cn(styles.recieverData, className)}>
			<h1 className={styles.header}>Кому <br className={styles.mobileBreak} />подарок ?</h1>
        <Input
          type="name"
          name="name"
          id="name"
          label="Ваше имя: "
        />

        <Input
          type="email"
          name="email"
          id="email"
          label="Ваш Email: "
        />

        <Input
          type="phone"
          name="phone"
          id="phone"
          label="Ваш телефон: "
        />

        <Input
          type="additional"
          name="additional"
          id="additional"
          label="Дополнительно: "
          isTextArea={true}
        />
		</div>
	);
}
 
export default RecieverData;