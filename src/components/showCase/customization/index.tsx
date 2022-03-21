import React, { useCallback, useContext, memo } from 'react'

import Tshirt from '@components/showCase/customization/tshirt'
import Short from '@components/showCase/customization/short'
import Color from '@components/showCase/customization/color'
import Shield from '@components/showCase/customization/shield'
import Letter from '@/components/showCase/customization/letter'

import * as Styles from './styles'
import { DisplayContext } from '@/context/displayContext'

const Customization: React.FC<{}> = memo(() => {
	// pega os dados do contexto
	const { session } = useContext(DisplayContext)

	console.log('render: customization')

	return (
		<Styles.Container>
			<Styles.Content>
				{session == 'tshirt' && <Tshirt />}
				{session == 'short' && <Short />}
				{session == 'color' && <Color />}
				{session == 'shield' && <Shield />}
				{session == 'letter' && <Letter />}
			</Styles.Content>
		</Styles.Container>
	)
})

export default Customization
