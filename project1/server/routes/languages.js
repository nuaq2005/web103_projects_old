import express from 'express'
import path from 'path'
import LangController from '../controllers/languages.js'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()
router.get('/', LangController.getLangs)

router.get('/:languageId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/language.html'))
})
export default router