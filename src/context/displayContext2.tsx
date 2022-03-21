import React, { createContext, useState } from 'react'

export const DisplayContext2 = createContext<any>({})

export const DisplayProvider2: React.FC<{}> = ({ children }) => {
	const [value, setValue] = useState<any>('')
	console.log('aqui.....')
	const dataChange = () => {
		setValue('teste')
	}

	return (
		<DisplayContext2.Provider value={{ value, dataChange }}>
			{children}
		</DisplayContext2.Provider>
	)
}
