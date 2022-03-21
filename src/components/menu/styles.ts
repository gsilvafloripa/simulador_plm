import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	background: ${props => props.theme.colors.productMenu};
	box-shadow: 0 0 0.5em ${props => props.theme.colors.colorBoxShadow};
	padding-top: 30px;
	padding-bottom: 30px;

	#logo {
		/* justify-content: center; */
		/* align-items: center; */
		display: flex;
		width: 7rem;
		position: relative;
		margin-bottom: 20px;
		span {
			position: absolute;
		}
	}
`

export const ItemMenu = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	justify-content: center;
	margin-top: 15px;

	span {
		display: flex;
		flex: 1;
		justify-content: center;
		align-items: center;
		/* justify-content: center; */
	}

	a {
		display: flex;
		flex: 1;
		flex-direction: column;
		align-items: center;
		text-decoration: none;
		color: ${props => props.theme.colors.primary};
	}

	a:hover {
		color: ${props => props.theme.colors.primaryHref};
		transition: color 300ms ease-in;
	}

	a > div > img {
		opacity: 1;
		transition: opacity 300ms ease-in;
	}

	a:hover > div > img {
		opacity: 0.7;
		transition: opacity 300ms ease-in;
	}

	p {
		position: relative;
		bottom: 5px;
		font-size: 14px;
		text-align: center;
		margin-top: 7px;
		padding-bottom: 5px;
	}
`

export const divider = styled.span`
	display: flex;
	align-items: center;
	width: 100px;
	height: 1px;
	border-bottom: 1px solid ${props => props.theme.colors.productMenuDivider};
`
