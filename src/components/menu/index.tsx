import React, { memo, useContext } from 'react'
import Image from 'next/image'

import Logo from '@components/logo'
import { DisplayContext } from '@/context/displayContext'

import * as Styles from './styles'

const Menu: React.FC = memo(() => {
	// context
	const { changeSession } = useContext(DisplayContext)

	// informa o index qual item de customização
	const click = (id: string) => {
		changeSession(id)
	}

	console.log('render: menu')

	return (
		<Styles.Container>
			<div id="logo">
				<Logo />
			</div>
			<Styles.ItemMenu>
				<span>
					{/* <ButtonLottie id="tshirt" eventOnClick={click} /> */}
					<a href="#" onClick={() => click('tshirt')}>
						<Image src="/icon/icon-tshirt.png" width={50} height={58} />
						<p>Camiseta</p>
					</a>
				</span>
				<Styles.divider />
			</Styles.ItemMenu>
			<Styles.ItemMenu>
				<span>
					{/* <ButtonLottie id="short" eventOnClick={click} /> */}
					<a href="#" onClick={() => click('short')}>
						<Image src="/icon/icon-short.png" width={55} height={56} />
						<p>Short</p>
					</a>
				</span>
				<Styles.divider />
			</Styles.ItemMenu>
			<Styles.ItemMenu>
				<span>
					{/* <ButtonLottie id="color" eventOnClick={click} /> */}
					<a href="#" onClick={() => click('color')}>
						<Image src="/icon/icon-color.png" width={50} height={47} />
						<p>Cores</p>
					</a>
				</span>
				<Styles.divider />
			</Styles.ItemMenu>
			<Styles.ItemMenu>
				<span>
					{/* <ButtonLottie id="shield" eventOnClick={click} /> */}
					<a href="#" onClick={() => click('shield')}>
						<Image src="/icon/icon-shield.png" width={49} height={56} />
						<p>Escudo</p>
					</a>
				</span>
				<Styles.divider />
			</Styles.ItemMenu>
			<Styles.ItemMenu>
				<span>
					{/* <ButtonLottie id="shield" eventOnClick={click} /> */}
					<a href="#" onClick={() => click('letter')}>
						<Image src="/icon/icon-latter.png" width={49} height={50} />
						<p>Nome</p>
					</a>
				</span>
			</Styles.ItemMenu>
		</Styles.Container>
	)
})

export default Menu
