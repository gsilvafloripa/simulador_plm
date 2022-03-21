import React, {
	useState,
	createContext,
	useEffect,
	useCallback,
	useContext
} from 'react'
import axios from 'axios'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import filesize from 'filesize'

export interface IImage {
	_id: string
	name: string
	size: number
	key: string
	url: string
}

export interface IFile {
	id: string
	name: string
	readableSize: string
	uploaded?: boolean
	preview: string
	file: File | null
	progress?: number
	error?: boolean
	url: string
}

interface IFileContextData {
	uploadedFiles: IFile[]
	deleteFile(id: string): void
	handleUpload(file: any): void
}

const FileContext = createContext<IFileContextData>({} as IFileContextData)

export const FileProvider: React.FC = ({ children }) => {
	const [uploadedFiles, setUploadedFiles] = useState<IFile[]>([])

	useEffect(() => {
		axios.get('/api/upload/').then(response => {
			const postFormatted: IFile[] = []
			postFormatted.push({
				id: response.data._id,
				name: response.data.name,
				readableSize: filesize(response.data.size),
				uploaded: true,
				preview: response.data.url,
				file: null,
				error: false,
				url: response.data.url
			})

			setUploadedFiles(postFormatted)
		})
	}, [])

	const updateFile = useCallback((id, data) => {
		setUploadedFiles(state =>
			state.map(file => (file.id === id ? { ...file, ...data } : file))
		)
	}, [])

	const processUpload = useCallback(
		(uploadedFile: IFile) => {
			const data = new FormData()
			if (uploadedFile.file) {
				data.append('image', uploadedFile.file, uploadedFile.name)

				axios
					.post('/api/upload/', data, {
						headers: {
							'content-type': 'multipart/form-data'
						},
						onUploadProgress: progressEvent => {
							const progress: number = Math.round(
								(progressEvent.loaded * 100) / progressEvent.total
							)

							console.log(
								`A imagem ${uploadedFile.name} está ${progress}% carregada... `
							)

							updateFile(uploadedFile.id, { progress })
						}
					})
					.then(response => {
						console.log(
							`A imagem ${uploadedFile.name} já foi enviada para o servidor!`
						)

						updateFile(uploadedFile.id, {
							uploaded: true,
							id: uploadedFile.id,
							preview: response.data.url,
							url: response.data.url
						})
					})
					.catch(err => {
						console.error(
							`Houve um problema para fazer upload da imagem ${uploadedFile.name}`
						)
						console.log(err)

						updateFile(uploadedFile.id, {
							error: true
						})
					})
			}
		},
		[updateFile]
	)

	const handleUpload = useCallback(
		(files: File[]) => {
			const newUploadedFiles: IFile[] = files.map((file: File) => ({
				file,
				id: uuidv4(),
				name: file.name,
				readableSize: filesize(file.size),
				preview: `/uploads/${file.name}`,
				progress: 0,
				uploaded: false,
				error: false,
				url: `/uploads/${file.name}`
			}))

			setUploadedFiles(state => state.concat(newUploadedFiles))
			newUploadedFiles.forEach(processUpload)
		},
		[processUpload]
	)

	const deleteFile = useCallback((name: string) => {
		axios.delete(`api/upload/?fileName=${name}`)
		setUploadedFiles(state => state.filter(file => file.name !== name))
	}, [])

	return (
		<FileContext.Provider value={{ uploadedFiles, deleteFile, handleUpload }}>
			{children}
		</FileContext.Provider>
	)
}

export const useFiles = (): IFileContextData => {
	const context = useContext(FileContext)

	if (!context) {
		throw new Error('useFiles must be used within FileProvider')
	}

	return context
}
