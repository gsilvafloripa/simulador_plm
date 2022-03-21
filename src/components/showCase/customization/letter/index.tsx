import React, { useContext, useState } from 'react'

import { DisplayContext } from '@/context/displayContext'
import { Title } from '@components/showCase/customization/styles'
import * as Styles from './styles'

const Letter: React.FC = () => {
	// context de comunicação com o display
	const { name, setName, setNamePosition, setFontType } = useContext(
		DisplayContext
	)

	return (
		<Styles.Container>
			<Title>Personalizar o nome na camisa</Title>
			<Styles.Input
				value={name}
				onChange={input => {
					setName(input.target.value)
				}}
			/>
			<Styles.Buttons>
				<Styles.PositionButton
					onClick={() => {
						setNamePosition('top')
					}}
				>
					<p>Cima</p>
				</Styles.PositionButton>
				<Styles.PositionButton
					onClick={() => {
						setNamePosition('bottom')
					}}
				>
					<p>Baixo</p>
				</Styles.PositionButton>
				<Styles.PositionButton
					onClick={() => {
						setFontType('Titillium Web')
					}}
				>
					<Styles.TypeText1>ABC</Styles.TypeText1>
				</Styles.PositionButton>
				<Styles.PositionButton
					onClick={() => {
						setFontType('Teko')
					}}
				>
					<Styles.TypeText2>ABC</Styles.TypeText2>
				</Styles.PositionButton>
			</Styles.Buttons>
		</Styles.Container>
	)
}

export default Letter
