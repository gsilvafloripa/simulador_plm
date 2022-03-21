import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
`

export const ContainerBox = styled.div`
	display: flex;
	flex: 1;
	flex-direction: row;
`

export const Box = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
`

export const divider = styled.div`
	display: flex;
	width: 1px;
	flex-direction: column;
	border-left: 1px solid ${props => props.theme.colors.productMenuDivider};
	margin-top: 10px;
	margin-bottom: 10px;
`

export const ContainerPicker = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`
