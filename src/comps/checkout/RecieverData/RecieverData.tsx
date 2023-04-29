import InputField from "@/comps/app/InputField/InputField";
import styles from './styles.module.scss';
import cn from 'classnames';

interface Props {
  setPhone: React.Dispatch<React.SetStateAction<string>>
  setName: React.Dispatch<React.SetStateAction<string>>
  setEmail: React.Dispatch<React.SetStateAction<string>>
  setAdditional: React.Dispatch<React.SetStateAction<string>>
  className?: string,
}

const RecieverData: React.FC<Props> = ({ setPhone, setName, setEmail, setAdditional, className }) => {
	return ( 
		<div className={cn(styles.recieverData, className)}>
			<h1 className={styles.header}>Кому подарок ?</h1>
      <InputField setState={ setPhone } placeholder="test" id="phone" type="tel" labelText="Ваш номер телефона* " />
      <InputField setState={ setEmail } placeholder="test" id="email" type="text" labelText="Почта* " />
      <InputField setState={ setName } placeholder="test" id="name" type="text" labelText="Ваше имя* " />
      <InputField setState={ setAdditional } placeholder="" id="comment" type="text" labelText="Пожелания к заказу " isTextArea={ true } />
		</div>
	);
}
 
export default RecieverData;