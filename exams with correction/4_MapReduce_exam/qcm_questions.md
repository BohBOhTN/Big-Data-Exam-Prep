# QCM - MapReduce

## Chapitre 4 : MapReduce

**Auteur du cours:** Mohamed KOUBAA  
**Nombre de questions:** 40

---

### Question 1
MapReduce est composé de combien de parties principales ?

- A) Une seule partie
- B) Deux parties (Framework et Technique de programmation)
- C) Trois parties
- D) Quatre parties

---

### Question 2
Quel est le principe fondamental de MapReduce concernant les données ?

- A) Copier toutes les données vers un serveur central
- B) Déplacer le calcul vers les données, pas l'inverse
- C) Compresser les données avant traitement
- D) Utiliser uniquement la mémoire RAM

---

### Question 3
Qu'est-ce qu'un Input Split dans MapReduce ?

- A) Une fonction de division des résultats
- B) Une division logique créée par le moteur d'exécution pour chaque bloc
- C) Un type de données
- D) Un format de fichier

---

### Question 4
Qu'est-ce qu'un Record dans le contexte MapReduce ?

- A) Un fichier complet
- B) Une unité de données passée à la fonction Map (ex: une ligne de texte)
- C) Un bloc HDFS
- D) Un résultat final

---

### Question 5
Quelle est la sortie de la fonction Map ?

- A) Un fichier texte
- B) Des couples (clé, valeur) intermédiaires
- C) Un nombre unique
- D) Une base de données

---

### Question 6
Que fait la phase Shuffle & Sort ?

- A) Compresse les données
- B) Mélange et trie les données intermédiaires par clé
- C) Supprime les doublons
- D) Crée des sauvegardes

---

### Question 7
Combien de processus Reduce sont créés par défaut ?

- A) Aucun
- B) Un seul
- C) Autant que de Mappers
- D) Dix

---

### Question 8
Dans MapReduce v1, quel démon divise le travail sur les Mappers et Reducers ?

- A) TaskTracker
- B) JobTracker
- C) NameNode
- D) DataNode

---

### Question 9
Quel démon s'exécute sur chaque nœud pour exécuter les tâches Map-Reduce dans la v1 ?

- A) JobTracker
- B) TaskTracker
- C) ResourceManager
- D) NodeManager

---

### Question 10
Qu'est-ce qu'un Slot dans MapReduce v1 ?

- A) Un espace de stockage
- B) Une unité d'exécution représentant la capacité à exécuter une tâche
- C) Un type de données
- D) Un protocole réseau

---

### Question 11
Quelle était la limite de nœuds par cluster dans MapReduce v1 ?

- A) 1000 nœuds
- B) 2000 nœuds
- C) 4000 nœuds
- D) 10000 nœuds

---

### Question 12
Quel problème majeur avait MapReduce v1 concernant le JobTracker ?

- A) Il était trop rapide
- B) Il était un Single Point of Failure (SPoF)
- C) Il utilisait trop de mémoire
- D) Il ne supportait pas Java

---

### Question 13
Que signifie YARN ?

- A) Yet Another Resource Navigator
- B) Yet Another Resource Negotiator
- C) Yarn Application Resource Node
- D) Yield And Resource Network

---

### Question 14
Dans YARN (MapReduce v2), quel composant remplace le JobTracker pour la gestion des ressources ?

- A) TaskTracker
- B) Resource Manager
- C) Application Master
- D) Container

---

### Question 15
Où s'exécute le Resource Manager dans YARN ?

- A) Sur tous les nœuds
- B) Sur le nœud Master uniquement
- C) Sur les DataNodes
- D) Dans le cloud

---

### Question 16
Qu'est-ce qu'un Container dans YARN ?

- A) Un fichier de données
- B) Une unité d'exécution avec des ressources allouées (CPU, mémoire)
- C) Un protocole réseau
- D) Un type de compression

---

### Question 17
Combien d'Application Master y a-t-il par application dans YARN ?

- A) Aucun
- B) Un seul
- C) Plusieurs
- D) Autant que de nœuds

---

### Question 18
Quel est le rôle de l'Application Master ?

- A) Gérer les ressources globales du cluster
- B) Demander des containers et gérer les tâches de son application
- C) Stocker les données
- D) Monitorer le cluster

---

### Question 19
YARN permet-il d'exécuter des applications non-MapReduce ?

- A) Non, uniquement MapReduce
- B) Oui, il supporte MR et non-MR
- C) Seulement avec des plugins
- D) Uniquement Spark

---

### Question 20
Quelle est la différence principale entre les slots (v1) et les containers (v2) ?

- A) Aucune différence
- B) Les slots sont prédéfinis et fixes, les containers sont alloués dynamiquement
- C) Les containers sont plus petits
- D) Les slots sont plus modernes

---

### Question 21
Dans l'exemple du comptage de lignes, que fait la fonction Map sur chaque bloc ?

- A) Compte toutes les lignes du fichier
- B) Lit ligne par ligne et incrémente un compteur local
- C) Trie les lignes
- D) Compresse les lignes

---

### Question 22
Dans l'exemple du comptage de lignes, que fait la fonction Reduce ?

- A) Lit les lignes
- B) Fait la somme des compteurs de tous les Mappers
- C) Trie les résultats
- D) Sauvegarde les données

---

### Question 23
Pourquoi est-il coûteux de copier 20 TB de données vers un serveur central ?

- A) Le serveur est trop petit
- B) Le temps de transfert peut prendre des heures voire des jours
- C) Les données sont cryptées
- D) Le format n'est pas compatible

---

### Question 24
Qu'est-ce que le Node Manager dans YARN ?

- A) Le gestionnaire global du cluster
- B) Le démon qui s'exécute sur chaque nœud esclave et communique avec le RM
- C) Un outil de monitoring
- D) Un système de stockage

---

### Question 25
Quel problème de MapReduce v1 concernait l'utilisation des slots ?

- A) Trop de slots disponibles
- B) Si les map slots sont pleins, les reduce slots ne peuvent pas être utilisés et vice-versa
- C) Les slots sont trop rapides
- D) Les slots ne fonctionnent pas avec HDFS

---

### Question 26
Quel problème d'interopérabilité avait MapReduce v1 ?

- A) Ne supportait pas Java
- B) Impossible d'exécuter des applications non-MapReduce sur HDFS
- C) Incompatible avec Linux
- D) Ne fonctionnait pas avec le réseau

---

### Question 27
Dans YARN, les ressources sont allouées :

- A) De manière fixe et prédéfinie
- B) À la demande, dynamiquement
- C) Uniquement au démarrage
- D) Par l'administrateur manuellement

---

### Question 28
Combien de Mappers sont créés pour traiter un fichier de 20 TB avec des blocs de 128 MB ?

- A) 1 Mapper
- B) 20 Mappers
- C) Un Mapper par bloc (environ 156,250 Mappers)
- D) 100 Mappers

---

### Question 29
Quelle phase intervient entre Map et Reduce ?

- A) Compress
- B) Shuffle & Sort
- C) Filter
- D) Join

---

### Question 30
Qu'est-ce que le Framework MapReduce fournit ?

- A) Des données
- B) Des APIs Java et gère les tâches internes à l'exécution
- C) Du stockage uniquement
- D) De la visualisation

---

### Question 31
La technique MapReduce est-elle universelle pour tous les problèmes ?

- A) Oui, elle résout tous les problèmes
- B) Non, ce n'est pas une approche universelle pour tous les types de problèmes
- C) Seulement pour les problèmes mathématiques
- D) Uniquement pour le tri

---

### Question 32
Pour avoir un résultat trié par ordre avec plusieurs Reducers, que faut-il faire ?

- A) Rien, c'est automatique
- B) Avoir un seul Reducer ou ajouter une étape de tri supplémentaire
- C) Utiliser Hive
- D) Compresser les données

---

### Question 33
Le TaskTracker choisit généralement de traiter un bloc sur quelle machine ?

- A) Une machine aléatoire
- B) La même machine que lui (data locality)
- C) Le serveur central
- D) La machine la plus puissante

---

### Question 34
Quels sont les 3 composants de l'architecture MapReduce v1 ?

- A) Map, Reduce, Sort
- B) API, Framework, Resource Management
- C) HDFS, YARN, Hive
- D) Input, Process, Output

---

### Question 35
Dans YARN, qui arbitre les ressources entre plusieurs applications ?

- A) Application Master
- B) Resource Manager
- C) Node Manager
- D) Container

---

### Question 36
La scalabilité de YARN est-elle meilleure que celle de MapReduce v1 ?

- A) Non, elle est identique
- B) Oui, bien meilleure grâce à l'architecture distribuée
- C) Non, elle est pire
- D) Cela dépend des données

---

### Question 37
Où sont stockés les résultats finaux d'un job MapReduce ?

- A) En mémoire uniquement
- B) Dans un fichier HDFS
- C) Dans le JobTracker
- D) Dans Zookeeper

---

### Question 38
Combien d'instances de la fonction Map sont créées pour un job ?

- A) Une seule
- B) Une par Input Split (généralement une par bloc)
- C) Dix
- D) Autant que de Reducers

---

### Question 39
La tolérance aux pannes dans YARN est-elle meilleure que dans MapReduce v1 ?

- A) Non, elle est identique
- B) Oui, grâce à la haute disponibilité du Resource Manager
- C) Non, elle est pire
- D) Il n'y a pas de tolérance aux pannes

---

### Question 40
Que se passe-t-il si le JobTracker tombe en panne dans MapReduce v1 ?

- A) Rien, le système continue
- B) Tous les jobs doivent redémarrer
- C) Les données sont perdues
- D) Un nouveau JobTracker est élu automatiquement

---

## Fin du QCM

**Instructions:** Pour chaque question, sélectionnez la meilleure réponse parmi les options proposées (A, B, C ou D).
