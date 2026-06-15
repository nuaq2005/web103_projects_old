import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import LangController from '../controllers/languages.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()
router.get('/', LangController.getLangs)

router.get('/:languageId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../../front-end/public/language.html'))
})
export default router