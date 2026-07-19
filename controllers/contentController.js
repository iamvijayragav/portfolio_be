import { about, achievements, experience, projects, services, skills } from '../data/siteData.js'

export function getAbout(req, res) {
  res.json(about)
}

export function getExperience(req, res) {
  res.json(experience)
}

export function getProjects(req, res) {
  res.json(projects)
}

export function getServices(req, res) {
  res.json(services)
}

export function getSkills(req, res) {
  res.json(skills)
}

export function getAchievements(req, res) {
  res.json(achievements)
}
