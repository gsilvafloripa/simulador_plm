import React, { useState } from 'react'
import Lottie from 'react-lottie'
import animationData from '../../assets/lottie/icon_camiseta.json'

import * as Styles from './styles'

interface IButtonLottie {
	eventOnClick: (id: string) => void
	id: string
}

const ButtonLottie: React.FC<IButtonLottie> = ({ eventOnClick, id }) => {
	const [animationState, setAnimationState] = useState({
		isStopped: true,
		isPaused: false,
		direction: -1
	})

	const defaultOptions = {
		loop: false,
		autoplay: false,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	}

	return (
		<>
			<Styles.ButtonWrapper
				onClick={() => {
					const reverseAnimation = -1
					const normalAnimation = 1

					setAnimationState({
						...animationState,
						isStopped: false,
						direction:
							animationState.direction === normalAnimation
								? reverseAnimation
								: normalAnimation
					})

					eventOnClick(id)
				}}
			>
				<Lottie
					options={defaultOptions}
					width={80}
					height={80}
					direction={animationState.direction}
					isStopped={animationState.isStopped}
					isPaused={animationState.isPaused}
				/>
			</Styles.ButtonWrapper>
		</>
	)
}

export default ButtonLottie
