import styled from 'styled-components'

interface IPropsName {
	position?: boolean
}

export const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
`

export const ContainerUpload = styled.div`
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
`

export const ContentUpload = styled.div`
	width: 100%;
	max-width: 400px;
	margin: 20px;
	background: #fff;
	border-radius: 4px;
	/* padding: 20px; */
`

export const Options = styled.div`
	display: flex;
	flex-direction: column;
`

export const OptionsContent = styled.div`
	display: flex;
	flex-direction: row;
`

export const OptionsTitle = styled.p`
	font-size: 14px;
	color: black;
`

export const TShirt = styled.div`
	display: flex;
	flex-direction: column;
`

export const Short = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 20px;
`

export const PositionButton = styled.button`
	width: 100px;
	border-radius: 25%;
	height: 35px;
	cursor: pointer;
	border: none;
	background: #ccc;
`
