import { createGlobalStyle } from 'styled-components'
import 'react-circular-progressbar'

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary};
    font: 300 16px Nunito;
  }

`
