import { 
  Database,
  Server,
  HardDrive,
  Layers,
  Terminal,
  BookOpen
} from 'lucide-react';

// Topic icons mapping
export const TOPIC_ICONS = {
  '1_IntroductionGenerale': Database,
  '2_HadoopIntro': Server,
  '3_HDFS': HardDrive,
  '4_MapReduce': Layers,
  'Hive': Database,
  'Hive-Commandes': Terminal,
  'TP-HadoopHDFS': Terminal,
};

// Topic colors mapping
export const TOPIC_COLORS = {
  '1_IntroductionGenerale': '#6366f1',
  '2_HadoopIntro': '#10b981',
  '3_HDFS': '#f59e0b',
  '4_MapReduce': '#ef4444',
  'Hive': '#8b5cf6',
  'Hive-Commandes': '#06b6d4',
  'TP-HadoopHDFS': '#ec4899',
};

// PDF recommendations mapping
export const PDF_MAPPING = {
  '1_IntroductionGenerale': '1_IntroductionGenerale.pdf',
  '2_HadoopIntro': '2_HadoopIntro.pdf',
  '3_HDFS': '3_HDFS.pdf',
  '4_MapReduce': '4_MapReduce.pdf',
  'Hive': 'Hive.pdf',
  'Hive-Commandes': 'Hive-Commandes.pdf',
  'TP-HadoopHDFS': 'TP-HadoopHDFS.pdf',
};

// Topic display names
export const TOPIC_DISPLAY_NAMES = {
  '1_IntroductionGenerale': 'Introduction au Big Data',
  '2_HadoopIntro': 'Introduction à Hadoop',
  '3_HDFS': 'HDFS',
  '4_MapReduce': 'MapReduce',
  'Hive': 'Apache Hive',
  'Hive-Commandes': 'Hive Commandes',
  'TP-HadoopHDFS': 'TP Hadoop HDFS',
};

// Get topic icon with fallback
export const getTopicIcon = (topicId) => {
  return TOPIC_ICONS[topicId] || BookOpen;
};

// Get topic color with fallback
export const getTopicColor = (topicId) => {
  return TOPIC_COLORS[topicId] || '#6366f1';
};

// Quiz configuration defaults
export const QUIZ_CONFIG = {
  MIN_QUESTIONS: 5,
  MAX_QUESTIONS: 40,
  DEFAULT_QUESTIONS: 10,
  STEP: 5,
  QUICK_SELECT_OPTIONS: [5, 10, 20, 30, 40],
};
