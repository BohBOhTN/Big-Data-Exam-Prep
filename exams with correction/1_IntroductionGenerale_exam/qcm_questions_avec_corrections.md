# QCM - Introduction au Big Data
## Questions avec Corrections et Conseils

**Auteur du cours:** Mohamed KOUBAA  
**Nombre de questions:** 40

---

### Question 1
**Selon le concept du Big Data, à quelle fréquence les données mondiales doublent-elles ?**

- A) Tous les 6 mois
- B) Tous les ans
- **C) Tous les 2 ans ✓**
- D) Tous les 5 ans

**✅ Réponse: C**

💡 **Conseil:** C'est une statistique clé à retenir. Le doublement des données tous les 2 ans est un indicateur fondamental de la croissance exponentielle des données qui a conduit à l'émergence du Big Data.

---

### Question 2
**Quel pourcentage des données mondiales est considéré comme non structuré ?**

- A) 50%
- B) 70%
- C) 80%
- **D) 90% ✓**

**✅ Réponse: D**

💡 **Conseil:** Retenez que la grande majorité (90%) des données sont non structurées (emails, vidéos, réseaux sociaux, etc.). C'est l'une des raisons pour lesquelles les bases de données relationnelles traditionnelles ne suffisent plus.

---

### Question 3
**Quels sont les 3V originaux du Big Data ?**

- A) Volume, Vitesse, Visualisation
- **B) Volume, Vélocité, Variété ✓**
- C) Valeur, Véracité, Volume
- D) Variété, Valeur, Vitesse

**✅ Réponse: B**

💡 **Conseil:** Les 3V sont le modèle fondamental du Big Data : **V**olume (quantité), **V**élocité (vitesse d'arrivée), **V**ariété (formats différents). Ce modèle a ensuite été étendu aux 5V.

---

### Question 4
**Que représente la "Véracité" dans le modèle des 5V du Big Data ?**

- A) La vitesse de traitement des données
- B) La quantité de données
- **C) La fiabilité et la crédibilité des données collectées ✓**
- D) Le format des données

**✅ Réponse: C**

💡 **Conseil:** Les 5V = 3V + Véracité (fiabilité des sources) + Valeur (profit extrait). La Véracité concerne la qualité et la fiabilité des données : peut-on faire confiance aux sources ?

---

### Question 5
**Combien de tweets sont publiés par seconde sur Twitter (approximativement) ?**

- A) 1,000 tweets/seconde
- B) 3,500 tweets/seconde
- **C) 5,900 tweets/seconde ✓**
- D) 10,000 tweets/seconde

**✅ Réponse: C**

💡 **Conseil:** Cette statistique illustre le concept de **Vélocité** - la vitesse à laquelle les données arrivent. ~5,900 tweets/sec = ~504 millions/jour = ~184 milliards/an.

---

### Question 6
**Quelle est l'unité de stockage équivalente à 1,024 Téraoctets ?**

- A) Gigaoctet
- B) Exaoctet
- **C) Pétaoctet ✓**
- D) Zettaoctet

**✅ Réponse: C**

💡 **Conseil:** L'ordre des unités : Ko → Mo → Go → **To** → **Po** → Eo → Zo → Yo. Chaque unité = 1,024 × l'unité précédente. 1 Po = 1,024 To.

---

### Question 7
**En quelle année Google a-t-il publié le papier sur MapReduce ?**

- A) 2001
- B) 2003
- **C) 2004 ✓**
- D) 2006

**✅ Réponse: C**

💡 **Conseil:** Chronologie importante : GFS (2003) → MapReduce (2004) → Hadoop (~2006). Ces publications de Google ont révolutionné le traitement des données massives.

---

### Question 8
**Quel framework est utilisé pour le traitement distribué en temps réel (stream processing) ?**

- A) MapReduce
- B) Apache Sqoop
- **C) Apache Storm ✓**
- D) Apache Pig

**✅ Réponse: C**

💡 **Conseil:** Pour le Stream Processing, pensez à : **Storm**, **Flink**, **Kafka Streams**, **Samza**, **Spark Streaming**. MapReduce et Pig sont pour le traitement par lots (batch).

---

### Question 9
**Quelle technologie est décrite comme un système de fichiers distribués ?**

- A) Apache Hive
- **B) HDFS (Hadoop Distributed File System) ✓**
- C) MongoDB
- D) Apache Kafka

**✅ Réponse: B**

💡 **Conseil:** HDFS = Hadoop Distributed File System. C'est la couche de stockage de l'écosystème Hadoop, inspiré du Google File System (GFS).

---

### Question 10
**Quel est le rôle principal d'Apache Sqoop ?**

- A) Traitement de flux en temps réel
- **B) Transfert de données entre bases relationnelles et Hadoop ✓**
- C) Stockage de données NoSQL
- D) Orchestration de workflows

**✅ Réponse: B**

💡 **Conseil:** **Sqoop** = "SQL to Hadoop" - c'est un outil ETL pour importer/exporter des données entre les SGBD relationnels et Hadoop (HDFS, Hive, HBase).

---

### Question 11
**Le traitement par lots (Batch Processing) se caractérise par :**

- A) Le traitement des données en temps réel et continu
- **B) Le traitement de blocs de données déjà stockées sur une période définie ✓**
- C) Le traitement instantané de chaque enregistrement dès son arrivée
- D) Le traitement uniquement des données structurées

**✅ Réponse: B**

💡 **Conseil:** **Batch** = traitement par lots de données déjà stockées (historiques). **Stream** = traitement en temps réel continu. Exemple batch : analyser toutes les transactions d'une semaine.

---

### Question 12
**Quelle base de données NoSQL stocke les données sous forme de documents JSON distribués ?**

- A) Apache HBase
- B) Cassandra
- **C) MongoDB ✓**
- D) ElasticSearch

**✅ Réponse: C**

💡 **Conseil:** MongoDB = base de données orientée documents (JSON/BSON). HBase = orientée colonnes. Cassandra = orientée colonnes/clé-valeur. ElasticSearch = moteur de recherche.

---

### Question 13
**Qu'est-ce que le "Micro-batch Processing" ?**

- A) Traitement d'un seul enregistrement à la fois
- **B) Regroupement des enregistrements toutes les quelques secondes puis traitement en mini-lot ✓**
- C) Traitement uniquement des petits fichiers
- D) Compression des données avant traitement

**✅ Réponse: B**

💡 **Conseil:** **Native Streaming** = traitement immédiat de chaque enregistrement (Storm, Flink). **Micro-batch** = mini-lots de quelques secondes (Spark Streaming). Le micro-batch introduit une légère latence.

---

### Question 14
**Quelle quantité de données représente environ 6 millions de livres ?**

- A) 1 Gigaoctet
- **B) 1 Téraoctet ✓**
- C) 1 Pétaoctet
- D) 1 Exaoctet

**✅ Réponse: B**

💡 **Conseil:** Exemples à retenir : 1 To ≈ 6 millions de livres, 1 Po ≈ 2 milliards de photos, 5 Eo ≈ toute l'info produite jusqu'en 2003.

---

### Question 15
**Apache Hive est principalement utilisé pour :**

- A) Le traitement de flux en temps réel
- **B) L'infrastructure d'entrepôt de données avec langage SQL-like ✓**
- C) La messagerie entre applications
- D) Le machine learning

**✅ Réponse: B**

💡 **Conseil:** **Hive** = Data Warehouse sur Hadoop avec HiveQL (SQL-like). **Pig** = utilise Pig Latin. Les deux permettent d'éviter d'écrire du code MapReduce en Java.

---

### Question 16
**Quel facteur a augmenté de 10x entre 2000 et 2006 concernant le stockage ?**

- A) Le nombre d'utilisateurs
- **B) La capacité des disques ✓**
- C) La vitesse des réseaux
- D) Le nombre de serveurs

**✅ Réponse: B**

💡 **Conseil:** Entre 2000-2006 : capacité disque ×10, prix/Go ÷10 → amélioration effective de ×100 à prix constant. C'est un facteur clé de l'émergence du Big Data.

---

### Question 17
**Apache Zookeeper est utilisé pour :**

- A) Le stockage de fichiers distribués
- **B) La coordination et gestion de configuration des systèmes distribués ✓**
- C) Le traitement de données en temps réel
- D) L'analyse de données

**✅ Réponse: B**

💡 **Conseil:** **Zookeeper** = "gardien du zoo" - il coordonne les services distribués, gère la configuration, la synchronisation et le naming. Essentiel pour Kafka, HBase, etc.

---

### Question 18
**Quel pourcentage des données mondiales est structuré ?**

- A) 10%
- **B) 20% ✓**
- C) 40%
- D) 50%

**✅ Réponse: B**

💡 **Conseil:** Structuré (20%) vs Non-structuré (80% ou 90% selon les sources). Les données structurées sont celles des bases relationnelles avec schéma fixe.

---

### Question 19
**Parmi les technologies suivantes, laquelle est un broker de messages ?**

- A) Apache HBase
- **B) Apache Kafka ✓**
- C) Apache Pig
- D) Apache Hive

**✅ Réponse: B**

💡 **Conseil:** **Brokers de messages** : Kafka, RabbitMQ, ActiveMQ. Ils permettent la transmission de données entre applications distribuées de manière asynchrone et fiable.

---

### Question 20
**En quelle année Google a-t-il publié le papier sur Google File System (GFS) ?**

- A) 2001
- **B) 2003 ✓**
- C) 2005
- D) 2007

**✅ Réponse: B**

💡 **Conseil:** Chronologie Google : **GFS (2003)** → **MapReduce (2004)**. Ces publications ont inspiré Apache Hadoop (HDFS + MapReduce) vers 2006.

---

### Question 21
**Quelle est la définition correcte du "Stream Processing" ?**

- A) Traitement de données historiques stockées
- **B) Traitement de flux de données en temps réel de façon continue ✓**
- C) Traitement uniquement des données structurées
- D) Compression des données avant stockage

**✅ Réponse: B**

💡 **Conseil:** **Stream Processing** = traitement continu (jours, mois, années, indéfiniment) vs **Batch** = données avec début et fin définis.

---

### Question 22
**Quelle technologie utilise le langage Pig Latin ?**

- A) Apache Hive
- **B) Apache Pig ✓**
- C) Apache Spark
- D) Apache Storm

**✅ Réponse: B**

💡 **Conseil:** **Pig** → **Pig Latin** (langage procédural). **Hive** → **HiveQL** (SQL-like déclaratif). Les deux simplifient l'écriture de jobs MapReduce.

---

### Question 23
**Combien de tweets sont publiés par jour sur Twitter (approximativement) ?**

- A) 50 millions
- B) 200 millions
- **C) 504 millions ✓**
- D) 1 milliard

**✅ Réponse: C**

💡 **Conseil:** Calcul : ~5,900 tweets/sec × 60 sec × 60 min × 24h ≈ 509 millions/jour (arrondi à 504 millions dans le cours).

---

### Question 24
**Apache Flume est utilisé pour :**

- A) Le traitement MapReduce
- **B) La collecte et l'analyse de fichiers logs ✓**
- C) Le stockage NoSQL
- D) La visualisation de données

**✅ Réponse: B**

💡 **Conseil:** **Flume** = collecte de logs/événements vers HDFS. **Sqoop** = transfert depuis/vers SGBD relationnels. **Kafka** = streaming de messages entre applications.

---

### Question 25
**Quelle est la caractéristique principale de Cassandra ?**

- A) Traitement en temps réel uniquement
- **B) Base de données NoSQL à haute disponibilité sans point de défaillance unique ✓**
- C) Stockage de fichiers uniquement
- D) Langage SQL standard

**✅ Réponse: B**

💡 **Conseil:** **Cassandra** = NoSQL distribué avec haute disponibilité et tolérance aux pannes (pas de SPOF - Single Point of Failure). Développé par Facebook, utilisé par Netflix.

---

### Question 26
**Le "Native Streaming" se caractérise par :**

- A) Le traitement par mini-lots
- **B) Le traitement de chaque enregistrement dès son arrivée sans attendre les autres ✓**
- C) Le stockage des données avant traitement
- D) L'utilisation uniquement de Spark

**✅ Réponse: B**

💡 **Conseil:** **Native Streaming** (Storm, Flink, Kafka Streams) = latence minimale. **Micro-batch** (Spark Streaming) = légère latence mais meilleur débit.

---

### Question 27
**Quelle unité de stockage équivaut à 1,024 Zettaoctets ?**

- A) Exaoctet
- B) Pétaoctet
- **C) Yottaoctet ✓**
- D) Téraoctet

**✅ Réponse: C**

💡 **Conseil:** Hiérarchie : Ko → Mo → Go → To → Po → Eo → **Zo → Yo**. Le Yottaoctet est la plus grande unité standard (10²⁴ octets).

---

### Question 28
**Parmi les frameworks suivants, lequel utilise l'approche Micro-batch ?**

- A) Apache Storm
- B) Apache Flink
- **C) Spark Streaming ✓**
- D) Kafka Streams

**✅ Réponse: C**

💡 **Conseil:** **Micro-batch** : Spark Streaming, Storm-Trident. **Native Streaming** : Storm, Flink, Kafka Streams, Samza. Spark Streaming groupe les données en mini-lots.

---

### Question 29
**Que représente la "Valeur" dans le modèle des 5V du Big Data ?**

- A) Le coût du stockage
- **B) Le profit et les connaissances extraites des données ✓**
- C) La vitesse de traitement
- D) Le volume des données

**✅ Réponse: B**

💡 **Conseil:** **Valeur** = transformer les données en connaissances utiles et en profit. C'est l'objectif final du Big Data : créer de la valeur business à partir des données.

---

### Question 30
**Apache Oozie est utilisé pour :**

- A) Le stockage de données
- **B) L'ordonnancement de workflows Hadoop ✓**
- C) Le traitement en temps réel
- D) La messagerie

**✅ Réponse: B**

💡 **Conseil:** **Oozie** = orchestrateur/scheduler de workflows Hadoop. Il permet de chaîner des jobs MapReduce, Pig, Hive, etc. en séquence ou en parallèle.

---

### Question 31
**Quelle quantité de données a été produite en 2011 ?**

- A) 500 Pétaoctets
- B) 1 Exaoctet
- **C) 1.8 Zettaoctets ✓**
- D) 5 Yottaoctets

**✅ Réponse: C**

💡 **Conseil:** 2011 = 1.8 Zo de données produites. Comparaison : toute l'info jusqu'en 2003 = 5 Eo. Cela illustre la croissance exponentielle des données.

---

### Question 32
**ElasticSearch est décrit comme :**

- A) Une base de données relationnelle
- **B) Un moteur de recherche distribué via interface REST ✓**
- C) Un système de fichiers
- D) Un broker de messages

**✅ Réponse: B**

💡 **Conseil:** **ElasticSearch** = moteur de recherche full-text distribué basé sur Lucene. Utilisé pour la recherche, l'analyse de logs (stack ELK : ElasticSearch, Logstash, Kibana).

---

### Question 33
**Parmi les domaines suivants, lequel N'EST PAS mentionné comme application du Big Data ?**

- A) Santé
- B) Commerce de détail
- **C) Architecture des bâtiments ✓**
- D) Éducation (MOOCs)

**✅ Réponse: C**

💡 **Conseil:** Applications du Big Data mentionnées : Santé, Éducation (MOOCs), Commerce (Amazon, Walmart), Biologie, Science, ML/DL, Recommandations (Netflix), Urbanisme, Gouvernement, Médias, Fraude.

---

### Question 34
**Quelle technologie est à la fois utilisable pour le batch et le stream processing ?**

- A) MapReduce
- B) Apache Storm
- **C) Apache Spark ✓**
- D) Apache Flume

**✅ Réponse: C**

💡 **Conseil:** **Spark** est polyvalent : batch (Spark Core), stream (Spark Streaming), ML (MLlib), graphes (GraphX), SQL (Spark SQL). C'est son avantage majeur sur MapReduce.

---

### Question 35
**La loi de Moore a été appliquée pendant combien d'années selon le cours ?**

- A) 20 ans
- B) 25 ans
- **C) 35 ans ✓**
- D) 50 ans

**✅ Réponse: C**

💡 **Conseil:** Loi de Moore (1965) : le nombre de transistors double tous les ~2 ans. Elle s'est appliquée pendant 35 ans, permettant l'augmentation de la puissance de calcul nécessaire au Big Data.

---

### Question 36
**Quelle est la source principale des données non structurées ?**

- A) Bases de données relationnelles
- B) Fichiers Excel
- **C) Emails, réseaux sociaux, vidéos, photos ✓**
- D) Systèmes ERP

**✅ Réponse: C**

💡 **Conseil:** Données non structurées : emails, chats, blogs, web, musique, photos, vidéos, réseaux sociaux, GPS mobile, capteurs IoT. Elles n'ont pas de schéma fixe prédéfini.

---

### Question 37
**Apache Phoenix est construit sur quelle technologie ?**

- A) MongoDB
- B) Cassandra
- **C) HBase ✓**
- D) HDFS

**✅ Réponse: C**

💡 **Conseil:** **Phoenix** = couche SQL sur HBase. **Impala** (Cloudera) = SQL sur HDFS/HBase. Ces outils permettent d'interroger les données Hadoop avec du SQL standard.

---

### Question 38
**Quelle quantité de données représente toute l'information produite jusqu'en 2003 ?**

- A) 1 Pétaoctet
- **B) 5 Exaoctets ✓**
- C) 1 Zettaoctet
- D) 10 Téraoctets

**✅ Réponse: B**

💡 **Conseil:** Jusqu'en 2003 = 5 Eo. En 2011 = 1.8 Zo. En quelques années, on produit des centaines de fois plus de données que toute l'histoire humaine précédente !

---

### Question 39
**Hazelcast est décrit comme :**

- A) Un système de fichiers distribués
- **B) Un cache mémoire distribué et base de données NoSQL en mémoire ✓**
- C) Un framework de machine learning
- D) Un outil de visualisation

**✅ Réponse: B**

💡 **Conseil:** **Hazelcast** = in-memory data grid (IMDG). Il offre : cache distribué, NoSQL en mémoire, messaging. Similaire à Redis, utilisé pour les performances temps réel.

---

### Question 40
**Pourquoi le Big Data a-t-il émergé ? (Choisir la réponse la plus complète)**

- A) Uniquement à cause de l'augmentation du volume de données
- **B) L'augmentation exponentielle des données non structurées, l'augmentation des capacités de stockage/analyse, et l'inadéquation des technologies existantes ✓**
- C) La baisse des prix des ordinateurs
- D) L'invention d'Internet

**✅ Réponse: B**

💡 **Conseil:** 3 facteurs clés de l'émergence du Big Data :
1. Explosion des données non structurées
2. Capacités de stockage/traitement accrues et accessibles
3. Inadéquation des technologies traditionnelles (SGBD relationnels, mainframes, Excel)

---

## 📊 Résumé des Thèmes Abordés

| Thème | Nombre de Questions |
|-------|---------------------|
| Définitions et concepts (3V, 5V) | 8 |
| Statistiques et chiffres clés | 7 |
| Technologies et frameworks | 15 |
| Unités de stockage | 4 |
| Types de traitement (Batch/Stream) | 6 |

---

## 🎯 Conseils pour l'Examen

1. **Mémorisez les chiffres clés** : doublement tous les 2 ans, 80-90% non structuré, statistiques Twitter

2. **Connaissez la chronologie** : GFS (2003) → MapReduce (2004) → Hadoop (~2006)

3. **Distinguez les technologies par leur rôle** :
   - Stockage : HDFS, HBase, MongoDB, Cassandra
   - Batch : MapReduce, Spark
   - Stream : Storm, Flink, Kafka Streams
   - ETL : Sqoop (SGBD), Flume (logs)
   - Orchestration : Oozie, Zookeeper
   - SQL-like : Hive (HiveQL), Pig (Pig Latin)

4. **Comprenez les nuances** : Native Streaming vs Micro-batch

5. **Retenez les 5V** : Volume, Vélocité, Variété, Véracité, Valeur

---

**Bonne chance pour votre examen ! 🍀**
