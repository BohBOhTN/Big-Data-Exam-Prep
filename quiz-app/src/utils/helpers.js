/**
 * Format seconds to MM:SS format
 * @param {number} seconds - Total seconds
 * @returns {string} Formatted time string
 */
export const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

/**
 * Format seconds to "Xmin Xs" format
 * @param {number} seconds - Total seconds
 * @returns {string} Formatted time string
 */
export const formatTimeVerbose = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}min ${secs}s`;
};

/**
 * Fisher-Yates shuffle algorithm for true randomness
 * @param {Array} array - Array to shuffle
 * @returns {Array} Shuffled array copy
 */
export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Get grade based on percentage score
 * @param {number} percentage - Score percentage
 * @returns {Object} Grade object with letter, color, and message
 */
export const getGrade = (percentage) => {
  if (percentage >= 90) return { letter: 'A+', color: '#22c55e', message: 'Exceptionnel !' };
  if (percentage >= 80) return { letter: 'A', color: '#22c55e', message: 'Excellent !' };
  if (percentage >= 70) return { letter: 'B', color: '#10b981', message: 'Bon travail !' };
  if (percentage >= 60) return { letter: 'C', color: '#f59e0b', message: 'Continuez à pratiquer !' };
  if (percentage >= 50) return { letter: 'D', color: '#f97316', message: 'Peut mieux faire' };
  return { letter: 'F', color: '#ef4444', message: 'Révisez et réessayez !' };
};

/**
 * Calculate quiz results analysis
 * @param {Object} results - Quiz results object
 * @param {Object} mappings - PDF and display name mappings
 * @returns {Object} Analysis object
 */
export const analyzeQuizResults = (results, { pdfMapping, topicDisplayNames }) => {
  if (!results) return null;

  const { questions, answers, totalTime } = results;
  
  let correctCount = 0;
  let wrongCount = 0;
  const topicStats = {};
  
  questions.forEach((question, idx) => {
    const userAnswer = answers[idx];
    const isCorrect = userAnswer === question.correct_answer;
    
    if (isCorrect) {
      correctCount++;
    } else {
      wrongCount++;
    }
    
    if (!topicStats[question.topic_id]) {
      topicStats[question.topic_id] = {
        id: question.topic_id,
        name: question.topic_name,
        total: 0,
        correct: 0,
        wrong: 0,
        questions: [],
      };
    }
    
    topicStats[question.topic_id].total++;
    if (isCorrect) {
      topicStats[question.topic_id].correct++;
    } else {
      topicStats[question.topic_id].wrong++;
    }
    
    topicStats[question.topic_id].questions.push({
      ...question,
      questionIndex: idx,
      userAnswer,
      isCorrect,
    });
  });
  
  const topicAnalysis = Object.values(topicStats)
    .map(topic => ({
      ...topic,
      percentage: Math.round((topic.correct / topic.total) * 100),
    }))
    .sort((a, b) => a.percentage - b.percentage);
  
  const recommendations = topicAnalysis
    .filter(t => t.percentage < 70)
    .map(t => ({
      topic: t,
      pdf: pdfMapping[t.id],
      displayName: topicDisplayNames[t.id] || t.name,
    }));
  
  const overallPercentage = Math.round((correctCount / questions.length) * 100);
  
  return {
    totalQuestions: questions.length,
    correctCount,
    wrongCount,
    overallPercentage,
    totalTime,
    topicAnalysis,
    recommendations,
    grade: getGrade(overallPercentage),
  };
};
