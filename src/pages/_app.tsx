// eslint-disable-next-line no-use-before-define
import React, { useCallback, useEffect, useState } from 'react'
import { Router } from 'next/router'
import { AppProps } from 'next/app'
// import { ThemeProvider } from 'styled-components'
import NProgress from 'nprogress'
import '@styles/nprogress.css'

import 'primereact/resources/themes/md-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import PrimeReact from 'primereact/utils'

import { ThemeAppProvider } from '@/context/themeAppContext'

import GlobalStyle from '@styles/global'

PrimeReact.ripple = true

Router.events.on('routeChangeStart', url => {
	NProgress.start()
})

Router.events.on('routeChangeStart', () => NProgress.done())
Router.events.on('routerChangeError', () => NProgress.done())

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<ThemeAppProvider>
			<Component {...pageProps} />
			<GlobalStyle />
		</ThemeAppProvider>
	)
}

export default App
