# 🎯 Big Data Quiz Master

An interactive web application for Big Data exam preparation, featuring 280 QCM questions across 7 topics.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=flat-square&logo=vite)
![License](https://img.shields.io/badge/License-Educational-green?style=flat-square)

## ⚠️ Disclaimer

This is an **unofficial study tool** created from Big Data course content. It may contain errors. Use it as a supplement to your studies, not as a primary source.

**Original course content by Mohamed KOUBAA**  
**Quiz App developed by [BohBOhTN](https://github.com/BohBOhTN)**

## ✨ Features

- 🎯 **Topic Selection** - Choose from 7 Big Data topics
- 📊 **Custom Quiz Length** - Select 5 to 40+ questions
- 🔀 **Randomized Questions** - Fisher-Yates shuffle for true randomness
- ⏱️ **Timed Quizzes** - Track your completion time
- 🎨 **Modern UI** - Beautiful animated dark theme
- 📱 **Fully Responsive** - Works on desktop and mobile
- 📈 **Detailed Results** - Per-topic performance analysis
- 💡 **Study Tips** - Helpful conseils for each question
- 📚 **PDF Downloads** - Recommended study materials based on weak areas
- ❌ **Cancel Quiz** - Option to abandon with confirmation modal

## 📚 Topics Covered

| Topic | Questions |
|-------|-----------|
| Introduction Générale au Big Data | 40 |
| Introduction à Hadoop | 40 |
| HDFS (Hadoop Distributed File System) | 40 |
| MapReduce | 40 |
| Apache Hive | 40 |
| Hive Commandes | 40 |
| TP Hadoop HDFS | 40 |
| **Total** | **280** |

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
│   ├── data/                    # QCM JSON files
│   │   ├── _index.json
│   │   ├── 1_IntroductionGenerale_qcm.json
│   │   ├── 2_HadoopIntro_qcm.json
│   │   └── ...
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
│   │   │   ├── QuestionCard/
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

### Adding New Topics

1. Add your QCM JSON file to `public/data/`
2. Update `public/data/_index.json` with the new file
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

All quiz questions are derived from the **"Framework et technologies Big Data"** course materials available on **Moodle**. The original course content was created by **Mohamed KOUBAA**.

## 📄 License

This project is for **educational purposes only**. The original course content belongs to Mohamed KOUBAA.

## 👤 Author

**Baha Eddine Hamdi** - [@BohBOhTN](https://github.com/BohBOhTN)

---

*Good luck with your exams! 🍀*
