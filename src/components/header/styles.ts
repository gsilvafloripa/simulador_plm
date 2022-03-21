import styled, { keyframes } from 'styled-components'

export const openTitle = keyframes`
	from {
		left:0
	}

	to {
		left:50%
	}
`

export const Header = styled.div`
	position: fixed;
	top: 0px;
	left: 0px;
	height: 90px;
	width: 100%;
	background: ${props => props.theme.colors.header};
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	box-shadow: 0 0 0.4em ${props => props.theme.colors.colorBoxShadow};
	z-index: 1;

	#contentLeft {
		width: 150px;
	}

	#logo {
		justify-content: center;
		align-items: center;
		display: flex;
		width: 20rem;
		position: relative;
		span {
			position: absolute;
			animation: ${openTitle} 1s linear;
		}
	}
`

export const ButtomTheme = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-right: 10px;
	font-size: 12px;

	p {
		margin-top: 5px;
	}
`
