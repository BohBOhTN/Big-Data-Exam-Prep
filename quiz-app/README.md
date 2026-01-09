# 🎯 Quiz Master - Big Data & React

An interactive web application for exam preparation, featuring **480 QCM questions** across **2 modules** (Big Data & React).

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=flat-square&logo=vite)
![License](https://img.shields.io/badge/License-Educational-green?style=flat-square)

## ⚠️ Disclaimer

This is an **unofficial study tool** created from course content. It may contain errors. Use it as a supplement to your studies, not as a primary source.

### Credits

| Module | Course Authors | Platform |
|--------|---------------|----------|
| **Big Data** | Mohamed KOUBAA | Moodle - "Framework et technologies Big Data" |
| **React** | Ahmed Fakhfakh, Mohamed Bouattour | Google Classroom - "FRAMEWORK FRONTEND" |

**Quiz App developed by [BohBOhTN](https://github.com/BohBOhTN)**

## ✨ Features

- 🎯 **Multi-Module Support** - Choose between Big Data or React
- 📚 **Topic Selection** - Choose from 12 topics across both modules
- 📊 **Custom Quiz Length** - Select 5 to 40+ questions
- 🔀 **Randomized Questions** - Fisher-Yates shuffle for true randomness
- ⏱️ **Timed Quizzes** - Track your completion time
- 🎨 **Modern UI** - Beautiful animated dark theme
- 📱 **Fully Responsive** - Works on desktop and mobile
- 📈 **Detailed Results** - Per-topic performance analysis
- 💡 **Smart Hints** - Tips during quiz (React), explanations in results
- 📚 **Resource Recommendations** - Study materials based on weak areas
- ❌ **Cancel Quiz** - Option to abandon with confirmation modal

## 📚 Modules & Topics

### Big Data Module (280 questions)
| Topic | Questions |
|-------|-----------|
| Introduction Générale au Big Data | 40 |
| Introduction à Hadoop | 40 |
| HDFS (Hadoop Distributed File System) | 40 |
| MapReduce | 40 |
| Apache Hive | 40 |
| Hive Commandes | 40 |
| TP Hadoop HDFS | 40 |

### React Module (200 questions)
| Topic | Questions |
|-------|-----------|
| Principes de React | 40 |
| Le CSS en React | 40 |
| Liaison avec les API | 40 |
| Gestion des Interfaces | 40 |
| Hébergement React | 40 |

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Docker & Docker Compose (for containerized deployment)

### Installation

```bash
# Clone the repository
git clone https://github.com/BohBOhTN/Big-Data-Exam-Prep.git

# Navigate to the quiz app
cd Big-Data-Exam-Prep/quiz-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open your browser to `http://localhost:5173`

### Build for Production

```bash
# Build the app
npm run build

# Preview the build
npm run preview
```

### Docker Deployment

#### Local Testing with Docker Compose

```bash
# Build and run the Docker container locally on port 777
docker-compose up -d --build

# View logs
docker-compose logs -f quiz-app

# Stop the container
docker-compose down
```

Visit: `http://localhost:777`

#### Manual Docker Build

```bash
# Build the image
docker build -t bigdata-quiz-app:latest .

# Run the container
docker run -d -p 777:80 --name quiz-app bigdata-quiz-app:latest

# Stop the container
docker stop quiz-app
docker rm quiz-app
```

#### VPS Deployment

The application is automatically deployed to the VPS via GitHub Actions when changes are pushed to the main branch.

**Requirements:**
- VPS with Docker installed
- SSH access configured
- GitHub Secrets configured (VPS_HOST, VPS_USERNAME, VPS_SSH_KEY, VPS_SSH_PORT)

**Access your deployed app:** `http://72.62.176.16:777`

## 🏗️ Project Structure

```
quiz-app/
├── public/
│   ├── data/
│   │   ├── modules/             # Module index files
│   │   │   ├── _modules.json    # Master module list
│   │   │   ├── bigdata_index.json
│   │   │   └── react_index.json
│   │   ├── *_qcm.json           # Big Data QCM files
│   │   ├── *.json               # React QCM files
│   │   └── _index.json          # Legacy index (Big Data)
│   └── pdfs/                    # PDF study materials
├── src/
│   ├── components/
│   │   ├── common/              # Shared components
│   │   │   ├── LoadingSpinner/
│   │   │   ├── Modal/
│   │   │   ├── ProgressBar/
│   │   │   └── Footer/
│   │   ├── home/                # Home page components
│   │   │   ├── Hero/
│   │   │   ├── TopicCard/
│   │   │   ├── QuestionCountSelector/
│   │   │   └── Disclaimer/
│   │   ├── quiz/                # Quiz page components
│   │   │   ├── QuizHeader/
│   │   │   ├── QuestionCard/    # With tip toggle for React
│   │   │   ├── OptionButton/
│   │   │   ├── QuestionNavigator/
│   │   │   └── QuizNavigation/
│   │   └── results/             # Results page components
│   │       ├── ScoreCircle/
│   │       ├── StatCard/
│   │       ├── TopicPerformanceItem/
│   │       ├── QuestionReview/
│   │       └── RecommendationCard/
│   ├── pages/
│   │   ├── ModuleSelector/      # Module selection (Big Data / React)
│   │   ├── Home/                # Topic selection & configuration
│   │   ├── Quiz/                # Quiz interface
│   │   └── Results/             # Results & recommendations
│   ├── utils/
│   │   ├── constants.js         # App constants & mappings
│   │   └── helpers.js           # Utility functions
│   ├── App.jsx
│   └── App.css                  # Global styles & CSS variables
└── package.json
```

## 🛠️ Tech Stack

- **[React 18](https://react.dev/)** - UI library
- **[Vite](https://vitejs.dev/)** - Build tool and dev server
- **[React Router](https://reactrouter.com/)** - Client-side routing
- **[Framer Motion](https://www.framer.com/motion/)** - Animations
- **[Lucide React](https://lucide.dev/)** - Beautiful icons
- **[React Confetti](https://www.npmjs.com/package/react-confetti)** - Celebration effects
- **[Docker](https://www.docker.com/)** - Containerization
- **[Nginx](https://nginx.org/)** - Web server for production

## 🐳 Docker & Deployment

### Architecture

```
Multi-stage Docker Build:
1. Build Stage: Node.js 20 Alpine - Builds React app
2. Production Stage: Nginx Alpine - Serves compiled assets
3. Nginx Configuration: SPA routing, gzip, strategic caching
4. Deployment: GitHub Actions → VPS with auto-scaling
```

### Docker Files

- **`Dockerfile`** - Multi-stage build optimized for production
- **`nginx.conf`** - Nginx server configuration with SPA routing
- **`docker-compose.yml`** - Local development environment
- **`.dockerignore`** - Excludes unnecessary files from image

### Deployment Flow

```
Push to main → GitHub Actions → Build Docker image 
  → Transfer to VPS → Deploy container on port 777
```

### Features

✅ Automated CI/CD pipeline  
✅ Multi-stage Docker build for minimal image size  
✅ Health checks for container monitoring  
✅ Automatic rollback on failure    
✅ Gzip compression enabled  
✅ Strategic caching for assets  
✅ React Router SPA support

## 🎨 Customization

### Adding New Modules

1. Create module index file in `public/data/modules/`
2. Add module entry to `public/data/modules/_modules.json`
3. Add QCM JSON files to `public/data/`
4. Add topic icons and colors in `src/utils/constants.js`
5. Update module config in `src/pages/Home/Home.jsx` if needed

### Adding New Topics to Existing Module

1. Add your QCM JSON file to `public/data/`
2. Update the module index file in `public/data/modules/`
3. Add topic icon and color in `src/utils/constants.js`
4. Add PDF mapping if applicable

### Changing Theme

Edit CSS variables in `src/App.css`:

```css
:root {
  --primary: #6366f1;
  --secondary: #10b981;
  --bg-dark: #0f172a;
  --bg-card: #1e293b;
  /* ... */
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Data Source

### Big Data Module
- **Platform**: Moodle - "Framework et technologies Big Data"
- **Course Author**: Mohamed KOUBAA

### React Module
- **Platform**: Google Classroom - "FRAMEWORK FRONTEND"
- **Course Authors**: Ahmed Fakhfakh, Mohamed Bouattour

## 📄 License

This project is for **educational purposes only**. The original course content belongs to their respective authors.

## 👤 Author

**Baha Eddine Hamdi** - [@BohBOhTN](https://github.com/BohBOhTN)

---

*Good luck with your exams! 🍀*
