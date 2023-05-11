import Link from 'next/link';
import styles from './styles.module.scss';
import cn from "classnames";
import UIStore from '@/stores/UIStore';
import { observer } from 'mobx-react-lite';


const LoadingScreen:React.FC = () => {
	return (
		<>
			<div className={cn(styles.loader, UIStore.isLoading? styles.active: '')}>
				<div className={styles.foldingCube}>
					<div className={cn(styles.cube, styles.cube1)}></div>
					<div className={cn(styles.cube, styles.cube2)}></div>
					<div className={cn(styles.cube, styles.cube4)}></div>
					<div className={cn(styles.cube, styles.cube3)}></div>
				</div>
			</div>
		</>
	);
}
 
export default observer(LoadingScreen);