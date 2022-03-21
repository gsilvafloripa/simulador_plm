import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
`

export const Content = styled.div`
	display: flex;
	flex: 1;
	background: ${props => props.theme.colors.containerOptions};
	text-align: center;
	padding: 10px;
	width: 65vw;
	height: 100%;
	box-shadow: 0 0 0.5em ${props => props.theme.colors.colorBoxShadow};
`

export const Title = styled.div`
	font-weight: bold;
	margin-top: 5px;
	margin-bottom: 10px;
	font-size: 18px;
`

export const SubTitle = styled.div`
	margin-top: 10px;
	margin-bottom: 10px;
	font-size: 16px;
`
