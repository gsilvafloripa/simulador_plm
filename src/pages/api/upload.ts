import { NextApiRequest, NextApiResponse } from 'next'
import multer from 'multer'
import nextConnect from 'next-connect'
import path from 'path'
import fs from 'fs'

interface IReq extends NextApiRequest {
	file?: {
		fieldname: string
		originalname: string
		encoding: string
		mimetype: string
		destination: string
		filename: string
		path: string
		size: number
	}
}

const upload = multer({
	storage: multer.diskStorage({
		destination: './public/uploads',
		filename: (req, file, cb) => cb(null, file.originalname)
	})
})

const apiRoute = nextConnect<NextApiRequest, NextApiResponse>({
	onError(error, req: NextApiRequest, res: NextApiResponse) {
		res
			.status(501)
			.json({ error: `Sorry something Happened! ${error.message}` })
	},
	onNoMatch(req: NextApiRequest, res: NextApiResponse) {
		res.status(405).json({ error: `Method '${req.method}' Not Allowed` })
	}
})

const uploadMiddleware = upload.single('image')

apiRoute.post(uploadMiddleware, async (req: IReq, res: NextApiResponse) => {
	const url = req.file.path.replace('public', '')
	return res.status(201).json({
		url
	})
})

apiRoute.get(async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		fs.opendir('./public/uploads', async (err, dir) => {
			if (err) {
				return res.json({ message: err.message })
			}

			if (dir) {
				const file = (await dir.read()).name

				const result = {
					_id: '1',
					name: file,
					size: '123',
					url: path.resolve(__dirname, 'uploads', file)
				}

				return res.json(result)
			}
		})
	} catch (error) {
		return res.json({ message: 'Nenhuma imagem encontrada' })
	}
})

apiRoute.delete((req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { fileName } = req.query

		fs.rm(`./public/uploads/${fileName}`, async () => {
			return res.json({ message: 'Imagem apagada com sucesso!' })
		})
	} catch (error) {
		return res.json({ message: 'Nenhuma imagem encontrada' })
	}
})

export default apiRoute

export const config = {
	api: {
		bodyParser: false
	}
}
