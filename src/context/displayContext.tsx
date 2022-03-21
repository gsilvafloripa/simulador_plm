import React, { createContext, ReactNode, useState } from 'react'

interface IDisplay {
	session: string
	changeSession: (args0: string) => void
	changeData: (args0) => void
	data: string | {}
	shieldPosition: string
	setShieldPosition: React.Dispatch<React.SetStateAction<string>>
	shieldShortPosition: string
	setShieldShortPosition: React.Dispatch<React.SetStateAction<string>>
	name: string
	setName: React.Dispatch<React.SetStateAction<string>>
	namePosition: string
	setNamePosition: React.Dispatch<React.SetStateAction<string>>
	fontType: string
	setFontType: React.Dispatch<React.SetStateAction<string>>
}

export const DisplayContext = createContext({} as IDisplay)

interface IDisplayProvider {
	children: ReactNode
}

export const DisplayProvider = ({ children }: IDisplayProvider) => {
	const [session, setSession] = useState('tshirt')
	const [data, setData] = useState('')
	const [shieldPosition, setShieldPosition] = useState('left')
	const [shieldShortPosition, setShieldShortPosition] = useState('left')
	const [name, setName] = useState('')
	const [namePosition, setNamePosition] = useState('top')
	const [fontType, setFontType] = useState('Titillium Web')

	// seta a página
	const changeSession = (session: string) => {
		// console.log(session)
		setSession(session)
	}

	const changeData = (data: string) => {
		setData(prev => '')
		setData(prev => data)
	}

	return (
		<DisplayContext.Provider
			value={{
				session,
				changeSession,
				changeData,
				data,
				shieldPosition,
				setShieldPosition,
				shieldShortPosition,
				setShieldShortPosition,
				name,
				setName,
				namePosition,
				setNamePosition,
				fontType,
				setFontType
			}}
		>
			{children}
		</DisplayContext.Provider>
	)
}
