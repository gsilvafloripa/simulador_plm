import { useContext } from 'react'
import { ThemeAppContext } from '@/context/themeAppContext'

const useThemeAppContext = () => useContext(ThemeAppContext)

export default useThemeAppContext
