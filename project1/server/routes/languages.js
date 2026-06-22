import express from 'express'
import LangController from '../controllers/languages.js'

const router = express.Router()

router.get('/', LangController.getLangs)

router.get('/:languageId', LangController.getLangById)

export default router