import React, { useContext, useEffect, useState, Component } from 'react'
import Image from 'next/image'

import { ReactComponent as Gola } from '../../../../public/product/gola.svg'
import { ReactComponent as Ribana } from '../../../../public/product/ribana.svg'
import Sombras from '../../../../public/product/sombras.png'

import { ReactComponent as C1 } from '../../../../public/product/c1.svg'
import { ReactComponent as Md1 } from '../../../../public/product/md1.svg'
import { ReactComponent as Me1 } from '../../../../public/product/me1.svg'
import { ReactComponent as Sd1 } from '../../../../public/product/sd1.svg'
import { ReactComponent as Se1 } from '../../../../public/product/se1.svg'

import { ReactComponent as CC1 } from '../../../../public/product/m1/camiseta/c1.svg'
import { ReactComponent as CC2 } from '../../../../public/product/m1/camiseta/c2.svg'
import { ReactComponent as CC3 } from '../../../../public/product/m1/camiseta/c3.svg'

import { ReactComponent as S1 } from '../../../../public/product/m1/short/s1.svg'
import { ReactComponent as S2 } from '../../../../public/product/m1/short/s2.svg'
import { ReactComponent as S3 } from '../../../../public/product/m1/short/s3.svg'

import { DisplayContext } from '@/context/displayContext'

import * as Styles from './styles'

const ProductBack: React.FC<{}> = () => {
	// context de comunicação com o display
	// const [render, setRender] = useContext<any>(DisplayContext2)
	const { data, name, namePosition, fontType } = useContext(DisplayContext)

	const [color, setColor] = useState({
		camiseta: {
			gola: '#000',
			ribana: '#F44',
			cores: ['#cc0', '#908', '#FB9', '#cc0000', '#33f']
		},
		short: {
			cores: ['#387', '#678', '#fb9', '#F44', '#445']
		}
	})

	console.log(data)

	useEffect(() => {
		if (data != '') {
			setColor(data)
		}
	}, [data])

	return (
		<>
			<div>
				<Styles.Container>
					<Styles.Product>
						<span>
							<Gola fill={color.camiseta.gola} />
						</span>
						<span>
							<Ribana fill={color.camiseta.ribana} />
						</span>
						{/* camiseta */}
						<span>
							<C1 fill={color.camiseta.cores[4]} />
						</span>
						<span>
							<Md1 fill={color.camiseta.cores[4]} />
						</span>
						<span>
							<Me1 fill={color.camiseta.cores[4]} />
						</span>
						<span>
							<CC1 fill={color.camiseta.cores[1]} />
						</span>
						<span>
							<CC2 fill={color.camiseta.cores[2]} />
						</span>
						<span>
							<CC3 fill={color.camiseta.cores[3]} />
						</span>
						{/* camiseta */}

						{/* short */}
						<span>
							<Sd1 fill={color.short.cores[4]} />
						</span>
						<span>
							<Se1 fill={color.short.cores[4]} />
						</span>

						<span>
							<S3 fill={color.short.cores[1]} />
						</span>

						<span>
							<S1 fill={color.short.cores[2]} />
						</span>
						<span>
							<S2 fill={color.short.cores[2]} />
						</span>

						{/* short */}

						<Styles.ComponentSobra>
							<img src={Sombras} />
						</Styles.ComponentSobra>
						{/* <Se2 fill="red" /> */}
						<Styles.Infos>
							<Styles.TShirtNumber>10</Styles.TShirtNumber>

							<Styles.NameContainer position={namePosition}>
								<Styles.NameText fontType={fontType}>
									{name.toUpperCase()}
								</Styles.NameText>
							</Styles.NameContainer>
						</Styles.Infos>
					</Styles.Product>

					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Teko:wght@500&family=Titillium+Web:wght@700&display=swap"
						rel="stylesheet"
					/>
				</Styles.Container>
			</div>
		</>
	)
}

export default ProductBack
