import React, { useContext, useState } from 'react'

import { DisplayContext } from '@/context/displayContext'
import { Title } from '@components/showCase/customization/styles'
import Upload from '@/components/showCase/customization/shield/upload'
import FileList from '@/components/showCase/customization/shield/fileList'
import * as Styles from './styles'

const Shield: React.FC = () => {
	const [position, setPosition] = useState(true)
	// context de comunicação com o display
	const { setShieldPosition, setShieldShortPosition } = useContext(
		DisplayContext
	)

	return (
		<Styles.Container>
			<Styles.ContainerUpload>
				<Styles.ContentUpload>
					<Title>Escolher o escudo</Title>
					<Upload />
					<FileList />
				</Styles.ContentUpload>
				<Styles.Options>
					<Title>Escolher a posição</Title>
					<Styles.OptionsContent>
						<Styles.TShirt>
							<Styles.OptionsTitle>CAMISA</Styles.OptionsTitle>
							<Styles.PositionButton
								onClick={() => {
									setShieldPosition('left')
								}}
							>
								<p>Esquerda</p>
							</Styles.PositionButton>
							<Styles.PositionButton
								onClick={() => {
									setShieldPosition('right')
								}}
							>
								<p>Direita</p>
							</Styles.PositionButton>
							<Styles.PositionButton
								onClick={() => {
									setShieldPosition('center')
								}}
							>
								<p>Centro</p>
							</Styles.PositionButton>
						</Styles.TShirt>
						<Styles.Short>
							<Styles.OptionsTitle>CALÇÃO</Styles.OptionsTitle>
							<Styles.PositionButton
								onClick={() => {
									setShieldShortPosition('left')
								}}
							>
								<p>Esquerda</p>
							</Styles.PositionButton>
							<Styles.PositionButton
								onClick={() => {
									setShieldShortPosition('right')
								}}
							>
								<p>Direita</p>
							</Styles.PositionButton>
						</Styles.Short>
					</Styles.OptionsContent>
				</Styles.Options>
			</Styles.ContainerUpload>

			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Teko:wght@500&family=Titillium+Web:wght@700&display=swap"
				rel="stylesheet"
			/>
		</Styles.Container>
	)
}

export default Shield
