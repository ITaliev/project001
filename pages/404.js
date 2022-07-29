import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Heading } from '../components/Data'
import styles from '../styles/modules/404.module.scss'
console.clear()

const NotFoundPage = () => {
	const router = useRouter()
	const go = () => router.push('/')
	const [count, setCount] = useState(3)
	useEffect(() => {
		const id = setInterval(() => {
			count <= 0 ? go() : setCount(count - 1)
		}, 1000)
		return () => clearInterval(id)
	}, [count])
	return (
		<center className={styles.wrapper}>
			<div>
				<Heading text='упс...' />
				<h2>такой страницы не существует</h2>
				<h3>
					перехожу на{' '}
					<Link href='/'>
						<a> главную страницу</a>
					</Link>{' '}
					через {count} сек...
				</h3>
			</div>
		</center>
	)
}
export default NotFoundPage
