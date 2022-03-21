import { createContext, useState } from 'react'

interface IShowCase {
	value: string
	setValue: () => void
}

export const ShowCaseContext = createContext({} as IShowCase)

export const ShowCaseProvider: React.FC<{}> = ({ children }) => {
	const [value, setValue] = useState('tshirt')

	return (
		<ShowCaseContext.Provider value={{ value, setValue }}>
			{children}
		</ShowCaseContext.Provider>
	)
}
