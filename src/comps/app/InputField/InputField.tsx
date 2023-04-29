import styles from './styles.module.scss';
import cn from 'classnames';
import { useState } from 'react';
import InputMask from 'react-input-mask';
import { CONSTANTS } from "../../../utils/constants"

interface Props {
	labelText: string,
	id: string,
	type: string,
	isTextArea?: boolean,
	placeholder: string,
	setState: React.Dispatch<React.SetStateAction<string>>,
	className?: string,
}

const InputField: React.FC<Props> = ({labelText, id, type, isTextArea, placeholder, className, setState}) => {
	const [ focused, setFocused ] = useState(false)
	return (
		<div className={cn(styles.inputField, className)}>
			{
				isTextArea?
				<textarea
					className={styles.textArea}
					onChange={(e) => {setState(e.target.value)}}
					placeholder={ '\n' + placeholder}
					onBlur={(e) => {e.target.value.length > 0 ? undefined : setFocused(false)}}
					onFocus={() => { setFocused(true)}}
					id={ id }
				/>

				:id === 'phone'?
				<InputMask
					mask={ CONSTANTS.PHONE_MASK }
					onChange={(e) => {setState(e.target.value)}}
					onBlur={(e) => { e.target.value.length > 0 ? undefined : setFocused(false)}}
					onFocus={() => { setFocused(true)}}
					id={ id }
					type={ type }
				>
					<input className={styles.input} />
				</InputMask>

				:
				<input
					className={styles.input}
					onChange={(e) => { setState(e.target.value)}}
					onBlur={(e) => { e.target.value.length > 0 ? undefined : setFocused(false)}}
					onFocus={() => { setFocused(true)}}
					id={ id }
					type={ type }
				/> 
			}

			<label
				className={cn(styles.label, focused? styles.active: undefined)}
				htmlFor={ id }
			>
				{ labelText }
			</ label>
		</div>
	);
}
 
export default InputField;