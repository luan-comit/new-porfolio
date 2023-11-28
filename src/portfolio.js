const header = {
  avatar: 'https://www.dropbox.com/scl/fi/cx09yj9nbjwcc1jahq01d/avatar2.jpeg?rlkey=3l7yjngm4o5yrnqzfk1511vd1&raw=1'
}

const about = {
  name: 'Luan Le',
  role: 'Full Stack Developer',
  description:
    'Passionate about building state-of-the-art applications, skilled in both frontend and backend, familiar with different domains including digital banking/fintech, telecom infrastructure, IT managed service, cloud computing, large-scale network and system operations. Open minded in new IT tech-stacks, process-oriented, service-oriented, problem-solving, teamwork.',
  resume: 'https://www.dropbox.com/scl/fi/xxa00bm83jkwzvhpl4ve6/Viet-Thanh-Luan-Le-Resume.pdf?rlkey=wi3gd40exzmb86p3vg25z19ha&raw=1',
  social: {
    linkedin: 'https://www.linkedin.com/in/luan-le-1b1a40220/',
    github: 'https://github.com/luan-comit',
  },
}

const projects = [
  {
    name: 'Price Monitor',
    description:
      'A backend API that allows fetching hot-deal items from BestBuy, Kijiji or Amazon, tracking price changes, and then storing them into database for selling.',
    stack: ['NodeJS', 'JavaScript', 'Express JS', 'MongoDB', 'Docker Container', 'Heroku Cloud', 'Paypal/Stripe Payment Integration'],
    sourceCode: 'https://github.com/luan-comit/pm-api',
    livePreview: 'https://pm-api.luanle.online',
  },
  {
    name: 'Shop & Payments',
    description:
      'A web portal for online shopping with cart and payment integrated with Paypal and Stripe.',
    stack: ['JavaScript', 'Express JS', 'LocalStorage', 'Vercel Cloud', 'Paypal/Stripe Client integration'],
    sourceCode: 'https://github.com/luan-comit/pm-web-portal',
    livePreview: 'https://store.luanle.online',
  },
  {
    name: 'Broken Rice Restaurant',
    description:
      'A frontend and backend application running parallel to manage food recipes for a restaurant, demo data is for a Vietnamese Broken Rice restaurant but can be easily deployed for other recipes and extended with more features.',
    stack: ['SASS', 'TypeScript', 'React', 'Mui & Formik', 'GraphQL', 'MongoDB', 'Docker Container', 'Vercel Cloud'],
    sourceCode: 'https://github.com/luan-comit/foodshop-graphql',
    livePreview: 'https://foodshop.luanle.online',
  },
]

const skills = [
  'NodeJS',
  'GraphQL',
  'MongoDB',
  'ExpressJS',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest, Vitest',
  'Terraform',
  'SASS',
  'AWS',
  'Azure',
  'GCP',
  'Docker/Container',
  'Heroku, Vercel',
]

const contact = {
  email: 'luanlvt@gmail.com',
}

export { header, about, projects, skills, contact }
