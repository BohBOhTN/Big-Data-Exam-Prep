# Pull Request: Add React Module Support

## 📋 Summary

This PR adds a new **React module** to the Quiz Master application, transforming it from a single-module Big Data quiz app into a multi-module learning platform supporting both **Big Data** and **React (Frontend Framework)** courses.

## ✨ Features Added

### 1. Module Selection System
- New landing page (`/`) with module selector
- Beautiful card-based UI for choosing Big Data or React
- Displays module statistics (topics count, questions count)
- Animated transitions between modules

### 2. React Module Content
Added **5 new topics** with **200 questions total**:

| Topic | Questions | Source |
|-------|-----------|--------|
| Principes de React | 40 | CHAPITRE 2 - PRINCIPES DE REACT.pdf |
| Le CSS en React | 40 | WORKSHOP PORTFOLIO (2).pdf |
| Liaison avec les API | 40 | Chapitre 3 - Liaison avec les API dans REACT.pdf |
| Gestion des Interfaces | 40 | Chapitre 4 - Gestion des interfaces et opérations CRUD.pdf |
| Hébergement React | 40 | Workshop Complet Hébergement React.docx |

### 3. Smart Hint System (React Module)
- **During Quiz**: "Astuce" button to reveal tips for difficult questions
- **Results Page**: Full explanation shown for review
- Big Data module unchanged (conseil always visible)

### 4. Module-Aware Components
- **Disclaimer**: Different messages per module
  - Big Data: References Moodle course
  - React: References Google Classroom "FRAMEWORK FRONTEND"
- **Results Recommendations**: Module-specific resource sources
- **Home Page**: Dynamic title, subtitle, and accent colors per module

### 5. Question Format Normalization
- Handles two different JSON structures seamlessly
- Big Data format: `question_text`, `options[]` array, `conseil`
- React format: `question`, `options{}` object, `tip`, `explanation`
- Automatic conversion during quiz loading

## 📁 Files Changed

### New Files
```
quiz-app/src/pages/ModuleSelector/
├── ModuleSelector.jsx
├── ModuleSelector.css
└── index.js

quiz-app/public/data/modules/
├── _modules.json
├── bigdata_index.json
└── react_index.json

quiz-app/public/data/
├── principes_de_react.json
├── le_css_en_react.json
├── liaison_avec_les_api.json
├── gestion_des_interfaces.json
└── hebergement_react_workshop.json
```

### Modified Files
```
quiz-app/src/App.jsx                    # Updated routing
quiz-app/src/pages/Home/Home.jsx        # Module-aware topic loading
quiz-app/src/pages/Home/Home.css        # Back button styles
quiz-app/src/pages/Quiz/Quiz.jsx        # Question format normalization
quiz-app/src/pages/Results/Results.jsx  # Module-aware recommendations
quiz-app/src/pages/index.js             # Export ModuleSelector
quiz-app/src/utils/constants.js         # React icons, colors, mappings
quiz-app/src/components/home/Disclaimer.jsx       # Module-aware disclaimer
quiz-app/src/components/quiz/QuestionCard.jsx     # Tip toggle button
quiz-app/src/components/quiz/QuestionCard.css     # Tip styles
quiz-app/src/components/results/QuestionReview.jsx    # Explanation display
quiz-app/src/components/results/QuestionReview.css    # Explanation styles
quiz-app/.gitignore                     # Added .vite folder
README.md                               # Updated with React module info
quiz-app/README.md                      # Updated with multi-module docs
```

## 🔄 User Flow

```
Landing Page (/)
    ↓
Module Selection (Big Data / React)
    ↓
Topic Selection (/home)
    ↓
Quiz Configuration (question count)
    ↓
Quiz (/quiz) - with tip toggle for React
    ↓
Results (/results) - with module-specific content
```

## 🧪 Testing Checklist

- [X] Module selector displays both modules
- [X] Big Data workflow unchanged
- [X] React topics load correctly
- [X] Tip button appears only for React questions
- [X] Tip toggle works during quiz
- [X] Explanations show on results page (React)
- [X] Disclaimer shows correct course name
- [X] Recommendations show correct platform
- [X] Navigation between modules works
- [X] Responsive design on mobile

## 👥 Credits

### Course Content Authors
- **Big Data**: Mohamed KOUBAA (Moodle)
- **React**: Ahmed Fakhfakh & Mohamed Bouattour (Google Classroom - FRAMEWORK FRONTEND)

### Quiz App Developer
- **Baha Eddine Hamdi** ([@BohBOhTN](https://github.com/BohBOhTN))

## 📊 Statistics

| Metric | Before | After |
|--------|--------|-------|
| Modules | 1 | 2 |
| Topics | 7 | 12 |
| Questions | 280 | 480 |
| New Components | - | 3 |
| Modified Files | - | 15 |

---


