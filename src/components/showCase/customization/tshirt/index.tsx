import React, { useContext, memo, useEffect, useState } from 'react'
import Image from 'next/image'
import { Carousel } from 'primereact/carousel'

import { Title } from '@components/showCase/customization/styles'
import * as Styles from './styles'

interface ITshirtsList {
	id: string
	name: string
	image: string
}

const Tshirt: React.FC = memo(() => {
	const [tshirts, setTshirts] = useState<ITshirtsList[]>([])

	useEffect(() => {
		setTshirts([
			{
				id: '1',
				name: 'tshirt1',
				image: '/tshirt.png'
			},
			{
				id: '2',
				name: 'tshirt2',
				image: '/short.png'
			},
			{
				id: '3',
				name: 'tshirt3',
				image: '/tshirt.png'
			},
			{
				id: '4',
				name: 'tshirt4',
				image: '/tshirt.png'
			},
			{
				id: '5',
				name: 'tshirt5',
				image: '/tshirt.png'
			},
			{
				id: '6',
				name: 'tshirt6',
				image: '/tshirt.png'
			},
			{
				id: '7',
				name: 'tshirt7',
				image: '/tshirt.png'
			},
			{
				id: '8',
				name: 'tshirt8',
				image: '/tshirt.png'
			},
			{
				id: '9',
				name: 'tshirt9',
				image: '/tshirt.png'
			},
			{
				id: '10',
				name: 'tshirt10',
				image: '/tshirt.png'
			}
		])
		// document.getElementsByClassName(
		// 	'p-carousel-indicators p-reset'
		// )[0].style.display = 'none' // eslint-disable-line
	}, [])

	const itemTemplate = (product: ITshirtsList) => {
		return (
			<Styles.Item
				className="product-item"
				onClick={() => {
					// Chamar função para alterar modelo de camiseta selecionado
					console.log(product.image)
				}}
			>
				<div className="product-item-content">
					<div className="p-mb-3" style={{ width: '200px' }}>
						<Image src={product.image} height={95} width={81} />
						<span>{product.id}</span>
					</div>
				</div>
			</Styles.Item>
		)
	}

	return (
		<Styles.Container>
			<Title>Selecione o modelo de camiseta</Title>
			<div className="card" style={{ position: 'relative' }}>
				{/* TSHIRT -- LUSSSKAAAAA
			<button onClick={() => eventRender()}>teste</button> */}
				<Carousel
					value={tshirts}
					numVisible={5}
					numScroll={5}
					style={{ maxWidth: '63vw', margin: '0px' }}
					itemTemplate={itemTemplate}
				/>
			</div>
		</Styles.Container>
	)
})

export default Tshirt
