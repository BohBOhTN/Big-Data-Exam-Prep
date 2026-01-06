# Big Data - QCM Exam Preparation Resources

## 📚 About This Repository

This repository contains **QCM (Multiple Choice Questions)** exam preparation materials for Big Data courses. It includes **280 questions** covering various Big Data topics including Hadoop, HDFS, MapReduce, and Hive.

**🆕 Now includes an interactive Quiz Web Application!**

## ⚠️ Disclaimer

**This repository is NOT created by Mohamed KOUBAA.**

This is an independent study resource created by **Baha Eddine Hamdi** to help students prepare for their Big Data exams.

## 🚀 Quick Start - Quiz App

The easiest way to study is using our interactive quiz application!

### Running the Quiz App

#### Option 1: Development Mode

```bash
# Navigate to the quiz app directory
cd quiz-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open your browser to `http://localhost:5173`

#### Option 2: Docker (Local Testing)

```bash
cd quiz-app

# Build and run with Docker Compose on port 777
docker-compose up -d --build

# Access at http://localhost:777
```

#### Option 3: Live on VPS

The app is automatically deployed to: **http://72.62.176.16:777** Running on 777 for good luck!🍀🍀

### Quiz App Features

- 🎯 **Topic Selection** - Choose from 7 Big Data topics
- 📊 **Custom Quiz Length** - Select 5 to 40+ questions
- ⏱️ **Timed Quizzes** - Track your completion time
- 🎨 **Beautiful UI** - Modern, animated dark theme
- 📈 **Detailed Results** - Per-topic performance analysis
- 💡 **Study Tips** - Helpful conseils for each question
- 📚 **PDF Recommendations** - Suggested study materials based on weak areas
- 🐳 **Docker Deployment** - Containerized with automated CI/CD


## 🛠️ How This Was Created

1. **Source Material**: The original course content was created by **Mohamed KOUBAA**
2. **Image Extraction**: Used the `extract_pdf_images.py` script to extract images from the course PDF files
3. **QCM Generation**: Generated prompts based on the extracted images to create comprehensive QCM exams in Markdown format
4. **JSON Conversion**: Converted markdown QCMs to structured JSON for the web app
5. **Quiz App**: Built with React + Vite for an interactive study experience

## 📂 Repository Structure

```
Big Data/
├── quiz-app/                      # 🆕 Interactive Quiz Web Application
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home/             # Topic selection page
│   │   │   ├── Quiz/             # Quiz/exam interface
│   │   │   └── Results/          # Results and recommendations
│   │   ├── components/
│   │   │   ├── common/           # Reusable components
│   │   │   ├── home/             # Home page components
│   │   │   ├── quiz/             # Quiz interface components
│   │   │   └── results/          # Results page components
│   │   ├── utils/
│   │   │   ├── constants.js      # App constants & mappings
│   │   │   └── helpers.js        # Utility functions
│   │   ├── App.jsx
│   │   └── App.css
│   ├── public/
│   │   ├── data/                 # QCM JSON files
│   │   └── pdfs/                 # Study material PDFs
│   ├── Dockerfile                # Multi-stage Docker build
│   ├── nginx.conf                # Nginx configuration for SPA
│   ├── docker-compose.yml        # Local Docker setup
│   ├── .dockerignore             # Docker ignore patterns
│   ├── README.md                 # Quiz app documentation
│   └── package.json
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Actions CI/CD pipeline
├── pdfs/                          # Original course PDFs
├── extracted_images/              # Images extracted from PDFs
│   ├── 1_IntroductionGenerale/
│   ├── 2_HadoopIntro/
│   ├── 3_HDFS/
│   ├── 4_MapReduce/
│   ├── Hive/
│   ├── Hive-Commandes/
│   └── TP-HadoopHDFS/
├── exams with correction/         # QCM Exam Files (Markdown)
│   ├── 1_IntroductionGenerale_exam/
│   ├── 2_HadoopIntro_exam/
│   ├── 3_HDFS_exam/
│   ├── 4_MapReduce_exam/
│   ├── Hive_exam/
│   ├── Hive-Commandes_exam/
│   └── TP-HadoopHDFS_exam/
├── qcm_json/                      # Structured QCM data (JSON)
│   ├── 1_IntroductionGenerale_qcm.json
│   ├── 2_HadoopIntro_qcm.json
│   ├── 3_HDFS_qcm.json
│   ├── 4_MapReduce_qcm.json
│   ├── Hive_qcm.json
│   ├── Hive-Commandes_qcm.json
│   ├── TP-HadoopHDFS_qcm.json
│   └── _index.json                # Summary/index file
├── extract_pdf_images.py          # Script to extract images from PDFs
├── extract_qcm_to_json.py         # Script to convert QCM markdown to JSON
└── README.md
```

## 📝 Exam Content

Each exam folder contains two files:
- **`qcm_questions.md`** - Questions only (for self-testing)
- **`qcm_questions_avec_corrections.md`** - Questions with answers and study tips

### Topics Covered

| Chapter | Topic | Questions |
|---------|-------|-----------|
| 1 | Introduction Générale au Big Data | 40 |
| 2 | Introduction à Hadoop | 40 |
| 3 | HDFS (Hadoop Distributed File System) | 40 |
| 4 | MapReduce | 40 |
| 5 | Hive | 40 |
| 6 | Hive - Commandes | 40 |
| 7 | TP Hadoop HDFS | 40 |
| **Total** | | **280** |

## 🎯 How to Use

1. Start with `qcm_questions.md` to test your knowledge
2. Check your answers in `qcm_questions_avec_corrections.md`
3. Review the 💡 tips for deeper understanding

## � Scripts

### `extract_pdf_images.py`
Extracts images from course PDF files for reference.

### `extract_qcm_to_json.py`
Converts QCM markdown files to structured JSON format.

**Usage:**
```bash
python extract_qcm_to_json.py
```

**JSON Output Structure:**
```json
{
  "topic_name": "Apache Hive",
  "topic_description": "Questions avec Corrections et Conseils",
  "author": "Mohamed KOUBAA",
  "num_questions": 40,
  "questions": [
    {
      "question_number": 1,
      "question_text": "Question text here",
      "options": [
        {"letter": "A", "text": "Option A", "is_correct": false},
        {"letter": "B", "text": "Option B", "is_correct": true}
      ],
      "correct_answer": "B",
      "conseil": "Study tip here"
    }
  ]
}
```

**Features:**
- Cleans markdown formatting (**, ✓, ✅, 💡, 🎯)
- Extracts all questions with options, correct answers, and conseils
- Generates index file with summary metadata

## 🖥️ Quiz App Tech Stack

The interactive quiz application is built with modern web technologies:

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Navigation
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons
- **React Confetti** - Celebration effects
- **Docker** - Containerization
- **Nginx** - Production web server

## 🐳 Deployment & CI/CD

The quiz application includes:

- **Automated Deployment**: GitHub Actions pipeline triggers on push to `main`
- **Docker Containerization**: Multi-stage builds for optimized image size
- **VPS Deployment**: Automatically deployed to port 777 on your VPS
- **Health Checks**: Container monitoring and auto-recovery
- **Zero-Downtime**: Seamless updates without service interruption

### Deployment Architecture

```
GitHub Repository
    ↓
Push to main (quiz-app/* changes)
    ↓
GitHub Actions Workflow
    ├─ Build Docker image
    ├─ Run tests
    └─ Transfer to VPS
    ↓
VPS (72.62.176.16:777)
    └─ Deploy Docker container
```

### Accessing the Deployed App

- **Development**: `http://localhost:5173` (after `npm run dev`)
- **Local Docker**: `http://localhost:777` (after `docker-compose up`)
- **Live VPS**: `http://72.62.176.16:777` 🚀

## 👤 Author

**Baha Eddine Hamdi**

## 🙏 Acknowledgments

- Course content by **Mohamed KOUBAA**
- QCM generation assisted by AI tools

## 📄 License

This repository is for educational purposes only. The original course content belongs to Mohamed KOUBAA.

---

*Good luck with your exams! 🍀*
