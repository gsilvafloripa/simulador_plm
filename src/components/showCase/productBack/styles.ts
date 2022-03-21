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

export const Infos = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex: 1;
`

export const TShirtNumber = styled.p`
	color: white;
	font-size: 100px;
	font-weight: bold;
	position: relative;
	top: 7rem;
	left: 13.2rem;
	font-family: 'Teko';
`

export const NameContainer = styled.div<IProps>`
	position: relative;
	top: ${props => (props.position === 'top' ? -5 : 5)}rem;
	left: -0.2rem;
`

export const NameText = styled.p<IProps>`
	color: white;
	margin: auto;
	text-align: center;
	font-size: ${props => (props.fontType === 'Teko' ? 38 : 28)}px;
	font-family: ${props => props.fontType};
`
