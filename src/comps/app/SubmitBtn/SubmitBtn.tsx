import { observer } from "mobx-react-lite";
import styles from './styles.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cn from 'classnames';
import { faPaperPlane, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { ButtonHTMLAttributes } from "react";

interface Props {
	type: "button" | "submit" | "reset" | undefined,
	className?: string
}

const SubmitBtn: React.FC<Props> = ({
	type,
	className,
}) => {
	const router = useRouter();

	return (
		<div className={cn(styles.btnPosition, className)}>
			<button className={styles.btnInnerWrap} type={type}>
				<div className={styles.textSection}>
					<span className={styles.header}>Отправить</span>
				</div>

				<div className={styles.imgSection}>
					<div className={styles.imgWrap}>
						<FontAwesomeIcon icon={faPaperPlane} className={styles.icon} />
					</div>
				</div>
			</button>
		</div>
	);
}
 
export default observer(SubmitBtn);