import styled from 'styled-components'

export const container = styled.div`
	display: flex;
	position: relative;
`

export const picker = styled.div`
	position: absolute;
	top: -120px;
	right: 0px;
	left: 0px;
	bottom: 0px;
`

export const buttonSelect = styled.button`
	z-index: 1;
	background: ${props => props.color};
	border: 1px solid ${props => props.theme.colors.productMenuDivider};
	height: 20px;
	width: 20px;
	border-radius: 3px;
	cursor: pointer;
	margin: 1px;
`
