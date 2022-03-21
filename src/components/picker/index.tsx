import React, { createRef, useEffect, useRef, useState } from 'react'

import { GithubPicker } from 'react-color'

import * as Styles from './styles'

interface IPicker {
	colorDefault: string
	onChange: (arg0: string, arg1: number) => void
	position?: number
}

export const Picker: React.FC<IPicker> = ({
	colorDefault,
	onChange,
	position
}) => {
	const ref = createRef()

	const [pickerVisible, setPickerVisible] = useState(false)
	const [color, setColor] = useState(colorDefault)

	// constrola se o picker está ou não visível
	const onTogglePicker = (): void => {
		setPickerVisible(!pickerVisible)
	}

	const onChangeComplete = (event): void => {
		// fecha o picker
		onTogglePicker()

		// repassa para o componente color a cor selecionada
		onChange(event.hex, position)

		// seta a color selecionada
		setColor(event.hex)
	}

	return (
		<Styles.container>
			<Styles.buttonSelect color={color} onClick={onTogglePicker} />
			{pickerVisible && (
				<Styles.picker>
					<GithubPicker
						width={137}
						triangle="hide"
						color={color}
						onChangeComplete={onChangeComplete}
						onMouseDown={() => console.log('saiu')}
					/>
				</Styles.picker>
			)}
		</Styles.container>
	)
}

export default Picker
