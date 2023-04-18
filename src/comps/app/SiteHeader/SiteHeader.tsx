import styles from './styles.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import cn from 'classnames';
import buketochkaLogo from "src/assets/imgs/logos/buketochka_logo.jpeg";
import HeaderContactList from '../HeaderContactList/HeaderContactList';

interface Props {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

const SiteHeader: React.FC<Props> = ({className, setOpen, open}) => {
	const router = useRouter();
	return (
		<header className={cn(styles.header, className)}>
			<div className={cn(styles.logoSection, styles.headerSection)}>
				<Image className={styles.logo} src={buketochkaLogo} alt="Header loto"></Image>
			</div>
			<div className={cn(styles.sloganSection, styles.headerSection)}>
				<p className={styles.slogan}>Букеты и наборы из клубники в бельгийском шоколаде</p>
			</div>
			<div className={cn(styles.socialSection, styles.headerSection)}>
				{/* <p className={styles.socialList}>Social line</p> */}
				<HeaderContactList />
			</div>
		</header>
	);
}
 
export default SiteHeader;