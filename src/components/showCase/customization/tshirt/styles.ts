import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
`
export const Item = styled.button`
	cursor: pointer;
	border: none;
	background: none;

	&:active {
		opacity: 0.7;
	}
`
