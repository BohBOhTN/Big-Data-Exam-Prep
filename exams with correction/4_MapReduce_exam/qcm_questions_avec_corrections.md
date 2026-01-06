# QCM - MapReduce
## Questions avec Corrections et Conseils

**Auteur du cours:** Mohamed KOUBAA  
**Nombre de questions:** 40

---

### Question 1
**MapReduce est composé de combien de parties principales ?**

- A) Une seule partie
- **B) Deux parties (Framework et Technique de programmation) ✓**
- C) Trois parties
- D) Quatre parties

**✅ Réponse: B**

💡 **Conseil:** MapReduce = **1) Framework** (APIs Java + moteur d'exécution) + **2) Technique de programmation** (méthode de raisonnement pour résoudre les problèmes Big Data).

---

### Question 2
**Quel est le principe fondamental de MapReduce concernant les données ?**

- A) Copier toutes les données vers un serveur central
- **B) Déplacer le calcul vers les données, pas l'inverse ✓**
- C) Compresser les données avant traitement
- D) Utiliser uniquement la mémoire RAM

**✅ Réponse: B**

💡 **Conseil:** Principe clé : **"Move computation to data"**. Transférer du code (Ko) est bien plus rapide que transférer des données (To/Po).

---

### Question 3
**Qu'est-ce qu'un Input Split dans MapReduce ?**

- A) Une fonction de division des résultats
- **B) Une division logique créée par le moteur d'exécution pour chaque bloc ✓**
- C) Un type de données
- D) Un format de fichier

**✅ Réponse: B**

💡 **Conseil:** **Input Split** = division logique créée par le moteur. Généralement 1 Input Split = 1 bloc HDFS (128 MB), mais peut être différent selon l'InputFormat.

---

### Question 4
**Qu'est-ce qu'un Record dans le contexte MapReduce ?**

- A) Un fichier complet
- **B) Une unité de données passée à la fonction Map (ex: une ligne de texte) ✓**
- C) Un bloc HDFS
- D) Un résultat final

**✅ Réponse: B**

💡 **Conseil:** Un **Record** = plus petite unité traitée par un Mapper. Par défaut (TextInputFormat), 1 record = 1 ligne. La fonction Map est appelée une fois par record.

---

### Question 5
**Quelle est la sortie de la fonction Map ?**

- A) Un fichier texte
- **B) Des couples (clé, valeur) intermédiaires ✓**
- C) Un nombre unique
- D) Une base de données

**✅ Réponse: B**

💡 **Conseil:** Map produit des paires **(key, value)**. Exemple WordCount : mot="hello" → ("hello", 1). Ces paires sont ensuite triées et groupées pour le Reduce.

---

### Question 6
**Que fait la phase Shuffle & Sort ?**

- A) Compresse les données
- **B) Mélange et trie les données intermédiaires par clé ✓**
- C) Supprime les doublons
- D) Crée des sauvegardes

**✅ Réponse: B**

💡 **Conseil:** **Shuffle** = transfert des sorties Map vers les Reducers. **Sort** = tri par clé. Résultat : chaque Reducer reçoit toutes les valeurs d'une même clé.

---

### Question 7
**Combien de processus Reduce sont créés par défaut ?**

- A) Aucun
- **B) Un seul ✓**
- C) Autant que de Mappers
- D) Dix

**✅ Réponse: B**

💡 **Conseil:** Par défaut **1 seul Reducer**, mais configurable. Plusieurs Reducers = meilleure parallélisation mais résultats dans des fichiers séparés (pas de tri global automatique).

---

### Question 8
**Dans MapReduce v1, quel démon divise le travail sur les Mappers et Reducers ?**

- A) TaskTracker
- **B) JobTracker ✓**
- C) NameNode
- D) DataNode

**✅ Réponse: B**

💡 **Conseil:** **JobTracker** (v1) = Master qui planifie les tâches et les distribue aux TaskTrackers. Remplacé par ResourceManager + ApplicationMaster dans YARN.

---

### Question 9
**Quel démon s'exécute sur chaque nœud pour exécuter les tâches Map-Reduce dans la v1 ?**

- A) JobTracker
- **B) TaskTracker ✓**
- C) ResourceManager
- D) NodeManager

**✅ Réponse: B**

💡 **Conseil:** **TaskTracker** (v1) = démon sur chaque nœud esclave qui exécute les tâches assignées par le JobTracker. Remplacé par NodeManager dans YARN.

---

### Question 10
**Qu'est-ce qu'un Slot dans MapReduce v1 ?**

- A) Un espace de stockage
- **B) Une unité d'exécution représentant la capacité à exécuter une tâche ✓**
- C) Un type de données
- D) Un protocole réseau

**✅ Réponse: B**

💡 **Conseil:** Les **Slots** étaient des unités fixes : Map Slots et Reduce Slots séparés. Problème : si tous les Map slots sont utilisés, les Reduce slots restent inutilisés même si disponibles.

---

### Question 11
**Quelle était la limite de nœuds par cluster dans MapReduce v1 ?**

- A) 1000 nœuds
- B) 2000 nœuds
- **C) 4000 nœuds ✓**
- D) 10000 nœuds

**✅ Réponse: C**

💡 **Conseil:** **4000 nœuds max** dans v1 car le JobTracker centralisé ne pouvait pas gérer plus. YARN a éliminé cette limite grâce à son architecture distribuée.

---

### Question 12
**Quel problème majeur avait MapReduce v1 concernant le JobTracker ?**

- A) Il était trop rapide
- **B) Il était un Single Point of Failure (SPoF) ✓**
- C) Il utilisait trop de mémoire
- D) Il ne supportait pas Java

**✅ Réponse: B**

💡 **Conseil:** Le **JobTracker = SPoF** : s'il tombe, tous les jobs en cours doivent redémarrer. YARN résout cela avec un ResourceManager en HA.

---

### Question 13
**Que signifie YARN ?**

- A) Yet Another Resource Navigator
- **B) Yet Another Resource Negotiator ✓**
- C) Yarn Application Resource Node
- D) Yield And Resource Network

**✅ Réponse: B**

💡 **Conseil:** **Y**et **A**nother **R**esource **N**egotiator. YARN sépare la gestion des ressources (ResourceManager) de la gestion des tâches (ApplicationMaster).

---

### Question 14
**Dans YARN (MapReduce v2), quel composant remplace le JobTracker pour la gestion des ressources ?**

- A) TaskTracker
- **B) Resource Manager ✓**
- C) Application Master
- D) Container

**✅ Réponse: B**

💡 **Conseil:** **Resource Manager** = ordonnanceur global des ressources du cluster. L'ApplicationMaster gère les tâches spécifiques à chaque application.

---

### Question 15
**Où s'exécute le Resource Manager dans YARN ?**

- A) Sur tous les nœuds
- **B) Sur le nœud Master uniquement ✓**
- C) Sur les DataNodes
- D) Dans le cloud

**✅ Réponse: B**

💡 **Conseil:** Le **RM s'exécute sur le nœud Master**. Les NodeManagers s'exécutent sur chaque nœud esclave. Séparation claire Master/Slave.

---

### Question 16
**Qu'est-ce qu'un Container dans YARN ?**

- A) Un fichier de données
- **B) Une unité d'exécution avec des ressources allouées (CPU, mémoire) ✓**
- C) Un protocole réseau
- D) Un type de compression

**✅ Réponse: B**

💡 **Conseil:** **Container** = unité d'exécution dynamique avec CPU + mémoire alloués. Remplace les slots fixes de v1. Plus flexible et efficace.

---

### Question 17
**Combien d'Application Master y a-t-il par application dans YARN ?**

- A) Aucun
- **B) Un seul ✓**
- C) Plusieurs
- D) Autant que de nœuds

**✅ Réponse: B**

💡 **Conseil:** **1 Application Master par application**. Il négocie les ressources avec le RM et coordonne l'exécution des tâches de son application.

---

### Question 18
**Quel est le rôle de l'Application Master ?**

- A) Gérer les ressources globales du cluster
- **B) Demander des containers et gérer les tâches de son application ✓**
- C) Stocker les données
- D) Monitorer le cluster

**✅ Réponse: B**

💡 **Conseil:** L'**ApplicationMaster** : 1) Demande des containers au RM, 2) Lance les tâches dans ces containers, 3) Gère les échecs et relances. Un par application.

---

### Question 19
**YARN permet-il d'exécuter des applications non-MapReduce ?**

- A) Non, uniquement MapReduce
- **B) Oui, il supporte MR et non-MR ✓**
- C) Seulement avec des plugins
- D) Uniquement Spark

**✅ Réponse: B**

💡 **Conseil:** **YARN = plateforme générique**. Il peut exécuter MapReduce, Spark, Tez, Flink, etc. C'est un avantage majeur sur v1 qui ne supportait que MapReduce.

---

### Question 20
**Quelle est la différence principale entre les slots (v1) et les containers (v2) ?**

- A) Aucune différence
- **B) Les slots sont prédéfinis et fixes, les containers sont alloués dynamiquement ✓**
- C) Les containers sont plus petits
- D) Les slots sont plus modernes

**✅ Réponse: B**

💡 **Conseil:** **Slots** = nombre fixe, séparés Map/Reduce. **Containers** = alloués à la demande, flexibles. Les containers utilisent mieux les ressources disponibles.

---

### Question 21
**Dans l'exemple du comptage de lignes, que fait la fonction Map sur chaque bloc ?**

- A) Compte toutes les lignes du fichier
- **B) Lit ligne par ligne et incrémente un compteur local ✓**
- C) Trie les lignes
- D) Compresse les lignes

**✅ Réponse: B**

💡 **Conseil:** Chaque **Mapper** compte les lignes de son bloc local. Résultat : un compteur partiel par Mapper. Ces compteurs sont ensuite agrégés par le Reducer.

---

### Question 22
**Dans l'exemple du comptage de lignes, que fait la fonction Reduce ?**

- A) Lit les lignes
- **B) Fait la somme des compteurs de tous les Mappers ✓**
- C) Trie les résultats
- D) Sauvegarde les données

**✅ Réponse: B**

💡 **Conseil:** Le **Reducer** agrège : somme de tous les compteurs partiels = nombre total de lignes. Le Reducer reçoit peu de données (des chiffres, pas les lignes).

---

### Question 23
**Pourquoi est-il coûteux de copier 20 TB de données vers un serveur central ?**

- A) Le serveur est trop petit
- **B) Le temps de transfert peut prendre des heures voire des jours ✓**
- C) Les données sont cryptées
- D) Le format n'est pas compatible

**✅ Réponse: B**

💡 **Conseil:** Réseau 1 Gbps = ~100 MB/s = 20 TB en ~55 heures minimum. MapReduce évite ce transfert en traitant les données localement.

---

### Question 24
**Qu'est-ce que le Node Manager dans YARN ?**

- A) Le gestionnaire global du cluster
- **B) Le démon qui s'exécute sur chaque nœud esclave et communique avec le RM ✓**
- C) Un outil de monitoring
- D) Un système de stockage

**✅ Réponse: B**

💡 **Conseil:** **NodeManager** = successeur du TaskTracker. Un par nœud esclave. Gère les containers locaux, rapporte les ressources au RM, surveille la santé du nœud.

---

### Question 25
**Quel problème de MapReduce v1 concernait l'utilisation des slots ?**

- A) Trop de slots disponibles
- **B) Si les map slots sont pleins, les reduce slots ne peuvent pas être utilisés et vice-versa ✓**
- C) Les slots sont trop rapides
- D) Les slots ne fonctionnent pas avec HDFS

**✅ Réponse: B**

💡 **Conseil:** Les **slots étaient cloisonnés** : Map slots ≠ Reduce slots. Ressources gaspillées si une catégorie est pleine et l'autre vide. YARN unifie avec les containers.

---

### Question 26
**Quel problème d'interopérabilité avait MapReduce v1 ?**

- A) Ne supportait pas Java
- **B) Impossible d'exécuter des applications non-MapReduce sur HDFS ✓**
- C) Incompatible avec Linux
- D) Ne fonctionnait pas avec le réseau

**✅ Réponse: B**

💡 **Conseil:** Le **JobTracker était couplé à MapReduce**. Impossible d'utiliser d'autres frameworks (Spark, etc.) sur le même cluster. YARN découple et permet tout.

---

### Question 27
**Dans YARN, les ressources sont allouées :**

- A) De manière fixe et prédéfinie
- **B) À la demande, dynamiquement ✓**
- C) Uniquement au démarrage
- D) Par l'administrateur manuellement

**✅ Réponse: B**

💡 **Conseil:** YARN alloue les ressources **à la demande**. L'ApplicationMaster demande des containers au RM qui les alloue si disponibles. Allocation dynamique et flexible.

---

### Question 28
**Combien de Mappers sont créés pour traiter un fichier de 20 TB avec des blocs de 128 MB ?**

- A) 1 Mapper
- B) 20 Mappers
- **C) Un Mapper par bloc (environ 156,250 Mappers) ✓**
- D) 100 Mappers

**✅ Réponse: C**

💡 **Conseil:** 20 TB = 20 × 1024 × 1024 MB = 20,971,520 MB. Divisé par 128 MB = **~163,840 blocs = ~163,840 Mappers**. C'est la puissance du parallélisme MapReduce !

---

### Question 29
**Quelle phase intervient entre Map et Reduce ?**

- A) Compress
- **B) Shuffle & Sort ✓**
- C) Filter
- D) Join

**✅ Réponse: B**

💡 **Conseil:** Flux MapReduce : **Map → Shuffle & Sort → Reduce**. Le Shuffle transfère les données, le Sort les trie par clé avant envoi aux Reducers.

---

### Question 30
**Qu'est-ce que le Framework MapReduce fournit ?**

- A) Des données
- **B) Des APIs Java et gère les tâches internes à l'exécution ✓**
- C) Du stockage uniquement
- D) De la visualisation

**✅ Réponse: B**

💡 **Conseil:** Le **Framework** fournit : APIs (Mapper, Reducer, Job...), moteur d'exécution (création des splits, scheduling, shuffle/sort, tolérance aux pannes).

---

### Question 31
**La technique MapReduce est-elle universelle pour tous les problèmes ?**

- A) Oui, elle résout tous les problèmes
- **B) Non, ce n'est pas une approche universelle pour tous les types de problèmes ✓**
- C) Seulement pour les problèmes mathématiques
- D) Uniquement pour le tri

**✅ Réponse: B**

💡 **Conseil:** MapReduce est adapté aux **problèmes parallelisables** (agrégations, comptages, ETL). Mal adapté aux : algorithmes itératifs, graphes, ML avec beaucoup d'itérations.

---

### Question 32
**Pour avoir un résultat trié par ordre avec plusieurs Reducers, que faut-il faire ?**

- A) Rien, c'est automatique
- **B) Avoir un seul Reducer ou ajouter une étape de tri supplémentaire ✓**
- C) Utiliser Hive
- D) Compresser les données

**✅ Réponse: B**

💡 **Conseil:** Avec plusieurs Reducers, chaque fichier de sortie est trié localement mais pas globalement. Solutions : 1 Reducer (ne scale pas) ou job de tri additionnel.

---

### Question 33
**Le TaskTracker choisit généralement de traiter un bloc sur quelle machine ?**

- A) Une machine aléatoire
- **B) La même machine que lui (data locality) ✓**
- C) Le serveur central
- D) La machine la plus puissante

**✅ Réponse: B**

💡 **Conseil:** **Data Locality** = traiter les données localement. Le scheduler essaie d'assigner les tâches aux nœuds qui stockent les données pour éviter le transfert réseau.

---

### Question 34
**Quels sont les 3 composants de l'architecture MapReduce v1 ?**

- A) Map, Reduce, Sort
- **B) API, Framework, Resource Management ✓**
- C) HDFS, YARN, Hive
- D) Input, Process, Output

**✅ Réponse: B**

💡 **Conseil:** 3 composants v1 : **1) API** (programmation), **2) Framework** (exécution), **3) Resource Management** (gestion cluster). Dans v2, le 3ème est séparé dans YARN.

---

### Question 35
**Dans YARN, qui arbitre les ressources entre plusieurs applications ?**

- A) Application Master
- **B) Resource Manager ✓**
- C) Node Manager
- D) Container

**✅ Réponse: B**

💡 **Conseil:** Le **Resource Manager** est l'arbitre global. Il décide quelle application reçoit des ressources, selon les politiques de scheduling (FIFO, Fair, Capacity).

---

### Question 36
**La scalabilité de YARN est-elle meilleure que celle de MapReduce v1 ?**

- A) Non, elle est identique
- **B) Oui, bien meilleure grâce à l'architecture distribuée ✓**
- C) Non, elle est pire
- D) Cela dépend des données

**✅ Réponse: B**

💡 **Conseil:** v1 = JobTracker centralisé = **max 4000 nœuds**. YARN = architecture distribuée avec AM par application = **scalabilité quasi illimitée** (testée à 10,000+ nœuds).

---

### Question 37
**Où sont stockés les résultats finaux d'un job MapReduce ?**

- A) En mémoire uniquement
- **B) Dans un fichier HDFS ✓**
- C) Dans le JobTracker
- D) Dans Zookeeper

**✅ Réponse: B**

💡 **Conseil:** Les **résultats sont écrits dans HDFS** (OutputPath configuré). Chaque Reducer crée un fichier part-r-00000, part-r-00001, etc.

---

### Question 38
**Combien d'instances de la fonction Map sont créées pour un job ?**

- A) Une seule
- **B) Une par Input Split (généralement une par bloc) ✓**
- C) Dix
- D) Autant que de Reducers

**✅ Réponse: B**

💡 **Conseil:** **1 Mapper = 1 Input Split**. Par défaut, 1 Split ≈ 1 bloc HDFS. Fichier de 10 blocs = 10 Mappers en parallèle.

---

### Question 39
**La tolérance aux pannes dans YARN est-elle meilleure que dans MapReduce v1 ?**

- A) Non, elle est identique
- **B) Oui, grâce à la haute disponibilité du Resource Manager ✓**
- C) Non, elle est pire
- D) Il n'y a pas de tolérance aux pannes

**✅ Réponse: B**

💡 **Conseil:** YARN supporte le **RM en HA** (avec Zookeeper). De plus, si un AM échoue, YARN peut le relancer. Bien plus résilient que le JobTracker unique de v1.

---

### Question 40
**Que se passe-t-il si le JobTracker tombe en panne dans MapReduce v1 ?**

- A) Rien, le système continue
- **B) Tous les jobs doivent redémarrer ✓**
- C) Les données sont perdues
- D) Un nouveau JobTracker est élu automatiquement

**✅ Réponse: B**

💡 **Conseil:** Sans HA dans v1, la **panne du JobTracker = perte de tous les jobs en cours**. Les données HDFS sont intactes, mais le travail de calcul est perdu.

---

## 📊 Résumé des Thèmes Abordés

| Thème | Nombre de Questions |
|-------|---------------------|
| Concepts MapReduce (Map, Reduce, Shuffle) | 12 |
| MapReduce v1 (JobTracker, TaskTracker, Slots) | 10 |
| YARN (ResourceManager, NodeManager, Containers) | 12 |
| Comparaison v1 vs v2 | 6 |

---

## 🎯 Conseils pour l'Examen

1. **Comprenez le flux MapReduce** :
   - Input → Split → **Map** → Shuffle & Sort → **Reduce** → Output

2. **Connaissez les composants v1 vs v2** :

   | v1 | v2 (YARN) |
   |----|----|
   | JobTracker | Resource Manager |
   | TaskTracker | Node Manager |
   | Slots (fixes) | Containers (dynamiques) |

3. **Retenez les problèmes de v1** :
   - Scalabilité limitée (4000 nœuds)
   - SPoF (JobTracker)
   - Slots non flexibles
   - Uniquement MapReduce

4. **Comprenez YARN** :
   - RM = arbitre global des ressources
   - AM = gestionnaire par application
   - NM = agent sur chaque nœud
   - Container = unité d'exécution

5. **Principe clé** : "Move computation to data"

---

**Bonne chance pour votre examen ! 🍀**
