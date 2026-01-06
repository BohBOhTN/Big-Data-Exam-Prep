# QCM - Introduction à Hadoop
## Questions avec Corrections et Conseils

**Auteur du cours:** Mohamed KOUBAA  
**Nombre de questions:** 40

---

### Question 1
**Hadoop est un framework écrit dans quel langage de programmation ?**

- A) Python
- B) C++
- **C) Java ✓**
- D) Scala

**✅ Réponse: C**

💡 **Conseil:** Hadoop est un framework **libre et open source écrit en Java**. Cela permet une grande portabilité et une large communauté de développeurs.

---

### Question 2
**Quels sont les 3 modules principaux du framework Hadoop de base ?**

- A) HDFS, Hive, Pig
- **B) HDFS, YARN, MapReduce ✓**
- C) MapReduce, Spark, HBase
- D) YARN, Zookeeper, Flume

**✅ Réponse: B**

💡 **Conseil:** Le cœur de Hadoop = **HDFS** (stockage) + **YARN** (gestion des ressources) + **MapReduce** (traitement). Hive, Pig, etc. font partie de l'écosystème mais pas du framework de base.

---

### Question 3
**Que signifie l'acronyme HDFS ?**

- A) Hadoop Data File Storage
- B) High Distributed File System
- **C) Hadoop Distributed File System ✓**
- D) Hybrid Data File System

**✅ Réponse: C**

💡 **Conseil:** **H**adoop **D**istributed **F**ile **S**ystem - le système de fichiers distribués qui permet de stocker des pétaoctets de données sur un cluster.

---

### Question 4
**Que signifie l'acronyme YARN ?**

- A) Yet Another Resource Navigator
- **B) Yet Another Resource Negotiator ✓**
- C) Yarn Application Resource Node
- D) Yield And Resource Network

**✅ Réponse: B**

💡 **Conseil:** **Y**et **A**nother **R**esource **N**egotiator - YARN gère l'allocation des ressources (CPU, mémoire) entre les applications du cluster.

---

### Question 5
**Quel est le principe fondamental du traitement dans Hadoop ?**

- A) Copier les données vers un serveur central pour le traitement
- **B) Traiter les données là où elles sont stockées ✓**
- C) Utiliser uniquement la mémoire vive pour le traitement
- D) Compresser les données avant le traitement

**✅ Réponse: B**

💡 **Conseil:** C'est le principe clé de Hadoop : **déplacer le calcul vers les données, pas l'inverse**. Cela évite les coûts de transfert de pétaoctets de données sur le réseau.

---

### Question 6
**Quelle est la caractéristique qui permet d'ajouter des machines au cluster selon les besoins ?**

- A) Haute disponibilité
- B) Tolérance aux pannes
- **C) Scalabilité ✓**
- D) Sécurité

**✅ Réponse: C**

💡 **Conseil:** **Scalabilité horizontale** = ajouter des machines. Hadoop peut scaler de quelques nœuds à des milliers de nœuds selon les besoins en stockage et en calcul.

---

### Question 7
**Quel outil de l'écosystème Hadoop permet d'écrire des scripts avec le langage Pig Latin ?**

- A) Hive
- **B) Pig ✓**
- C) Sqoop
- D) Flume

**✅ Réponse: B**

💡 **Conseil:** **Pig** → **Pig Latin** (langage procédural de script). **Hive** → **HiveQL** (SQL-like déclaratif). Les deux simplifient l'écriture de jobs MapReduce.

---

### Question 8
**Quel outil utilise un langage proche de SQL (HiveQL) pour interroger les données ?**

- A) Pig
- B) Impala
- **C) Hive ✓**
- D) HBase

**✅ Réponse: C**

💡 **Conseil:** **Hive** = Data Warehouse avec HiveQL. **Impala** utilise aussi HiveQL mais pour des requêtes directes sur HDFS/HBase sans MapReduce.

---

### Question 9
**Quel outil est utilisé pour l'ordonnancement des jobs MapReduce et la définition de workflows ?**

- A) Zookeeper
- **B) Oozie ✓**
- C) Ambari
- D) Flume

**✅ Réponse: B**

💡 **Conseil:** **Oozie** = orchestrateur/scheduler de workflows Hadoop. Il permet de chaîner des jobs MapReduce, Pig, Hive en séquence ou en parallèle avec gestion des dépendances.

---

### Question 10
**HBase est une base de données NoSQL de quel type ?**

- A) Orientée documents
- **B) Orientée colonnes ✓**
- C) Orientée graphes
- D) Clé-valeur simple

**✅ Réponse: B**

💡 **Conseil:** **HBase** = NoSQL orienté colonnes (column-family store), inspiré de Google BigTable. **MongoDB** = orienté documents. **Neo4j** = orienté graphes.

---

### Question 11
**Quel outil permet de collecter des logs et de les stocker dans HDFS ?**

- A) Sqoop
- **B) Flume ✓**
- C) Kafka
- D) Storm

**✅ Réponse: B**

💡 **Conseil:** **Flume** = collecte de logs/événements vers HDFS. **Sqoop** = transfert depuis/vers SGBD relationnels. Pensez "Flume = Flux de logs".

---

### Question 12
**Quel outil permet la lecture et l'écriture des données à partir de bases de données externes relationnelles ?**

- A) Flume
- B) Kafka
- **C) Sqoop ✓**
- D) HBase

**✅ Réponse: C**

💡 **Conseil:** **Sqoop** = "SQL to Hadoop" - outil ETL bidirectionnel entre SGBD relationnels (MySQL, Oracle, etc.) et Hadoop (HDFS, Hive, HBase).

---

### Question 13
**Quel outil est utilisé pour le provisionnement, la gestion et le monitoring des clusters Hadoop ?**

- A) Zookeeper
- B) Oozie
- **C) Ambari ✓**
- D) Mahout

**✅ Réponse: C**

💡 **Conseil:** **Ambari** = interface web pour administrer et monitorer les clusters Hadoop. **Zookeeper** = coordination des services distribués (pas de GUI).

---

### Question 14
**Zookeeper est un service centralisé pour :**

- A) Le stockage des données
- B) Le traitement MapReduce
- **C) La maintenance des informations de configuration et la synchronisation distribuée ✓**
- D) La collecte de logs

**✅ Réponse: C**

💡 **Conseil:** **Zookeeper** = "gardien du zoo" qui coordonne les services distribués : configuration, nommage, synchronisation, élection de leader. Essentiel pour Kafka, HBase, etc.

---

### Question 15
**Mahout est une bibliothèque utilisée pour :**

- A) La visualisation de données
- **B) Le Machine Learning et les mathématiques ✓**
- C) La gestion des workflows
- D) Le stockage NoSQL

**✅ Réponse: B**

💡 **Conseil:** **Mahout** = bibliothèque ML pour Hadoop (clustering, classification, recommandations). Aujourd'hui souvent remplacé par Spark MLlib.

---

### Question 16
**Impala permet de requêter les données directement depuis :**

- A) MongoDB uniquement
- **B) HDFS et HBase avec HiveSQL ✓**
- C) Des bases de données relationnelles
- D) Apache Kafka

**✅ Réponse: B**

💡 **Conseil:** **Impala** (Cloudera) = moteur SQL massively parallel qui interroge HDFS/HBase directement, sans passer par MapReduce. Plus rapide pour les requêtes interactives.

---

### Question 17
**Quelle capacité de stockage HDFS peut-il gérer ?**

- A) Gigaoctets
- B) Téraoctets
- **C) Pétaoctets ✓**
- D) Mégaoctets

**✅ Réponse: C**

💡 **Conseil:** HDFS est conçu pour des **pétaoctets de données** (1 Po = 1000 To). Les grands clusters (Yahoo, Facebook) stockent des centaines de pétaoctets.

---

### Question 18
**Combien de machines un cluster Hadoop peut-il potentiellement gérer ?**

- A) Dizaines de nœuds
- B) Centaines de nœuds
- **C) Milliers de nœuds ✓**
- D) Une seule machine

**✅ Réponse: C**

💡 **Conseil:** Hadoop peut scaler jusqu'à des **milliers de nœuds**. Les plus grands clusters dépassent 10,000 nœuds. C'est la scalabilité horizontale.

---

### Question 19
**Hadoop est un projet :**

- A) Propriétaire Microsoft
- B) Propriétaire Google
- **C) Open source ✓**
- D) Propriétaire Amazon

**✅ Réponse: C**

💡 **Conseil:** Hadoop est un projet **Apache Software Foundation**, libre et open source. Il est inspiré des papiers de Google (GFS, MapReduce) mais n'est pas un produit Google.

---

### Question 20
**Qu'est-ce qu'un cluster Hadoop ?**

- A) Un seul serveur puissant
- **B) Une collection de machines sur lesquelles les données sont sauvegardées et traitées ✓**
- C) Un logiciel de visualisation
- D) Une base de données relationnelle

**✅ Réponse: B**

💡 **Conseil:** Un **cluster** = ensemble de machines (nœuds) travaillant ensemble. Dans Hadoop, les données sont distribuées ET le traitement est parallélisé sur ces machines.

---

### Question 21
**Laquelle des caractéristiques suivantes N'EST PAS une caractéristique de Hadoop ?**

- A) Haute disponibilité
- **B) Traitement temps réel uniquement ✓**
- C) Tolérance aux pannes
- D) Scalabilité

**✅ Réponse: B**

💡 **Conseil:** Hadoop (MapReduce) est conçu pour le **traitement par lots (batch)**, pas le temps réel. Pour le temps réel, on utilise Storm, Flink, Spark Streaming.

---

### Question 22
**Les connecteurs R dans l'écosystème Hadoop permettent :**

- A) Le stockage des données uniquement
- **B) L'accès à HDFS et l'exécution de requêtes Map/Reduce via le langage R ✓**
- C) La gestion des clusters
- D) Le monitoring des applications

**✅ Réponse: B**

💡 **Conseil:** Les **R Connectors** permettent aux data scientists d'utiliser R pour analyser des données Hadoop sans apprendre Java ou Pig Latin.

---

### Question 23
**Quel est le rôle principal de YARN dans Hadoop ?**

- A) Stockage des données
- **B) Gestion des ressources du cluster ✓**
- C) Traitement des requêtes SQL
- D) Collecte des logs

**✅ Réponse: B**

💡 **Conseil:** **YARN** = Resource Manager global du cluster. Il alloue CPU et mémoire aux applications (MapReduce ou autres) de manière dynamique.

---

### Question 24
**Quel est le rôle principal de MapReduce dans Hadoop ?**

- A) Stockage distribué des données
- B) Gestion des ressources
- **C) Traitement distribué des données ✓**
- D) Monitoring du cluster

**✅ Réponse: C**

💡 **Conseil:** **MapReduce** = modèle de programmation pour le traitement parallèle. Map (transformation) + Reduce (agrégation) sur les données distribuées.

---

### Question 25
**Parmi les outils suivants, lequel fonctionne directement au-dessus de HDFS (pas via YARN/MapReduce) ?**

- A) Pig
- B) Hive
- **C) HBase ✓**
- D) Mahout

**✅ Réponse: C**

💡 **Conseil:** **HBase** et **Impala** fonctionnent directement sur HDFS. Pig, Hive, Mahout génèrent des jobs MapReduce qui passent par YARN.

---

### Question 26
**L'écosystème Hadoop permet toutes ces fonctions SAUF :**

- A) L'extraction et le stockage des données
- B) La simplification des opérations de traitement
- C) La gestion et coordination de la plateforme
- **D) Le remplacement complet des bases de données relationnelles pour tous les cas d'usage ✓**

**✅ Réponse: D**

💡 **Conseil:** Hadoop complète mais ne remplace pas totalement les SGBD relationnels. Les SGBD sont toujours meilleurs pour les transactions ACID et les requêtes à faible latence.

---

### Question 27
**Quelle caractéristique permet à Hadoop de continuer à fonctionner même en cas de défaillance matérielle ?**

- A) Scalabilité
- **B) Tolérance aux pannes ✓**
- C) HPC
- D) Sécurité

**✅ Réponse: B**

💡 **Conseil:** **Tolérance aux pannes** = réplication des données (facteur 3 par défaut) + redémarrage automatique des tâches en cas de panne d'un nœud.

---

### Question 28
**HPC dans le contexte Hadoop signifie :**

- A) Hadoop Processing Center
- **B) High Performance Computing ✓**
- C) Hadoop Protocol Configuration
- D) High Priority Cluster

**✅ Réponse: B**

💡 **Conseil:** **HPC** = High Performance Computing. Hadoop permet le calcul haute performance en parallélisant le traitement sur des milliers de nœuds.

---

### Question 29
**Quel outil de l'écosystème Hadoop est développé par Cloudera pour les requêtes SQL ?**

- A) Hive
- B) Phoenix
- **C) Impala ✓**
- D) Pig

**✅ Réponse: C**

💡 **Conseil:** **Impala** = projet Cloudera pour requêtes SQL interactives sur HDFS/HBase. **Phoenix** = projet Apache pour SQL sur HBase.

---

### Question 30
**Les données dans Hadoop sont d'abord divisées puis :**

- A) Compressées et envoyées à un serveur central
- **B) Sauvegardées sur un cluster et traitées localement ✓**
- C) Converties en format propriétaire
- D) Archivées et supprimées

**✅ Réponse: B**

💡 **Conseil:** Principe Hadoop : **Diviser → Distribuer → Traiter localement → Agréger**. Pas de centralisation des données pour le traitement.

---

### Question 31
**Quel est l'avantage principal de traiter les données là où elles sont stockées ?**

- A) Meilleure compression
- **B) Réduction du coût de transfert de données ✓**
- C) Meilleure sécurité
- D) Format de données uniforme

**✅ Réponse: B**

💡 **Conseil:** Transférer 20 To sur le réseau = heures/jours. Envoyer du code (quelques Ko) vers les données = secondes. C'est l'essence de "data locality".

---

### Question 32
**Combien de catégories d'outils composent l'écosystème Hadoop selon le cours ?**

- A) 2
- B) 3
- **C) 4 ✓**
- D) 5

**✅ Réponse: C**

💡 **Conseil:** 4 catégories : 1) Outils au-dessus de YARN/MR (Pig, Hive...) 2) Outils sur HDFS (HBase, Impala) 3) Connexion externe (Sqoop, Flume) 4) Administration (Ambari, Zookeeper).

---

### Question 33
**Apache Phoenix est un moteur de base de données relationnelle construit sur :**

- A) MongoDB
- B) Cassandra
- **C) HBase ✓**
- D) HDFS directement

**✅ Réponse: C**

💡 **Conseil:** **Phoenix** ajoute une couche SQL sur HBase, permettant d'utiliser des requêtes SQL standards sur une base NoSQL orientée colonnes.

---

### Question 34
**Quel outil permet de définir des workflows de jobs dans Hadoop ?**

- A) Ambari
- B) Zookeeper
- **C) Oozie ✓**
- D) Flume

**✅ Réponse: C**

💡 **Conseil:** **Oozie** = scheduler de workflows. Il permet de définir des DAG (graphes orientés acycliques) de jobs avec dépendances et conditions.

---

### Question 35
**La scalabilité horizontale dans Hadoop signifie :**

- A) Ajouter plus de RAM à un serveur existant
- B) Ajouter plus de disques à un serveur existant
- **C) Ajouter plus de machines au cluster ✓**
- D) Augmenter la vitesse du processeur

**✅ Réponse: C**

💡 **Conseil:** **Horizontale** = ajouter des machines (scale out). **Verticale** = améliorer une machine existante (scale up). Hadoop privilégie l'horizontal.

---

### Question 36
**Quel composant permet la reprise après échec dans Hadoop ?**

- **A) Les mécanismes de tolérance aux pannes intégrés ✓**
- B) Les sauvegardes manuelles uniquement
- C) Le redémarrage manuel du cluster
- D) Un serveur de secours externe

**✅ Réponse: A**

💡 **Conseil:** Hadoop gère automatiquement les pannes : réplication des blocs HDFS, redémarrage des tâches MapReduce échouées, basculement NameNode (HA).

---

### Question 37
**Le monitoring du cluster Hadoop peut être fait avec :**

- A) Pig
- B) Hive
- **C) Ambari ✓**
- D) Sqoop

**✅ Réponse: C**

💡 **Conseil:** **Ambari** = interface web pour l'administration et le monitoring. Il affiche les métriques, alertes, et permet de gérer les services du cluster.

---

### Question 38
**Flume est principalement utilisé pour :**

- A) Les requêtes SQL
- **B) La collecte de logs ✓**
- C) Le Machine Learning
- D) La gestion des workflows

**✅ Réponse: B**

💡 **Conseil:** **Flume** = collecteur de données en streaming (logs, événements) vers HDFS ou HBase. Sources : fichiers logs, syslog, HTTP, etc.

---

### Question 39
**Quelle affirmation est correcte concernant Hadoop ?**

- A) Il nécessite du matériel très coûteux
- **B) Il peut fonctionner sur du matériel standard (commodity hardware) ✓**
- C) Il ne supporte que les données structurées
- D) Il est limité à un seul nœud

**✅ Réponse: B**

💡 **Conseil:** Hadoop est conçu pour fonctionner sur du **matériel standard** (commodity hardware), pas des serveurs haut de gamme. Cela réduit considérablement les coûts.

---

### Question 40
**Parmi les outils suivants, lequel N'EST PAS un outil de connexion aux sources externes ?**

- A) Sqoop
- B) Flume
- **C) Mahout ✓**
- D) Kafka (dans certaines configurations)

**✅ Réponse: C**

💡 **Conseil:** **Mahout** = bibliothèque de Machine Learning, pas un connecteur de données. Sqoop (SGBD), Flume (logs), Kafka (streaming) sont des outils d'ingestion de données.

---

## 📊 Résumé des Thèmes Abordés

| Thème | Nombre de Questions |
|-------|---------------------|
| Architecture Hadoop (HDFS, YARN, MR) | 10 |
| Écosystème et outils | 15 |
| Caractéristiques (scalabilité, tolérance...) | 8 |
| Concepts fondamentaux | 7 |

---

## 🎯 Conseils pour l'Examen

1. **Mémorisez les 3 composants de base** : HDFS + YARN + MapReduce

2. **Connaissez le rôle de chaque outil** :
   - Stockage : HDFS, HBase
   - Traitement : MapReduce, Pig, Hive
   - Ingestion : Sqoop (SGBD), Flume (logs)
   - Administration : Ambari, Zookeeper, Oozie

3. **Comprenez le principe clé** : "Déplacer le calcul vers les données"

4. **Retenez les caractéristiques** : Scalabilité, Tolérance aux pannes, Haute disponibilité

5. **Distinguez les outils** :
   - Pig = Pig Latin (procédural)
   - Hive = HiveQL (SQL-like)
   - Impala = SQL direct sur HDFS (Cloudera)

---

**Bonne chance pour votre examen ! 🍀**
