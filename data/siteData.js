export const about = {
  about: [
    'Passionate Software Engineer with 2+ years of professional experience building scalable enterprise applications using ASP.NET Core, Node.js, React, Angular, PostgreSQL, and modern software architecture.',
    'I enjoy designing clean backend systems, building responsive user interfaces, integrating AI-powered solutions, and solving complex engineering problems using scalable architectures.',
    'My expertise spans full-stack development, REST APIs, event-driven systems, LLM integration, microservices, automation workflows, and modern frontend frameworks.',
  ],
  stats: [
    { label: 'Years Experience', value: 2, suffix: '+' },
    { label: 'Production Projects', value: 2, suffix: '' },
    { label: 'Technologies Used', value: 20, suffix: '+' },
    { label: 'Zero-Defect Releases', value: 100, suffix: '%' },
  ],
}

export const profile = {
  name: 'Vijayaragavan B',
  initials: 'VB',
  roles: [
    'Software Engineer',
    'Full Stack Developer',
    'ASP.NET Core Developer',
    'React Developer',
    'Node.js Developer',
    'AI Integration Engineer',
    'Backend Engineer',
    'Problem Solver',
  ],
  tagline: 'I build enterprise-grade backends, clean React front ends, and wire LLMs into products that ship.',
  resumeUrl: 'https://drive.google.com/file/d/1Pi1J2eN58AMpxDF8q7J6LEgBy-L0rp9D/view?usp=drive_link',
  email: 'iamvijayragav@gmail.com',
  social: {
    github: 'https://github.com/iamvijayragav',
    linkedin: 'https://www.linkedin.com/in/vijayaragavan-baskaran-374736191/',
    leetcode: 'https://leetcode.com/u/iamvijayragav/',
    hackerrank: 'https://www.hackerrank.com/profile/iamvijayragav',
  },
  stats: [
    { label: 'Years Experience', value: 2, suffix: '+' },
    { label: 'Production Projects', value: 2, suffix: '' },
    { label: 'Technologies Used', value: 20, suffix: '+' },
    { label: 'Zero-Defect Releases', value: 100, suffix: '%' },
  ],
}

export const experience = [
  {
    company: 'Accenture Solutions Pvt Ltd',
    role: 'Associate Software Engineer',
    duration: 'April 2024 — Present',
    responsibilities: [
      'Designed and developed enterprise-grade RESTful APIs using ASP.NET Core following SOLID principles and clean architecture.',
      'Optimized PostgreSQL queries, indexing strategies, and database connection pooling, significantly improving backend performance and reducing API response times.',
      'Integrated Large Language Models (LLMs) and AI Agent workflows into production applications, automating repetitive operational tasks and improving engineering productivity.',
      'Developed real-time communication modules using SignalR for concurrent multi-user applications with low-latency bidirectional messaging.',
      'Built reusable React and Angular components that improved maintainability and reduced duplicate UI development.',
      'Worked extensively with RabbitMQ and event-driven architecture for asynchronous processing between distributed services.',
      'Debugged production issues using Visual Studio diagnostic tools, memory analysis, and advanced breakpoint techniques.',
      'Collaborated with cross-functional Agile teams during sprint planning, estimation, implementation, code reviews, testing, and deployment.',
      'Created reusable software components that reduced future development effort across multiple projects.',
    ],
    achievements: [
      'Ranked #1 during Accenture onboarding training',
      'Received Extra Mile Excellence Award',
      'Maintained high-quality code with zero critical production defects',
      'Improved backend execution performance through optimized API design',
    ],
    tech: ['ASP.NET Core', 'React', 'Angular', 'PostgreSQL', 'RabbitMQ', 'SignalR'],
  },
]

export const projects = [
  {
    id: 'admission-plus',
    title: 'Admission Plus',
    tagline: 'Full Stack College Admission Management System',
    status: 'Live',
    stack: ['React.js', 'Redux', 'Node.js', 'MongoDB', 'Express'],
    description:
      'Admission Plus is a comprehensive college admission management platform designed to digitize the entire student admission lifecycle. Students register, apply for multiple courses, upload required documents, pay admission fees online, and monitor application progress in real time. Administrators review applications, verify documents, approve or reject submissions, assign departments, and manage admission workflows through an intuitive dashboard — reducing paperwork and manual processing time.',
    features: [
      'Student Registration',
      'Secure Authentication',
      'Role-based Access',
      'Course Management',
      'Online Application',
      'Document Upload',
      'Fee Payment Integration',
      'Admission Tracking',
      'Admin Dashboard',
      'Search & Filter',
      'Notification System',
      'Responsive UI',
    ],
    challenge: 'Managing multiple application stages while maintaining data consistency across users.',
    solution: 'Implemented modular REST APIs, MongoDB schema relationships, and Redux state management for predictable application flow.',
    github: '',
    demo: '',
  },
  {
    id: 'carepulse',
    title: 'CarePulse',
    tagline: 'AI Powered Telemedicine Platform',
    status: 'In Development',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    description:
      'CarePulse is a modern healthcare platform connecting patients and doctors through secure online consultations. The application provides appointment scheduling, doctor management, patient profiles, electronic prescriptions, and medical history tracking. The backend follows RESTful architecture with a scalable PostgreSQL design while the frontend delivers a seamless responsive experience. Current work includes advanced appointment scheduling, notification workflows, and role-based dashboards for patients, doctors, and administrators.',
    features: [
      'Patient Dashboard',
      'Doctor Dashboard',
      'Admin Dashboard',
      'Appointment Booking',
      'Medical Records',
      'Authentication',
      'Authorization',
      'Responsive Design',
      'REST APIs',
      'PostgreSQL',
      'JWT Authentication',
      'Prescription Module',
    ],
    challenge: 'Handling role-based authorization while maintaining reusable APIs.',
    solution: 'Implemented middleware-driven authorization, modular service architecture, and reusable frontend components.',
    github: '',
    demo: '',
  },
]

export const services = [
  { title: 'Enterprise Web Development', description: 'End-to-end web applications built on ASP.NET Core and React with clean, testable architecture.' },
  { title: 'REST API Development', description: 'Well-documented, versioned APIs designed around SOLID principles and predictable contracts.' },
  { title: 'Backend Architecture', description: 'Service boundaries, data models, and event-driven pipelines that scale with your team.' },
  { title: 'React & Angular Development', description: 'Reusable, accessible component libraries that cut duplicate UI work across products.' },
  { title: 'Database Design', description: 'Schema design and query optimization across PostgreSQL, MongoDB, MySQL and SQL Server.' },
  { title: 'AI & LLM Integration', description: 'Production LLM and AI-agent workflows that automate real operational tasks.' },
  { title: 'Microservices', description: 'Decomposing monoliths into resilient, independently deployable services.' },
  { title: 'Performance Optimization', description: 'Query tuning, indexing, and connection pooling that measurably cuts response times.' },
]

export const skills = {
  Frontend: ['React', 'Redux', 'Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'RxJS', 'Framer Motion'],
  Backend: ['ASP.NET Core', '.NET', 'Node.js', 'Express', 'Python', 'FastAPI', 'REST APIs', 'SignalR'],
  Database: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQL Server'],
  Messaging: ['RabbitMQ', 'Event Driven Architecture'],
  'Cloud & Tools': ['Git', 'GitHub', 'Azure DevOps', 'Visual Studio', 'VS Code', 'GitHub Copilot'],
  'Software Engineering': ['SOLID Principles', 'Design Patterns', 'Microservices', 'Agile', 'SDLC', 'OOP', 'Code Review', 'Automation Architecture', 'LLM Integration', 'AI Agents'],
}

export const achievements = {
  achievements: [
    { icon: 'trophy', label: 'Accenture Excellence Award (Extra Mile)' },
    { icon: 'medal', label: 'Ranked #1 During Accenture Training' },
    { icon: 'graduation', label: 'Smart Student Award (4 Consecutive Years)' },
    { icon: 'code', label: 'HackerRank Python Certified' },
    { icon: 'target', label: '2+ Years Professional Experience' },
  ],
  certifications: [
    { title: 'Python', issuer: 'HackerRank', status: 'Certified', link: '' },
    { title: 'AZ-900: Azure Fundamentals', issuer: 'Microsoft', status: 'Certified', link: '' },
    { title: 'AZ-204: Developing Solutions for Azure', issuer: 'Microsoft', status: 'Planned', link: '' },
    { title: 'Azure AI Engineer Associate', issuer: 'Microsoft', status: 'Planned', link: '' },
  ],
  codingProfiles: [
    { name: 'GitHub', handle: '@iamvijayragav', url: 'https://github.com/' },
    { name: 'LeetCode', handle: '@iamvijayragav', url: 'https://leetcode.com/' },
    { name: 'HackerRank', handle: 'Python Certified', url: 'https://www.hackerrank.com/' },
  ],
}
