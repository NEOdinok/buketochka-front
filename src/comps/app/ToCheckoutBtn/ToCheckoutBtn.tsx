import { observer } from "mobx-react-lite";
import styles from './styles.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cn from 'classnames';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface Props {
	header: string,
	main: string|number,
}

const ToCheckoutBtn: React.FC<Props> = ({ header, main }) => {
	const router = useRouter();

	return (
		<div className={styles.btnPosition}>
			<button className={styles.btnInnerWrap} onClick={() => router.push('/checkout')}>
				<div className={styles.textSection}>
					<span className={styles.header}>{header}</span>
					<span className={styles.mainText}>{main}</span>
				</div>

				<div className={styles.imgSection}>
					<div className={styles.imgWrap}>
						<FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
					</div>
				</div>
			</button>
		</div>
	);
}
 
export default observer(ToCheckoutBtn);