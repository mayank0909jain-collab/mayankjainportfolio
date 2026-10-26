/**
 * Project data for Mayank Jain's Developer Portfolio
 * Based on authentic project achievements and tech stacks.
 * URLs are strictly real or omitted per instructions.
 */

export const projects = [
  {
    id: 'mern-book-shop',
    title: 'MERN Book Shopping Application',
    tagline: 'Full-Stack Digital Bookstore & Cart Experience',
    category: 'Full Stack Web',
    description: 'Developed a full-stack e-commerce platform for browsing and purchasing books online with secure authentication and dynamic state management.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Tailwind CSS'],
    features: [
      'JWT-based secure authentication and protected routes',
      'Dynamic shopping cart management with real-time total calculation',
      'Full-stack client-server architecture with RESTful API endpoints',
      'Seamless book catalog browsing with category filtering'
    ],
    highlight: 'Full Stack Architecture',
    accentColor: '#5B7CFF',
    visualType: 'ecommerce',
    // Set to valid repository URL or null if not yet publicly linked
    githubUrl: 'https://github.com/mayank0909jain-collab',
    demoUrl: null, // No fabricated demo URLs
  },
  {
    id: 'car-price-prediction',
    title: 'Car Price Prediction Model',
    tagline: 'Supervised ML Regression Engine',
    category: 'Machine Learning',
    description: 'Built a machine learning regression model to predict used car prices through automated data preprocessing, feature engineering, and robust model validation.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    features: [
      'Comprehensive data preprocessing and outlier treatment',
      'Regression-based price prediction pipelines',
      'Rigorous model evaluation using RMSE and R² score metrics',
      'Feature correlation analysis across vehicle specifications'
    ],
    highlight: 'RMSE & R² Evaluation',
    accentColor: '#A855F7',
    visualType: 'automotive',
    githubUrl: 'https://github.com/mayank0909jain-collab',
    demoUrl: null,
  },
  {
    id: 'ai-blood-report-analyzer',
    title: 'AI Blood Report Analyzer',
    tagline: 'LLM & Retrieval-Augmented Generation Platform',
    category: 'Generative AI',
    description: 'Built an AI-powered application that analyzes uploaded blood reports and uses large language models with retrieval-augmented generation to help interpret report information.',
    disclaimer: 'Designed to support understanding of medical report information, not to replace professional medical advice.',
    technologies: ['LangChain', 'RAG', 'Streamlit', 'Python', 'LLMs'],
    features: [
      'Blood report document upload and smart contextual parsing',
      'LLM-powered key biomarker and metric information extraction',
      'RAG-based information retrieval against verified knowledge bases',
      'Interactive Streamlit user interface with accessible clinical summaries'
    ],
    highlight: 'RAG Knowledge Pipeline',
    accentColor: '#EC4899',
    visualType: 'medical-ai',
    githubUrl: 'https://github.com/mayank0909jain-collab',
    demoUrl: null,
  },
  {
    id: 'potato-plant-disease',
    title: 'Potato Plant Disease Detection',
    tagline: 'Deep Learning Computer Vision Classifier',
    category: 'Computer Vision & Deep Learning',
    description: 'Built a CNN-based machine learning model to classify potato leaf diseases, helping detect early blight and late blight symptoms accurately.',
    technologies: ['TensorFlow', 'CNN', 'OpenCV', 'Python', 'Keras'],
    features: [
      'Image-based plant disease classification across diverse leaf stages',
      'Convolutional Neural Network (CNN) multi-layer feature extraction',
      'Data augmentation pipelines to maximize model generalization',
      'Computer vision image preprocessing with OpenCV filters'
    ],
    highlight: 'Convolutional Neural Networks',
    accentColor: '#10B981',
    visualType: 'leaf-cv',
    githubUrl: 'https://github.com/mayank0909jain-collab',
    demoUrl: null,
  }
];

export const personalInfo = {
  name: 'Mayank Jain',
  title: 'Machine Learning Developer | MERN Stack Developer | Generative AI Enthusiast',
  titles: [
    'Machine Learning Developer',
    'MERN Stack Developer',
    'Generative AI Enthusiast'
  ],
  email: 'mayank0909jain@gmail.com',
  phone: '+91 96853 63384',
  github: 'https://github.com/mayank0909jain-collab',
  linkedin: 'https://linkedin.com/in/mayank-jain-961a0b33a',
  education: {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'BGIEM University (RGPV), Madhya Pradesh',
    duration: '2024–2028 (Pursuing)',
    cgpa: '7.42',
    currentYear: '1st / 2nd Year B.Tech CSE'
  },
  careerObjective: 'I am a Computer Science student skilled in MERN Stack development and Machine Learning. I am passionate about building scalable web applications and AI-powered solutions. I am looking for internship opportunities where I can apply my development and machine learning skills to real-world projects.',
  about: "I'm Mayank Jain, a Computer Science and Engineering student passionate about software development, machine learning, and Generative AI. I enjoy building practical applications that solve real-world problems, from full-stack web platforms to intelligent systems powered by machine learning and language models.",
  achievements: [
    {
      id: 'cricket',
      title: 'Under-17 Division Level Cricketer',
      subtitle: 'Sports Excellence & Athletic Leadership',
      description: 'Represented the division in competitive cricket tournaments, demonstrating discipline, team coordination, and strategic decision-making under high-pressure scenarios.',
      category: 'Athletics & Sportsmanship',
      badge: 'Divisional Representative',
      icon: 'Trophy'
    },
    {
      id: 'sih',
      title: 'Smart India Hackathon Participant',
      subtitle: 'National Level Innovation Hackathon',
      description: 'Collaborated with a team to develop an innovative solution to a real-world problem during the national-level hackathon, engineering end-to-end prototypes within rigorous time constraints.',
      category: 'National Hackathon',
      badge: 'SIH Participant',
      icon: 'Lightbulb'
    }
  ]
};

export const skillCategories = [
  {
    category: 'Frontend Development',
    icon: 'Layout',
    color: '#5B7CFF',
    skills: [
      { name: 'React.js', icon: 'SiReact', color: '#61DAFB' },
      { name: 'JavaScript', icon: 'SiJavascript', color: '#F7DF1E' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss', color: '#38BDF8' },
      { name: 'HTML5', icon: 'SiHtml5', color: '#E34F26' },
      { name: 'CSS3', icon: 'SiCss3', color: '#1572B6' }
    ]
  },
  {
    category: 'Backend & APIs',
    icon: 'Server',
    color: '#A855F7',
    skills: [
      { name: 'Node.js', icon: 'SiNodedotjs', color: '#5FA04E' },
      { name: 'Express.js', icon: 'SiExpress', color: '#FFFFFF' },
      { name: 'REST APIs', icon: 'TbApi', color: '#5B7CFF' }
    ]
  },
  {
    category: 'Databases',
    icon: 'Database',
    color: '#10B981',
    skills: [
      { name: 'MongoDB', icon: 'SiMongodb', color: '#47A248' }
    ]
  },
  {
    category: 'Machine Learning & AI',
    icon: 'Brain',
    color: '#F59E0B',
    skills: [
      { name: 'Machine Learning', icon: 'Brain', color: '#EC4899' },
      { name: 'Deep Learning', icon: 'Cpu', color: '#A855F7' },
      { name: 'LangChain', icon: 'SiLangchain', color: '#FFFFFF' },
      { name: 'CNN', icon: 'Layers', color: '#38BDF8' },
      { name: 'NLP', icon: 'MessageSquareCode', color: '#34D399' }
    ]
  },
  {
    category: 'Programming & Foundations',
    icon: 'Code2',
    color: '#3B82F6',
    skills: [
      { name: 'Python', icon: 'SiPython', color: '#3776AB' },
      { name: 'Java', icon: 'SiOpenjdk', color: '#EA2D2E' },
      { name: 'Data Structures & Algorithms', icon: 'Binary', color: '#A855F7' }
    ]
  },
  {
    category: 'Developer Tools',
    icon: 'Wrench',
    color: '#EC4899',
    skills: [
      { name: 'Git', icon: 'SiGit', color: '#F05032' },
      { name: 'GitHub', icon: 'SiGithub', color: '#FFFFFF' },
      { name: 'VS Code', icon: 'VscCode', color: '#007ACC' },
      { name: 'Postman', icon: 'SiPostman', color: '#FF6C37' }
    ]
  }
];
