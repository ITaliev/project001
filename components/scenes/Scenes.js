// import { WebGLRenderer } from 'three'
import * as THREE from 'three'
// import { SceneMain } from './Renderers'
import { useEffect } from 'react'
import styles from '../../styles/modules/scenes/Scenes.module.scss'

const Scenes = () => {
	useEffect(() => {
		const renderer = new THREE.WebGLRenderer()
		const elem = document.querySelector('#sceneId')
		elem.appendChild(renderer.domElement)
	}, [])
	return <scenes className={styles.wrapper} id='sceneId'></scenes>
}

export default Scenes
