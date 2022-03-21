import React, { useState } from 'react'

import { InputSwitch } from 'primereact/inputswitch'

import Logo from '@components/logo'
import useThemeAppContext from '@hooks/useThemeAppContext'

import * as Styles from './styles'

const Header: React.FC<{}> = () => {
	// hook
	const { value, setValue } = useThemeAppContext()
	const [toggle, setToggle] = useState(value == 'light' ? false : true)

	return (
		<Styles.Header>
			<div id="contentLeft"></div>
			<div id="logo">
				<Logo />
			</div>
			<Styles.ButtomTheme>
				<InputSwitch
					checked={toggle}
					onChange={() => {
						setToggle(prev => !prev)
						setValue(toggle == false ? 'dark' : 'light')
					}}
				/>
				<p>{!toggle ? 'escuro' : 'claro'}</p>
			</Styles.ButtomTheme>
		</Styles.Header>
	)
}

export default Header
