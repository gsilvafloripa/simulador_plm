import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'

import useDisplayContext from '@hooks/useDisplayContext'
import Product from '@/components/showCase/product'
import Customization from '@components/showCase/customization'
import { DisplayContext } from '@/context/displayContext'

import * as Styles from './styles'
import ProductBack from '../productBack'
import { FileProvider } from '@/context/files'

const Display: React.FC = ({}) => {
	// hook do useDisplayContext
	const { value } = useDisplayContext()
	const [sideSelected, setSideSelected] = useState('front')
	const { session } = useContext(DisplayContext)

	useEffect(() => {
		setSideSelected(session === 'letter' ? 'back' : 'front')
	}, [session])

	// const [pRender, setPRender] = useState(0)
	console.log(`render: display = ${value}`)

	return (
		<FileProvider>
			<Styles.Container>
				<Styles.ContainerDisplay>
					<div>
						<Styles.Arrow
							onClick={() =>
								sideSelected === 'front'
									? setSideSelected('back')
									: setSideSelected('front')
							}
						>
							<Image src="/icon/arrow-left.png" width={11} height={18} />
						</Styles.Arrow>
					</div>
					<div>
						{sideSelected === 'front' && <Product />}
						{sideSelected === 'back' && <ProductBack />}
					</div>
					<div>
						<Styles.Arrow
							onClick={() =>
								sideSelected === 'front'
									? setSideSelected('back')
									: setSideSelected('front')
							}
						>
							<Image src="/icon/arrow-right.png" width={11} height={18} />
						</Styles.Arrow>
					</div>
				</Styles.ContainerDisplay>
				<Styles.footer>
					<Customization />
				</Styles.footer>
			</Styles.Container>
		</FileProvider>
	)
}

export default Display
