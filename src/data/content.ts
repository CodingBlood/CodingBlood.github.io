// Every fact here comes from PORTFOLIO_CONTEXT.md and the resumes. Don't add numbers that aren't there.

export const person = {
  name: 'Kartik Agarwal',
  study: 'MSc Data Science and Artificial Intelligence Technology, TU Delft',
  headline: 'Software engineer, moving into production AI.',
  intro:
    'Two and a half years as a Security Engineer at CME Group in Bengaluru, building the automation and policy layer behind every cloud deployment. Now a master’s student at TU Delft, working part-time on a research sensor portal for the university.',
  location: 'Delft, Netherlands',
  email: 'saraansh48@gmail.com',
  phone: '+31 6 10647885',
  phoneHref: 'tel:+31610647885',
  github: 'https://github.com/CodingBlood',
  linkedin: 'https://www.linkedin.com/in/kartik-agarwal-9a03911b6/',
  leetcode: 'https://leetcode.com/u/Kartik__Agarwal/',
  resume: '/Kartik-Agarwal-Resume.pdf',
  lookingFor: [
    'An internship in summer 2027, in production AI, ML engineering or MLOps.',
    'A master\u2019s thesis project with a company or lab, starting in 2027.',
    'Also open to software, data and platform engineering roles.',
  ],
}

// Where the site is published. Used by the share codes and the link page.
// Change this if the site moves to a custom domain.
export const SITE_URL = 'https://codingblood.github.io'

export const shareLinks = [
  { id: 'links', label: 'All links', url: SITE_URL + '/links' },
  { id: 'site', label: 'Portfolio', url: SITE_URL },
  { id: 'resume', label: 'Resume (PDF)', url: SITE_URL + person.resume },
  { id: 'linkedin', label: 'LinkedIn', url: person.linkedin },
  { id: 'github', label: 'GitHub', url: person.github },
  { id: 'email', label: 'Email', url: 'mailto:' + person.email },
  { id: 'phone', label: 'Phone', url: person.phoneHref },
  { id: 'leetcode', label: 'LeetCode', url: person.leetcode },
]

// Logos live in public/logos/. `bleed` marks a logo that fills its own square
// background (shown edge to edge); the rest sit on white with padding.
// `tile` sets a background colour behind a padded logo.
export type Org = { name: string; mono: string; logo?: string; bleed?: boolean; tile?: string }

export const orgs: Record<string, Org> = {
  cme: { name: 'CME Group', mono: 'CME', logo: '/logos/cme.png', bleed: true },
  tud: { name: 'TU Delft', mono: 'TU', logo: '/logos/tud.png' },
  kiit: { name: 'KIIT', mono: 'K', logo: '/logos/kiit.png' },
  akon: { name: 'Akon Group of Industries', mono: 'A', logo: '/logos/akon.png', bleed: true },
  iitj: { name: 'IIT Jammu', mono: 'IIT', logo: '/logos/iitj.png' },
  iiti: { name: 'IIT Indore', mono: 'IIT', logo: '/logos/iiti.png' },
  // Cream on CD4CW blue, the pairing the CD4CW logo manual allows.
  cd4cw: { name: 'CD4CW', mono: 'CD4CW', logo: '/logos/cd4cw-cream.svg', tile: '#3368A0' },
}

// The short version, in order. Shown in the pinned dark tile under the hero.
export const timeline = [
  { year: '2020', title: 'KIIT University', text: 'B.Tech in Computer Science Engineering, Bhubaneswar. Graduated with a CGPA of 9.31.', orgs: ['kiit'] },
  { year: '2021', title: 'Akon Group of Industries', text: 'Developer intern in Mumbai: computer vision for an autonomous car on ROS.', orgs: ['akon'] },
  { year: '2023', title: 'IIT Jammu and IIT Indore', text: 'Research internships in time series analysis and NLP. Three papers published by 2024.', orgs: ['iitj', 'iiti'] },
  { year: '2024', title: 'CME Group', text: 'Security Engineer in Bengaluru. Built the self-service deployment portal, CME Excellence Award.', orgs: ['cme'] },
  { year: '2026', title: 'TU Delft', text: 'MSc Data Science and AI Technology, and part-time developer on the CD4CW sensor portal.', orgs: ['tud', 'cd4cw'], link: { href: 'https://cd4cw.vercel.app', label: 'cd4cw.vercel.app' } },
]

export type Job = {
  org: string
  live?: { href: string; label: string }
  company: string
  role: string
  place: string
  when: string
  summary: string
  points: string[]
  stack: string[]
}

export const jobs: Job[] = [
  {
    org: 'cme',
    company: 'CME Group',
    role: 'Security Engineer, DevSecOps',
    place: 'Bengaluru, India',
    when: 'Jan 2024 to Jul 2026',
    summary:
      'Global Information Security, Open Policy Agent team, at the world’s largest derivatives exchange. Early traineeship in Bhubaneswar (Oct to Dec 2023), then intern, Security Engineer 1 and Security Engineer 2 in Bengaluru.',
    points: [
      'Pitched, designed and built a self-service portal that automates GCP resource deployments and exception approvals. Turnaround went from about 1.5 weeks to about 2 days, at 5 to 10 requests a day at peak. CME Excellence Award.',
      'The portal: Jira webhooks into Argo Events, a Python Argo Workflow that clones the repo, edits the YAML, commits and opens the PR, and Spotify Backstage templates as the front end.',
      'Wrote 150+ Rego policies that check every cloud deployment request across all of CME’s GCP projects, enforced in CI on Terraform and Config Connector plans and at Kubernetes admission with Gatekeeper.',
      'Maintained Argo Workflows and Jenkins pipelines for Terraform and Config Connector deployments, with Python checks that verify each deployment after it lands.',
      'Worked on UDAP, which moves data from GCS buckets across projects into BigQuery through log sinks. First prize in an internal global data-analytics hackathon using SQL and Looker.',
      'Worked around futures and options and earned the NSE NCFM certification.',
    ],
    stack: ['GCP', 'Kubernetes', 'Open Policy Agent', 'Rego', 'Argo Workflows', 'Argo Events', 'Jenkins', 'Terraform', 'Backstage', 'Python', 'BigQuery', 'Looker'],
  },
  {
    org: 'tud',
    live: { href: 'https://cd4cw.vercel.app', label: 'Open the CD4CW portal' },
    company: 'TU Delft',
    role: 'Technical Assistant and Web Developer',
    place: 'Delft, Netherlands',
    when: 'Sep 2026 to present, 16 hours a week',
    summary:
      'Weather Sensor Portal for CD4CW (Clean Data 4 Clean Weather): a proof-of-concept registry of the research weather sensors on campus, so researchers can see which stations exist, where they are, who owns them and what state they are in.',
    points: [
      'Built the React and Vite front end: a Leaflet and OpenStreetMap campus map, a searchable registry with URL-based filters and JSON export, and role-based dashboards for four user roles. UI tests in Playwright.',
      'Designed the 16-table PostgreSQL schema: role hierarchy, stations, a controlled vocabulary, and full status, location and ownership history.',
      'Containerised the four-service stack (PostgreSQL, FastAPI, Vite, nginx) with Docker Compose and deployed it on Vercel, Render and Neon.',
    ],
    stack: ['React', 'Vite', 'Leaflet', 'FastAPI', 'PostgreSQL', 'Docker Compose', 'nginx', 'Playwright', 'Vercel', 'Render', 'Neon'],
  },
  {
    org: 'akon',
    company: 'Akon Group of Industries',
    role: 'Developer Intern',
    place: 'Mumbai, India',
    when: 'Jun 2021 to Nov 2021',
    summary: 'Software for an autonomous car, built on ROS.',
    points: [
      'Developed a ROS-based integrated system for the car.',
      'Built the computer vision lane detection and object detection modules.',
    ],
    stack: ['ROS', 'OpenCV', 'Python', 'Computer vision'],
  },
]

export type Project = {
  title: string
  summary: string
  tags: string[]
  glyph: string
  // Optional brand artwork shown instead of the glyph.
  brand?: { src: string; bg: string; alt: string }
  live?: string
  // Tile colours: a light tint and the deeper shade of the same hue.
  tint: { bg: string; fg: string }
  href?: string
  more?: string
}

export const projects: Project[] = [
  {
    title: 'CD4CW Weather Sensor Portal',
    summary:
      'A registry for the research weather sensors at TU Delft. Campus map with every station, a searchable catalogue with URL filters and JSON export, dashboards for four user roles, and a 16-table PostgreSQL schema that keeps the history of each sensor’s status, location and owner. FastAPI behind it, four services in Docker Compose, deployed on Vercel, Render and Neon.',
    tags: ['React', 'Vite', 'Leaflet', 'FastAPI', 'PostgreSQL', 'Docker', 'Playwright'],
    glyph: '∇',
    brand: { src: '/logos/cd4cw-cream.svg', bg: '#3368A0', alt: 'CD4CW, Clean Data 4 Clean Weather' },
    live: 'https://cd4cw.vercel.app',
    tint: { bg: '#e2f3fa', fg: '#0090c0' },
  },
  {
    title: 'DialogGPT',
    summary:
      'A decoder transformer and training loop written from scratch in PyTorch to generate movie-style dialogue, served through FastAPI and React with Redis caching, MLflow tracking and a Kubernetes-ready Docker setup. In progress: currently fixing training stability and generation quality.',
    tags: ['PyTorch', 'FastAPI', 'React', 'Redis', 'MLflow', 'Docker', 'Kubernetes'],
    glyph: 'Σ',
    tint: { bg: '#eeeafc', fg: '#6a4bd6' },
    href: 'https://github.com/CodingBlood/DialogGPT',
    more: '/blog/dialoggpt-bugs',
  },
  {
    title: 'Self-service deployment portal',
    summary:
      'The internal CME tool that turned a 1.5-week change-request process into a 2-day one. Jira webhooks into Argo Events, a Python Argo Workflow that edits config and opens the PR, Backstage templates as the front end. Handled 5 to 10 requests a day at peak. Internal, so no code.',
    tags: ['Argo Workflows', 'Argo Events', 'Backstage', 'Python', 'GCP'],
    glyph: 'λ',
    tint: { bg: '#e4eef8', fg: '#0b5ea8' },
  },
  {
    title: 'Gesture Navigation System',
    summary:
      'Replaces mouse and keyboard with hand gestures: cursor control, a whiteboard and a small game, all driven by MediaPipe hand tracking over WebSockets. Group project with Aishwarya Bhattacharya and Anurag Rajak, Dec 2023 to May 2024.',
    tags: ['MediaPipe', 'OpenCV', 'PyGame', 'WebSockets', 'Python'],
    glyph: 'φ',
    tint: { bg: '#e4f4ea', fg: '#1d8a4c' },
    href: 'https://github.com/MLSAKIIT/Gesture-Navigation-System',
  },
  {
    title: 'Autonomous car',
    summary:
      'Lane detection and object detection for a student-built autonomous car with Team SWAG at KIIT, running ROS on an Nvidia Jetson TX2 with LiDAR. The same work continued at Akon Group of Industries.',
    tags: ['ROS', 'Jetson TX2', 'LiDAR', 'OpenCV'],
    glyph: '∫',
    tint: { bg: '#fbefdf', fg: '#c36f12' },
  },
]

export const research = [
  {
    title: 'Hate and hostility detection on social media',
    where: 'NLP Research Intern, IIT Indore, with Dr. Nagendra Kumar',
    when: 'Jun to Dec 2023',
    text: 'Optimized a GraphSAGE model over RoBERTa, HateBERT and CLIP embeddings with VADER sentiment and NRC lexicon features, at both sentence and word level. Beat the original model on all six datasets: 92% on Racism, 88% on Cyberbullying, 86% on Davidson, 82% on OLID, 76% on HateEval, 71% on Implicit Hate Corpus.',
    link: { href: 'https://docs.google.com/document/d/1pb_km7DuW1LjJxsYU68w2-395dE1JeSJYhDWOyntyAs/edit', label: 'Results write-up' },
  },
  {
    title: 'Time series analysis and cycle detection',
    where: 'Research Intern (RiseUp), IIT Jammu, with Dr. Vijay K. Pal',
    when: 'May to Jul 2023',
    text: 'Analysis of stock-market-like time series data, and a cycle detection algorithm for data from stretchable strain sensors. The sensor work became the IEEE CINE 2024 paper below.',
  },
  {
    title: 'Hardware security, sensors and image forensics',
    where: 'Research group of Dr. Mohit Ranjan Panda, KIIT',
    when: '2021 to 2024',
    text: 'Joined the group in the first years of the B.Tech. Three conference papers came out of it: physically unclonable functions, a stretchable strain sensor glove, and image forgery detection.',
  },
]

export const papers = [
  {
    venue: 'IEEE IC-CGU 2024',
    role: 'First author',
    title: 'Image Forgery Detection Using ELA Transformation and Convolutional Neural Network',
    text: 'Error Level Analysis exposes the compression differences a tampered region leaves behind; a CNN trained on the ELA output then classifies an image as authentic or forged. With Aishwarya Bhattacharya, Eshaan Anand and Dr. Mohit Ranjan Panda.',
    href: 'https://ieeexplore.ieee.org/document/10530697',
  },
  {
    venue: 'IEEE CINE 2024',
    role: 'First author',
    title: 'Fabrication and Data Analysis of Stretchable Sensor for Hand Gloves',
    text: 'How to fabricate a stretchable strain sensor for a glove, and how to analyse the signal it produces, including the cycle detection algorithm from IIT Jammu. Aimed at sports, defence and health uses. With Aishwarya Bhattacharya and Dr. Mohit Ranjan Panda.',
    href: 'https://ieeexplore.ieee.org/document/10881297',
  },
  {
    venue: 'Springer ACI 2024',
    role: 'Second author',
    title: 'Analysis and Characteristics of Physically Unclonable Functions',
    text: 'A study of PUFs, the hardware fingerprints used for device authentication, focused on the Anderson PUF. My first publication. With Aishwarya Bhattacharya and Dr. Mohit Ranjan Panda.',
    href: 'https://link.springer.com/chapter/10.1007/978-981-99-5015-7_57',
  },
]

// Ordered by time. Coordinates are [longitude, latitude].
export const journey: { city: string, note: string, coordinates: [number, number] }[] = [
  { city: 'Agra', note: 'Home', coordinates: [78.01, 27.18] },
  { city: 'Bhubaneswar', note: 'B.Tech at KIIT, 2020 to 2024', coordinates: [85.82, 20.3] },
  { city: 'Mumbai', note: 'Akon Group of Industries, 2021', coordinates: [72.88, 19.08] },
  { city: 'Jammu', note: 'Research at IIT Jammu, 2023', coordinates: [74.87, 32.73] },
  { city: 'Bengaluru', note: 'CME Group, 2024 to 2026', coordinates: [77.59, 12.97] },
  { city: 'Delft', note: 'TU Delft, 2026 onward', coordinates: [4.36, 52.01] },
]

export const education = [
  {
    org: 'tud',
    degree: 'MSc Data Science and Artificial Intelligence Technology',
    school: 'TU Delft',
    when: '2026 to 2028, expected',
    note: 'Courses so far: Machine and Deep Learning, Probabilistic AI and Reasoning, Formal Reasoning with Coq. Member of W.I.S.V. Christiaan Huygens. Thesis planned to start early, around May 2027.',
  },
  {
    org: 'kiit',
    degree: 'B.Tech Computer Science Engineering, CGPA 9.31/10',
    school: 'KIIT Deemed to be University, Bhubaneswar',
    when: '2020 to 2024',
    note: 'Research with Dr. Mohit Ranjan Panda from the first year onward, three conference papers, and most of the club work listed below.',
  },
]

export const skills = [
  { group: 'Languages', items: ['Python', 'Java', 'C++', 'SQL', 'Shell', 'Rego', 'JavaScript'] },
  { group: 'ML and AI', items: ['PyTorch', 'TensorFlow', 'Hugging Face', 'scikit-learn', 'NLP', 'Transformers', 'RAG', 'LangChain', 'LangGraph', 'MCP', 'MLflow', 'OpenCV', 'MediaPipe', 'GraphSAGE', 'Time series'] },
  { group: 'Backend and data', items: ['FastAPI', 'REST', 'Webhooks', 'Redis', 'PostgreSQL', 'MongoDB', 'BigQuery', 'Looker', 'pandas', 'NumPy'] },
  { group: 'Cloud and platform', items: ['GCP', 'Kubernetes', 'Docker', 'Terraform', 'Config Connector', 'Jenkins', 'Argo Workflows', 'Argo Events', 'Backstage', 'OPA', 'Gatekeeper', 'nginx', 'Linux', 'Git'] },
  { group: 'Frontend', items: ['React', 'Vite', 'Leaflet', 'Playwright'] },
]

export const leadership = [
  {
    org: 'Microsoft Learn Student Ambassadors, KIIT',
    role: 'Lead ML and Web Development Specialist',
    when: 'Jun 2021 to Dec 2023',
    points: [
      'Led a team of 25+ and mentored 3000+ students in machine learning, web development, NLP and data structures, on both projects and coursework.',
      'Organised the global hackathons Daedrus Hack and CodeVibe, about 800 participants each, and Kalki, an AR/VR and object detection showcase with a location-based scavenger hunt app.',
      'Ran technical trainings in MLOps and front-end development; built end-to-end projects in Project Wing 1 and 2 with teams across disciplines and universities.',
      'Standardised the club on Calendly, Notion, Discord and GitHub, and set up collaborations with the GeeksforGeeks club, the IoT KIIT community and Kreative Eye.',
    ],
  },
  {
    org: 'Google Developer Student Club, KIIT',
    role: 'Machine Learning Member',
    when: 'Nov 2021 to Aug 2022',
    points: ['Applied machine learning projects and knowledge-sharing sessions.'],
  },
  {
    org: 'Team SWAG (SWAyamchalit Gaadi)',
    role: 'Deep Learning Team Member',
    when: 'Dec 2020 to Oct 2021',
    points: ['Lane detection and object detection for the team’s autonomous car: ROS, Nvidia Jetson TX2, LiDAR.'],
  },
  {
    org: 'Rotary Club of Ukhra, District 3240',
    role: 'Social Service Volunteer',
    when: 'Jul 2021 to Jan 2023',
    points: ['COVID-19 support at local hospitals and communities: social distancing, oxygen cylinders and masks, and online awareness campaigns.'],
  },
]

export const awards = [
  'CME Group Excellence Award, for the self-service deployment portal',
  'First prize, CME internal global hackathon on market research and data analytics',
  'NSE NCFM certification, futures and options',
  'LeetCode rating 1864, Knight',
  'Gold and silver medals, SOF International Mathematics Olympiad, 2014 and 2015',
]
