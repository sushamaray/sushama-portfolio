
export const projectsData = [
  {
    id: 'bazardor',
    title: 'BazarDor',
    subtitle: 'Bangladesh Market Price Tracker',
    year: '2026',
    category: 'Fullstack',

    description:
      'BazarDor is a responsive web application that helps people explore and compare the prices of essential daily necessities in Bangladesh. It organizes products into categories and presents current prices, previous prices, and price-change indicators in a Bengali-friendly interface. The platform also provides authentication and personalized account features.',

    features: [
      'Market Price Dashboard — Explore essential products and their current prices from a centralized homepage.',
      'Product Catalog — View Bengali product names, measurement units, current prices, previous prices, and price-change indicators.',
      'Category-Based Browsing — Explore rice, lentils, oil, vegetables, fish, meat, eggs, spices, and other essential products.',
      'Price Trend Indicators — Identify products with rising or falling prices to make more informed purchasing decisions.',
      'Animated Price Ticker — Browse product prices and price changes through a scrolling ticker.',
      'Product Details — Open individual product pages to view additional product information.',
      'Authentication — Register and sign in using email and password, with Google and GitHub sign-in options.',
      'User Profile — Access an account area for user-related information.',
      'Responsive Bengali Interface — Navigate the application across desktop, tablet, and mobile screens.',
    ],

    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Better Auth',
      'MongoDB',
      'REST API',
      'Vercel',
      'Git',
      'GitHub',
    ],

    githubUrl: 'https://github.com/sushamaray/B14-A7-Bazar-Dor',
    liveUrl: 'https://bazar-dor-sand.vercel.app',
  },

  {
    id: 'fitlog',
    title: 'FitLog',
    subtitle: 'Workout Library & Personal Workout Planner',
    year: '2026',
    category: 'Fullstack',

    description:
      'FitLog is a responsive workout discovery and planning application built with Next.js. It retrieves workout information from a REST API and helps users explore exercises, understand workout requirements, create a daily workout plan, save exercises for later, and track completed workouts. Its dark, gym-inspired interface focuses on making workout organization simple and accessible.',

    features: [
      'Workout Library — Browse 12 API-powered workouts with images, muscle groups, equipment, duration, calories, and ratings.',
      'Workout Details — Explore exercise descriptions, difficulty levels, sets, repetitions, and step-by-step instructions.',
      'Daily Workout Planner — Build a personalized plan with a maximum of five workouts.',
      'Workout Statistics — Track exercise count, total workout duration, calories, and daily progress.',
      'Completion Tracking — Mark planned workouts as completed and remove exercises when needed.',
      'Save for Later — Maintain a separate collection of saved workouts and revisit their details.',
      'Workout Sorting — Organize the workout library by duration, calories burned, or rating.',
      'Interactive Feedback — Display toast notifications for actions such as saving workouts, updating plans, and marking exercises complete.',
      'LocalStorage Persistence — Preserve workout plans, saved exercises, and completion data across browser refreshes.',
      'Loading and Error Handling — Provide loading states and appropriate handling for missing workouts and invalid IDs.',
      'Responsive Interface — Support mobile, tablet, and desktop layouts.',
    ],

    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Lucide React',
      'React Toastify',
      'Next.js Image',
      'REST API',
      'LocalStorage',
    ],

    githubUrl: 'https://github.com/sushamaray/fit-log',
    liveUrl: 'https://fit-log-sushamaray.vercel.app/',
  },

  {
    id: 'borrowed',
    title: 'Borrowed',
    subtitle: 'AI-Assisted Peer-to-Peer Borrowing Platform',
    year: '2026',
    category: 'Fullstack',

    description:
      'Borrowed is a full-stack peer-to-peer lending platform designed to help people lend and borrow items within their communities. It brings together item discovery, borrowing requests, identity verification, communication, and return management in one platform. AI-assisted damage assessment and location-based Emergency SOS Borrowing extend the core lending workflow. Its software architecture analysis focuses on availability, controlled deployment, and energy efficiency.',

    features: [
      'Peer-to-Peer Item Marketplace — Allow users to list items for lending and discover items offered by other community members.',
      'Smart Item Search — Help users find relevant items through a streamlined discovery experience.',
      'Identity Verification — Support NID-based identity verification to help establish trust between borrowers and lenders.',
      'Borrowing and Return Management — Organize borrowing requests, transactions, item returns, and related workflows.',
      'AI-Powered Damage Detection — Compare before-and-after item images to help identify potential damage during returns.',
      'Real-Time Messaging — Facilitate communication between borrowers and lenders using Socket.io.',
      'Emergency SOS Borrowing — Support urgent item requests intended to connect users with nearby verified lenders.',
      'Dispute Management — Provide a structured area for handling issues associated with borrowed items.',
      'Notifications and Reviews — Support transaction updates, notifications, ratings, and reviews.',
      'Layered Architecture — The accompanying architecture document describes presentation, business, persistence, and database layers, with attention to availability, deployability, and energy efficiency.',
    ],

    technologies: [
      'Next.js',
      'React',
      'Node.js',
      'MySQL',
      'Tailwind CSS',
      'Google Gemini AI',
      'Socket.io',
      'Prisma ORM',
      'JWT Authentication',
    ],

    githubUrl: 'https://github.com/sushamaray/borrowed',
    liveUrl: '',
  },
]

export const otherProjectsData = [
  {
    id: 'mazeunit',
    title: 'MazeUnit',
    category: 'Algorithm Visualization',

    description:
      'An interactive maze and pathfinding visualization project that demonstrates how the A* Search Algorithm finds a path through a maze. It helps users explore algorithmic problem-solving through visual interaction.',

    technologies: ['A* Search', 'Pathfinding', 'Visualization'],

    githubUrl: 'https://github.com/sushamaray/MazeUnit',
  },

  {
    id: 'algovista',
    title: 'AlgoVista',
    category: 'Algorithm Visualization',

    description:
      'An animated algorithm and system visualizer designed to make complex concepts easier to understand. The project focuses on interactive visualizations, graph exploration, and a clean interface with light and dark themes.',

    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],

    githubUrl: 'https://github.com/sushamaray/algovista',
  },

  {
    id: 'exam-integrity-proctoring-system',
    title: 'Exam Integrity & Automated Proctoring System',
    category: 'Academic Project',

    description:
      'A secure online examination platform built with Java Spring Boot and React. Features automated proctoring through browser-event monitoring, real-time risk scoring, similarity-based cheating detection, dynamic question generation, automated MCQ grading, and faculty monitoring dashboards.',

    technologies: [
      'Java',
      'Spring Boot',
      'React',
      'WebSocket',
      'Object-Oriented Programming',
    ],

    githubUrl:
      'https://github.com/sushamaray/exam-integrity-proctoring-system',
  },

  {
    id: 'guess-the-creature',
    title: 'Guess the Creature',
    category: 'Game Development',

    description:
      'An interactive creature-guessing game that uses question-based logic to narrow down possible answers. It demonstrates programming logic and interactive problem-solving in a game format.',

    technologies: ['Java', 'Object-Oriented Programming'],

    githubUrl: 'https://github.com/sushamaray/guessthecreature',
  },
]
