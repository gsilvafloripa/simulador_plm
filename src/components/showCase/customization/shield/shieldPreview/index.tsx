import React, { useEffect } from 'react'
import { IFile, useFiles } from '@/context/files'

import { Container, ImagePreview } from './styles'

const ShieldPreview: React.FC = () => {
	const { uploadedFiles: files } = useFiles()

	return (
		<Container>
			{!!files &&
				files.map((uploadedFile: IFile) => {
					return (
						<ImagePreview
							key={uploadedFile.id}
							src={uploadedFile.preview}
							width={40}
							height={40}
						/>
					)
				})}
		</Container>
	)
}

export default ShieldPreview
