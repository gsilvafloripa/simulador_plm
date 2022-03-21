import React, { useContext, useEffect, useState } from 'react'
import Picker from '@components/picker'

// import useDisplayContext from '@hooks/useDisplayContext'
import { DisplayContext } from '@/context/displayContext'

import * as Styles from './styles'
import { SubTitle, Title } from '@components/showCase/customization/styles'

const Color: React.FC<{}> = () => {
	// context
	const { changeData } = useContext(DisplayContext)

	const [data, setData] = useState({
		camiseta: {
			gola: '#000',
			ribana: '#F44',
			cores: ['#cc0', '#908', '#FB9', '#F44', '#33f']
		},
		short: {
			cores: ['#387', '#678', '#fb9', '#F44', '#445']
		}
	})

	// ao carregar
	useEffect(() => {
		console.log('aqui...')
		setChangeData(data)
	}, [])

	const handleColorChangeCamiseta = (hex, position) => {
		let change = data

		// altera a cor na posição correta
		change.camiseta.cores[position] = hex

		// seta nos dados
		// setData(prev => change)
		setChangeData(change)
	}

	const handleColorChangeGola = (hex, position) => {
		let change = data

		// altera a cor na posição correta
		change.camiseta.gola = hex

		// seta nos dados
		// setData(prev => change)
		setChangeData(change)
	}

	const handleColorChangeRibana = (hex, position) => {
		let change = data

		// altera a cor na posição correta
		change.camiseta.ribana = hex

		// seta nos dados
		// setData(prev => change)
		setChangeData(change)
	}

	const handleColorChangeShort = (hex, position) => {
		let change = data

		// altera a cor na posição correta
		change.short.cores[position] = hex
		console.log(position)
		setChangeData(change)
	}

	const setChangeData = result => {
		// seta nos dados
		setData(prev => result)

		changeData(data)
	}

	return (
		<Styles.Container>
			<Title>Selecione cores</Title>
			<Styles.ContainerBox>
				<Styles.Box>
					<SubTitle>Camiseta</SubTitle>
					<Styles.ContainerPicker>
						{data.camiseta.cores.map((result, position) => {
							return (
								<Picker
									colorDefault={result}
									position={position}
									onChange={handleColorChangeCamiseta}
									key={position}
								/>
							)
						})}
					</Styles.ContainerPicker>
				</Styles.Box>
				<Styles.divider />
				<Styles.Box>
					<SubTitle>Gola</SubTitle>
					<Styles.ContainerPicker>
						<Picker
							colorDefault={data.camiseta.gola}
							onChange={handleColorChangeGola}
						/>
					</Styles.ContainerPicker>
				</Styles.Box>
				<Styles.divider />
				<Styles.Box>
					<SubTitle>Ribana</SubTitle>
					<Styles.ContainerPicker>
						<Picker
							colorDefault={data.camiseta.ribana}
							onChange={handleColorChangeRibana}
						/>
					</Styles.ContainerPicker>
				</Styles.Box>
				<Styles.divider />
				<Styles.Box>
					<SubTitle>Short</SubTitle>
					<Styles.ContainerPicker>
						{data.short.cores.map((result, position) => {
							return (
								<Picker
									colorDefault={result}
									position={position}
									onChange={handleColorChangeShort}
									key={position}
								/>
							)
						})}
					</Styles.ContainerPicker>
				</Styles.Box>
			</Styles.ContainerBox>
		</Styles.Container>
	)
}

export default Color
