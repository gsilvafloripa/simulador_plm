import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { Carousel } from 'primereact/carousel'

import { Title } from '@components/showCase/customization/styles'
import * as Styles from './styles'

interface IShortList {
	id: string
	name: string
	image: string
}

const Short: React.FC = () => {
	const [shorts, setShorts] = useState<IShortList[]>([])

	useEffect(() => {
		setShorts([
			{
				id: '1',
				name: 'short1',
				image: '/short.png'
			},
			{
				id: '2',
				name: 'short2',
				image: '/tshirt.png'
			},
			{
				id: '3',
				name: 'short3',
				image: '/short.png'
			},
			{
				id: '4',
				name: 'short4',
				image: '/short.png'
			},
			{
				id: '5',
				name: 'short5',
				image: '/short.png'
			},
			{
				id: '6',
				name: 'short6',
				image: '/short.png'
			},
			{
				id: '7',
				name: 'short7',
				image: '/short.png'
			},
			{
				id: '8',
				name: 'short8',
				image: '/short.png'
			},
			{
				id: '9',
				name: 'short9',
				image: '/short.png'
			},
			{
				id: '10',
				name: 'short10',
				image: '/short.png'
			}
		])
		// document.getElementsByClassName(
		// 	'p-carousel-indicators p-reset'
		// )[0].style.display = 'none'
	}, [])

	const itemTemplate = (product: IShortList) => {
		return (
			<Styles.Item
				className="product-item"
				onClick={() => {
					// Chamar função para alterar modelo de camiseta selecionado
					console.log(product.name)
				}}
			>
				<div className="product-item-content">
					<div className="p-mb-3" style={{ width: '120px' }}>
						<Image src={product.image} height={95} width={81} />
						<span>{product.id}</span>
					</div>
				</div>
			</Styles.Item>
		)
	}

	return (
		<Styles.Container>
			<Title>Selecione o modelo de calção</Title>
			<div className="card" style={{ position: 'relative' }}>
				{/* TSHIRT -- LUSSSKAAAAA
			<button onClick={() => eventRender()}>teste</button> */}
				<Carousel
					value={shorts}
					numVisible={5}
					numScroll={5}
					style={{ maxWidth: '63vw', margin: '0px' }}
					itemTemplate={itemTemplate}
				/>
			</div>
		</Styles.Container>
	)
}

export default Short
