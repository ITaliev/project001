import styles from '../styles/modules/Data.module.scss'

const Data = {
	heading: props => {
		const Tag = props.tag || 'h1'
		return <Tag className={styles.heading}>{props.text}</Tag>
	},
	navigation: {
		header: [
			{ id: 0, title: 'главная' },
			{ id: 1, title: 'стр.1', url: '1' },
			{ id: 2, title: 'стр.2', url: '2' },
			{ id: 3, title: 'стр.3', url: '3' },
		],
		pages: {
			page1: [
				{ id: 1, title: 'разд.1', url: '1' },
				{ id: 2, title: 'разд.2', url: '2' },
				{ id: 3, title: 'разд.3', url: '3' },
			],
			page2: [
				{ id: 1, title: 'разд.1', url: '1' },
				{ id: 2, title: 'разд.2', url: '2' },
				{ id: 3, title: 'разд.3', url: '3' },
			],
			page3: [
				{ id: 1, title: 'разд.1', url: '1' },
				{ id: 2, title: 'разд.2', url: '2' },
				{ id: 3, title: 'разд.3', url: '3' },
			],
		},
	},
	bd: [],
}
export const Heading = Data.heading
