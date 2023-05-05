import { Field, ErrorMessage, Formik } from 'formik';
import { useState } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';
import MaskedInput from 'react-input-mask';
import { CONSTANTS } from '@/utils/constants';
import { FormikErrors } from 'formik';

interface Props {
	className?: string,
	type: string,
	name: string,
	id: string,
	label: string
	isTextArea?: boolean;
	isError?: boolean,
}

const Input: React.FC<Props> = ({type, name, id, className, label, isTextArea, isError }) => {
	const [focused, setFocused] = useState(false)

	return (
		<>
			<ErrorMessage
				name={name}
				component="span"
				className={styles.errorMessage}
			/>
			<div className={cn(styles.inputField, className)}>
				{
					isTextArea?
					<Field
						as="textarea"
						className={styles.textArea}
						onBlur={(e) => {e.target.value.length > 0 ? undefined : setFocused(false)}}
						onFocus={() => { setFocused(true)}}
						id={ id }
						name={name}
						type={type}
					/>

					:id === "phone"? 
					<Field
						id={id}
						name={name}
						type={type}
						as={MaskedInput}
						mask={CONSTANTS.PHONE_MASK}
						className={styles.input}
						icon="fab fa-viber"
						description="Написать в Viber "
						// setFieldValue={setFieldValue}
						// values={values}
						onBlur={(e) => {e.target.value.length > 0 ? undefined : setFocused(false)}}
						onFocus={() => { setFocused(true)}}
					/>


					:
					<Field
						type={type}
						name={name}
						id={id}
						className={cn(styles.input)}
						onBlur={(e) => {e.target.value.length > 0 ? undefined : setFocused(false)}}
						onFocus={() => { setFocused(true)}}
					/>
				}

				<label
					className={cn(styles.label, focused? styles.active: '')}
					htmlFor={ id }
				>
					{label}
				</ label>


			</div>
		</>
	);
}
 
export default Input;