import React from 'react'
import Image from 'next/image'

import * as Styles from './styles'

const Logo: React.FC<{}> = () => {
	return (
		<Styles.Container>
			<Image src="/plm-logo.png" width={130} height={40} />
		</Styles.Container>
	)
}

export default Logo
