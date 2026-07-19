import { Router } from 'express'
import {
  getAbout,
  getAchievements,
  getExperience,
  getProjects,
  getServices,
  getSkills,
} from '../controllers/contentController.js'

const router = Router()

router.get('/about', getAbout)
router.get('/experience', getExperience)
router.get('/projects', getProjects)
router.get('/services', getServices)
router.get('/skills', getSkills)
router.get('/achievements', getAchievements)

export default router
