
import {
  FaPython,
  FaJava,
  FaJs,
  FaPhp,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from 'react-icons/fa'

import {
  SiC,
  SiCplusplus,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPytorch,
  SiScikitlearn,
  SiVercel,
} from 'react-icons/si'

export const skillCategories = [
  {
    title: 'Programming Languages',
    description: 'Languages I use to learn programming concepts and solve problems.',
    skills: [
      { name: 'Python', icon: FaPython },
      { name: 'C', icon: SiC },
      { name: 'C++', icon: SiCplusplus },
      { name: 'Java', icon: FaJava },
      { name: 'JavaScript', icon: FaJs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'PHP', icon: FaPhp },
    ],
  },
  {
    title: 'Frontend Development',
    description: 'Technologies for building responsive and interactive interfaces.',
    skills: [
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
      { name: 'React', icon: FaReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    title: 'Backend Development',
    description: 'Tools and technologies for server-side development and data storage.',
    skills: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'MongoDB', icon: SiMongodb },
    ],
  },
  {
    title: 'AI & Machine Learning',
    description: 'Libraries for machine learning experiments and model development.',
    skills: [
      { name: 'PyTorch', icon: SiPytorch },
      { name: 'scikit-learn', icon: SiScikitlearn },
    ],
  },
  {
    title: 'Tools & Platforms',
    description: 'Tools I use for version control, design, and deployment.',
    skills: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
      { name: 'Vercel', icon: SiVercel },
      { name: 'Figma', icon: FaFigma },
    ],
  },
]
