import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
`
export const Input = styled.input`
	margin: auto;
	width: 300px;
	height: 40px;
	border: none;
	background: #ccc;
	text-align: center;
`

export const Buttons = styled.div`
	margin-top: 10px;
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: space-evenly;
	flex-direction: row;
`

export const PositionButton = styled.button`
	width: 200px;
	height: 50px;
	cursor: pointer;
	border: none;
	background: #ccc;
`

export const TypeText1 = styled.p`
	font-size: 14px;
	line-height: 14px;
	font-family: 'Titillium Web';
`

export const TypeText2 = styled.p`
	font-size: 18px;
	line-height: 20px;
	font-family: 'Teko';
`
