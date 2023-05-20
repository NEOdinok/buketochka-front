import styles from './styles.module.scss'

const Error404: React.FC = () => {
	return (
		<div className={styles.errorWrap}>
			<h1 className={styles.number}>404</h1>
			<span className={styles.text}>Тут ничего нет.. Правда</span>
		</div>
	);
}

export default Error404;