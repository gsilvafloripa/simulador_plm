import React, { createContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { light, dark } from '../styles/theme'

export const ThemeAppContext = createContext<any>({})

export const ThemeAppProvider: React.FC<{}> = ({ children }) => {
	const [value, setValue] = useState<any>('light')

	return (
		<ThemeAppContext.Provider value={{ value, setValue }}>
			<ThemeProvider theme={value == 'light' ? light : dark}>
				{children}
			</ThemeProvider>
		</ThemeAppContext.Provider>
	)
}
