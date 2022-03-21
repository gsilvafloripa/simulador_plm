import styled from 'styled-components'

type IProps = {
	position?: string
	fontType?: string
}

export const Container = styled.div`
	/* margin-top: 10px;
	display: flex;
	flex: 1;
	flex-direction: column; */
	/* position: absolute; */
	height: 500px;
	width: 500px;
`

export const Product = styled.div`
	justify-content: center;
	display: flex;
	span {
		position: absolute;
	}
`
export const ComponentSobra = styled.span`
	mix-blend-mode: multiply;
`

export const Shield = styled.div<IProps>`
	position: relative;
	top: ${props => (props.position === 'center' ? 7 : 5)}rem;
	left: ${props =>
		props.position === 'center' ? 1 : props.position === 'left' ? 4 : -1.6}rem;
`

export const ShieldShort = styled.div<IProps>`
	position: relative;
	top: ${props => (props.position === 'left' ? 25.4 : 27)}rem;
	left: ${props => (props.position === 'left' ? 3 : -4)}rem;
`
