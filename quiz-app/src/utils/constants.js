import { 
  Database,
  Server,
  HardDrive,
  Layers,
  Terminal,
  BookOpen,
  Code,
  Palette,
  Globe,
  LayoutDashboard,
  Cloud
} from 'lucide-react';

// Topic icons mapping - Big Data
export const TOPIC_ICONS = {
  // Big Data topics
  '1_IntroductionGenerale': Database,
  '2_HadoopIntro': Server,
  '3_HDFS': HardDrive,
  '4_MapReduce': Layers,
  'Hive': Database,
  'Hive-Commandes': Terminal,
  'TP-HadoopHDFS': Terminal,
  // React topics
  'principes_de_react': Code,
  'le_css_en_react': Palette,
  'liaison_avec_les_api': Globe,
  'gestion_des_interfaces': LayoutDashboard,
  'hebergement_react_workshop': Cloud,
};

// Topic colors mapping
export const TOPIC_COLORS = {
  // Big Data topics
  '1_IntroductionGenerale': '#6366f1',
  '2_HadoopIntro': '#10b981',
  '3_HDFS': '#f59e0b',
  '4_MapReduce': '#ef4444',
  'Hive': '#8b5cf6',
  'Hive-Commandes': '#06b6d4',
  'TP-HadoopHDFS': '#ec4899',
  // React topics
  'principes_de_react': '#61dafb',
  'le_css_en_react': '#ff6b9d',
  'liaison_avec_les_api': '#10b981',
  'gestion_des_interfaces': '#f59e0b',
  'hebergement_react_workshop': '#8b5cf6',
};

// PDF recommendations mapping
export const PDF_MAPPING = {
  // Big Data PDFs
  '1_IntroductionGenerale': '1_IntroductionGenerale.pdf',
  '2_HadoopIntro': '2_HadoopIntro.pdf',
  '3_HDFS': '3_HDFS.pdf',
  '4_MapReduce': '4_MapReduce.pdf',
  'Hive': 'Hive.pdf',
  'Hive-Commandes': 'Hive-Commandes.pdf',
  'TP-HadoopHDFS': 'TP-HadoopHDFS.pdf',
  // React PDFs/Resources
  'principes_de_react': 'CHAPITRE 2 - PRINCIPES DE REACT.pdf',
  'le_css_en_react': 'WORKSHOP PORTFOLIO (2).pdf',
  'liaison_avec_les_api': 'Chapitre 3  Liaison avec les API dans REACT (2).pdf',
  'gestion_des_interfaces': 'Chapitre 4 Gestion des interfaces et opérations CRUD.pdf',
  'hebergement_react_workshop': 'Copy of Workshop Complet Hébergement React.docx',
};

// Topic display names
export const TOPIC_DISPLAY_NAMES = {
  // Big Data topics
  '1_IntroductionGenerale': 'Introduction au Big Data',
  '2_HadoopIntro': 'Introduction à Hadoop',
  '3_HDFS': 'HDFS',
  '4_MapReduce': 'MapReduce',
  'Hive': 'Apache Hive',
  'Hive-Commandes': 'Hive Commandes',
  // React topics
  'principes_de_react': 'Principes de React',
  'le_css_en_react': 'Le CSS en React',
  'liaison_avec_les_api': 'Liaison avec les API',
  'gestion_des_interfaces': 'Gestion des Interfaces',
  'hebergement_react_workshop': 'Hébergement React',
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
