import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	height: 100vh;
`

export const header = styled.div`
	display: flex;
	height: 90px;
`
export const center = styled.div`
	display: flex;
	flex: 4;
	justify-content: flex-start;
`

export const left = styled.div`
	display: flex;
	/* width: 9.5vw; */
	width: 150px;

	@media (min-width: 600px) {
		/* width: 9.5vw; */
	}
`

export const content = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	position: relative;
	justify-content: flex-start;
	align-items: center;
`
