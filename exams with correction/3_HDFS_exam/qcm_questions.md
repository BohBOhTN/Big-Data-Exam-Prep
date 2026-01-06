# QCM - HDFS (Hadoop Distributed File System)

## Chapitre 3 : HDFS

**Auteur du cours:** Mohamed KOUBAA  
**Nombre de questions:** 40

---

### Question 1
Quelle est la taille par défaut d'un bloc dans HDFS version 2 ?

- A) 64 MB
- B) 128 MB
- C) 256 MB
- D) 512 MB

---

### Question 2
Quel est le facteur de réplication par défaut dans HDFS ?

- A) 1
- B) 2
- C) 3
- D) 4

---

### Question 3
Quel composant HDFS est responsable de la gestion de l'espace de noms du système de fichiers ?

- A) DataNode
- B) NameNode
- C) Secondary NameNode
- D) Zookeeper

---

### Question 4
Quel composant HDFS stocke physiquement les blocs de données ?

- A) NameNode
- B) DataNode
- C) Journal Node
- D) Resource Manager

---

### Question 5
Qu'est-ce que FSImage dans HDFS ?

- A) Un fichier de configuration
- B) Un fichier en mémoire contenant la table d'adresses des blocs
- C) Un fichier de logs
- D) Un fichier de sauvegarde

---

### Question 6
Qu'est-ce que EditLog dans HDFS ?

- A) Un fichier image du système
- B) Un journal de toutes les modifications du système de fichiers
- C) Un fichier de configuration
- D) Un fichier de monitoring

---

### Question 7
Qu'est-ce qu'un Heartbeat dans HDFS ?

- A) Un signal de synchronisation des données
- B) Une pulsation envoyée par les DataNodes au NameNode pour signaler qu'ils sont actifs
- C) Un mécanisme de compression
- D) Un protocole de transfert de données

---

### Question 8
Quelle commande permet de lister les fichiers d'un répertoire HDFS ?

- A) hdfs dfs -dir
- B) hdfs dfs -ls
- C) hdfs dfs -list
- D) hdfs dfs -show

---

### Question 9
Quelle commande permet de copier un fichier local vers HDFS ?

- A) hdfs dfs -copy
- B) hdfs dfs -put
- C) hdfs dfs -upload
- D) hdfs dfs -send

---

### Question 10
Quelle commande permet de copier un fichier HDFS vers le système local ?

- A) hdfs dfs -copy
- B) hdfs dfs -download
- C) hdfs dfs -get
- D) hdfs dfs -fetch

---

### Question 11
Quel est le nombre minimum de machines nécessaires pour le Quorum Journal Manager (QJM) ?

- A) 1
- B) 2
- C) 3
- D) 5

---

### Question 12
À quelle fréquence le Secondary NameNode effectue-t-il un checkpoint par défaut ?

- A) Toutes les 15 minutes
- B) Toutes les 30 minutes
- C) Toutes les heures
- D) Toutes les 24 heures

---

### Question 13
Dans une architecture HDFS, combien de NameNode(s) actif(s) y a-t-il normalement ?

- A) Aucun
- B) Un seul
- C) Deux
- D) Plusieurs

---

### Question 14
Qu'est-ce qu'un Rack dans un cluster Hadoop ?

- A) Un type de fichier
- B) Un regroupement physique de serveurs
- C) Un protocole réseau
- D) Un outil de monitoring

---

### Question 15
Que signifie SPOF (Single Point of Failure) concernant le NameNode ?

- A) Le NameNode est très rapide
- B) Le NameNode est un point de défaillance unique pouvant causer l'arrêt du système
- C) Le NameNode peut être dupliqué facilement
- D) Le NameNode stocke une seule copie des données

---

### Question 16
Quel composant permet la haute disponibilité en cas de panne du NameNode actif ?

- A) DataNode
- B) Standby NameNode
- C) Secondary NameNode
- D) Task Tracker

---

### Question 17
Quelle est la différence entre Secondary NameNode et Standby NameNode ?

- A) Ils sont identiques
- B) Secondary fait des checkpoints, Standby peut prendre le relais en cas de panne
- C) Standby fait des checkpoints, Secondary peut prendre le relais
- D) Les deux peuvent prendre le relais

---

### Question 18
Quel service est utilisé pour la coordination et l'élection de leader dans HDFS HA ?

- A) Ambari
- B) Oozie
- C) Zookeeper
- D) Flume

---

### Question 19
Que fait la commande `hdfs dfs -mkdir -p /chemin/complet` ?

- A) Crée uniquement le dernier répertoire
- B) Crée tous les répertoires parents si nécessaire
- C) Supprime le répertoire existant
- D) Liste les répertoires

---

### Question 20
Quelle commande affiche le contenu d'un fichier HDFS ?

- A) hdfs dfs -show
- B) hdfs dfs -cat
- C) hdfs dfs -read
- D) hdfs dfs -display

---

### Question 21
Quelle commande permet de vérifier l'espace disponible dans HDFS ?

- A) hdfs dfs -space
- B) hdfs dfs -size
- C) hdfs dfs -df
- D) hdfs dfs -free

---

### Question 22
Qu'est-ce que le "Rack Awareness Mode" dans HDFS ?

- A) Un mode de compression
- B) Un mode où les copies sont stockées dans des racks différents pour la tolérance aux pannes
- C) Un mode de monitoring
- D) Un mode de sécurité

---

### Question 23
Quel type d'architecture utilise HDFS ?

- A) Peer-to-Peer
- B) Master/Slave
- C) Client/Serveur traditionnel
- D) Mesh

---

### Question 24
Quelle commande permet de supprimer un répertoire et son contenu dans HDFS ?

- A) hdfs dfs -del
- B) hdfs dfs -rm -r
- C) hdfs dfs -delete
- D) hdfs dfs -remove

---

### Question 25
Que contient un Block Report envoyé par un DataNode ?

- A) Les erreurs système
- B) La liste des blocs stockés sur ce DataNode
- C) Les configurations réseau
- D) Les utilisateurs connectés

---

### Question 26
Quelle commande permet de déplacer un fichier du local vers HDFS en supprimant l'original ?

- A) hdfs dfs -put
- B) hdfs dfs -mv
- C) hdfs dfs -moveFromLocal
- D) hdfs dfs -cut

---

### Question 27
Le FSImage est-il volatile ou persistant ?

- A) Persistant sur disque
- B) Volatile (en mémoire, perdu au redémarrage)
- C) Partiellement persistant
- D) Stocké sur les DataNodes

---

### Question 28
Comment le FSImage peut-il être reconstruit après un redémarrage ?

- A) Il ne peut pas être reconstruit
- B) À partir du EditLog
- C) À partir des DataNodes
- D) À partir de Zookeeper

---

### Question 29
Quelle est la caractéristique principale de la scalabilité HDFS ?

- A) Scalabilité verticale uniquement
- B) Scalabilité horizontale (ajout de machines)
- C) Scalabilité limitée à 10 nœuds
- D) Pas de scalabilité

---

### Question 30
Que fait HDFS automatiquement quand un DataNode tombe en panne ?

- A) Arrête le cluster
- B) Recrée les copies des blocs pour maintenir le facteur de réplication
- C) Supprime les données
- D) Envoie une alerte et attend une intervention manuelle

---

### Question 31
Quelle commande est un alias de `hdfs dfs -put` ?

- A) hdfs dfs -upload
- B) hdfs dfs -copyFromLocal
- C) hdfs dfs -send
- D) hdfs dfs -transfer

---

### Question 32
Quelle commande est un alias de `hdfs dfs -get` ?

- A) hdfs dfs -download
- B) hdfs dfs -copyToLocal
- C) hdfs dfs -fetch
- D) hdfs dfs -retrieve

---

### Question 33
Dans HDFS 3.0, quelle alternative à la réplication a été introduite pour économiser l'espace ?

- A) Compression automatique
- B) Erasure Coding
- C) Déduplication
- D) Archivage

---

### Question 34
Lors d'une opération d'écriture, avec qui le client interagit-il en premier ?

- A) DataNode
- B) NameNode
- C) Secondary NameNode
- D) Zookeeper

---

### Question 35
Que vérifie le NameNode avant de créer un fichier ?

- A) L'espace disque uniquement
- B) L'existence du fichier et les droits d'accès
- C) La connexion réseau
- D) La charge CPU

---

### Question 36
Quelle commande affiche la fin d'un fichier HDFS ?

- A) hdfs dfs -end
- B) hdfs dfs -tail
- C) hdfs dfs -last
- D) hdfs dfs -bottom

---

### Question 37
Que signifie HA dans le contexte HDFS ?

- A) Hadoop Architecture
- B) High Availability
- C) Hardware Allocation
- D) Hadoop Administration

---

### Question 38
Quel est le rôle du Quorum Journal Manager ?

- A) Gérer les requêtes des utilisateurs
- B) Stocker le EditLog de manière distribuée pour la haute disponibilité
- C) Compresser les données
- D) Monitorer le cluster

---

### Question 39
Lors du failover, comment le Standby NameNode devient-il actif ?

- A) Par intervention manuelle uniquement
- B) En acquérant le lock dans Zookeeper quand le NameNode actif échoue
- C) Par redémarrage du cluster
- D) En copiant les données du NameNode actif

---

### Question 40
Quelle commande permet de compter les répertoires, fichiers et la taille dans HDFS ?

- A) hdfs dfs -size
- B) hdfs dfs -count
- C) hdfs dfs -stat
- D) hdfs dfs -info

---

## Fin du QCM

**Instructions:** Pour chaque question, sélectionnez la meilleure réponse parmi les options proposées (A, B, C ou D).
