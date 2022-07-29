import Footer from './Footer'
import Header from './Header'
import styles from '../styles/modules/Layout.module.scss'

const Layout = ({ children }) => {
	return (
		<layout className={styles.wrapper}>
			<Header />
			{children}
			<Footer />
		</layout>
	)
}

export default Layout
