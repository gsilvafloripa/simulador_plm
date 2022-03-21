// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react'

import { config } from '@/config'

import Header from '@components/header'
import Menu from '@/components/menu'
import Display from '@components/showCase/display'

import { DisplayProvider } from '@context/displayContext'

import * as Styles from '@styles/pages/Home'

const Home: React.FC<{}> = () => {
	useEffect(() => {
		// adiciona o título da página
		document.title = config.global.title
	}, [])

	return (
		<Styles.Container>
			{/* <Styles.header>
				<Header />
			</Styles.header> */}
			<Styles.center>
				<DisplayProvider>
					<Styles.left>
						{/* seleciona os opcionais da vitrine  */}
						<Menu />
					</Styles.left>
					<Styles.content>
						{/* display do produto  */}
						<Display />
					</Styles.content>
				</DisplayProvider>
			</Styles.center>
		</Styles.Container>
	)
}

export default Home
