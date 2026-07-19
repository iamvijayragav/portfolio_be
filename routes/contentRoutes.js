import { Router } from 'express'
import {
  getAbout,
  getAchievements,
  getExperience,
  getProfile,
  getProjects,
  getServices,
  getSkills,
} from '../controllers/contentController.js'

const router = Router()

router.get('/about', getAbout)
router.get('/profile', getProfile)
router.get('/experience', getExperience)
router.get('/projects', getProjects)
router.get('/services', getServices)
router.get('/skills', getSkills)
router.get('/achievements', getAchievements)

export default router
