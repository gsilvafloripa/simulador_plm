import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import { MdCheckCircle, MdError, MdLink, MdMoodBad } from 'react-icons/md'
import { IFile, useFiles } from '@/context/files'

import { Container, FileInfo, ImagePreview } from './styles'

const FileList: React.FC = () => {
	const { uploadedFiles: files, deleteFile } = useFiles()

	if (!files.length) {
		return (
			<span>
				<MdMoodBad
					style={{ marginLeft: '45%', marginTop: 10 }}
					size={24}
					color="#d5d2d2"
				/>
			</span>
		)
	}

	return (
		<Container>
			{!!files &&
				files.map((uploadedFile: IFile) => {
					return (
						<li key={uploadedFile.name}>
							<FileInfo>
								<ImagePreview
									src={uploadedFile.preview}
									width={36}
									height={36}
								/>
								<div>
									<strong>{uploadedFile.name}</strong>
									<span>
										{uploadedFile.readableSize}{' '}
										{!!uploadedFile.url && (
											<button onClick={() => deleteFile(uploadedFile.name)}>
												Excluir
											</button>
										)}
									</span>
								</div>
							</FileInfo>

							<div>
								{!uploadedFile.uploaded && !uploadedFile.error && (
									<CircularProgressbar
										styles={{
											root: { width: 24 },
											path: { stroke: '#7159c1' }
										}}
										strokeWidth={10}
										text={String(uploadedFile.progress)}
										value={uploadedFile.progress || 0}
									/>
								)}

								{uploadedFile.uploaded && (
									<MdCheckCircle size={24} color="#78e5d5" />
								)}
								{uploadedFile.error && <MdError size={24} color="#e57878" />}
							</div>
						</li>
					)
				})}
		</Container>
	)
}

export default FileList
