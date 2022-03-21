import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { useFiles } from '../../../../../context/files'

import { DropContainer, UploadMessage } from './styles'

function Upload(): JSX.Element {
	const { handleUpload } = useFiles()

	const onDrop = useCallback(
		files => {
			handleUpload(files)
		},
		[handleUpload]
	)

	const {
		getRootProps,
		getInputProps,
		isDragActive,
		isDragReject
	} = useDropzone({
		accept: ['image/jpeg', 'image/pjpeg', 'image/png', 'image/gif'],
		onDrop
	})

	const renderDragMessage = useCallback(() => {
		if (!isDragActive) {
			return <UploadMessage>Arraste imagens aqui...</UploadMessage>
		}

		if (isDragReject) {
			return (
				<UploadMessage typeMessage="error">
					Tipo de arquivo não suportado
				</UploadMessage>
			)
		}
		return (
			<UploadMessage typeMessage="success">Solte as imagens aqui</UploadMessage>
		)
	}, [isDragActive, isDragReject])

	return (
		<DropContainer {...getRootProps()}>
			<input {...getInputProps()} />
			{renderDragMessage()}
		</DropContainer>
	)
}

export default Upload
