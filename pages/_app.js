import App from '../components/Layout'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
	return (
		<App>
			<Component {...pageProps} />
		</App>
	)
}
export default MyApp
