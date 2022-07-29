import Head from 'next/head'
import { Heading } from '../components/Data'
import styles from '../styles/modules/Main.module.scss'

export default function Home() {
	return (
		<main className={styles.wrapper}>
			<Head>
				<title>!!! | главная</title>
				<meta name='title' content='!!!' />
			</Head>
			<Heading text='главная' />
		</main>
	)
}
