import dotenv from 'dotenv'
import express, { type Express, type Request, type Response } from 'express'

dotenv.config()
dotenv.config({ path: '../.env' })

const app: Express = express()
const PORT = Number(process.env.SERVER_PORT ?? process.env.PORT ?? 3000)

app.get('/', (req: Request, res: Response) => {
	res.send('Express + TypeScript Server')
})
app.listen(PORT, () => {
	console.log(`Server started on ${PORT}`)
})