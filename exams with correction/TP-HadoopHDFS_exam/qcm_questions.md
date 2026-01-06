# QCM - TP Hadoop HDFS

## Travaux Pratiques : Manipulation des fichiers HDFS et Haute Disponibilité

**Auteur du cours:** Mohamed KOUBAA  
**Nombre de questions:** 40

---

### Question 1
Quelle commande permet de démarrer un cluster Hadoop avec Docker Compose ?

- A) docker start hadoop
- B) docker-compose up -d
- C) docker run hadoop
- D) hadoop start cluster

---

### Question 2
Que signifie l'option -d dans docker-compose up -d ?

- A) Debug mode
- B) Detached mode (arrière-plan)
- C) Delete mode
- D) Direct mode

---

### Question 3
Quelle commande permet de vérifier les conteneurs Docker en cours d'exécution ?

- A) docker list
- B) docker ps
- C) docker show
- D) docker status

---

### Question 4
Quelle commande permet d'accéder au shell d'un conteneur Docker ?

- A) docker shell container_name
- B) docker exec -it container_name bash
- C) docker enter container_name
- D) docker connect container_name

---

### Question 5
Quelle commande affiche les processus Java dans un conteneur ?

- A) java -list
- B) jps
- C) ps java
- D) java --processes

---

### Question 6
Quelle commande permet de vérifier l'état d'un NameNode dans un cluster HA ?

- A) hdfs check nn1
- B) hdfs haadmin -getServiceState nn1
- C) hdfs status nn1
- D) hdfs namenode status

---

### Question 7
Quels sont les deux états possibles d'un NameNode dans un cluster HA ?

- A) Running / Stopped
- B) Active / Standby
- C) Master / Slave
- D) Primary / Secondary

---

### Question 8
Quelle commande affiche l'état de tous les services NameNode ?

- A) hdfs haadmin -status all
- B) hdfs haadmin -getAllServiceState
- C) hdfs haadmin -list
- D) hdfs status all

---

### Question 9
Quelle commande Docker permet d'arrêter un conteneur ?

- A) docker kill container_name
- B) docker stop container_name
- C) docker end container_name
- D) docker terminate container_name

---

### Question 10
Que se passe-t-il automatiquement quand le NameNode actif est arrêté dans un cluster HA ?

- A) Le cluster s'arrête
- B) Le Standby NameNode devient actif (failover)
- C) Les données sont perdues
- D) Un nouveau NameNode est créé

---

### Question 11
Quelle commande crée un répertoire dans HDFS ?

- A) hdfs dfs -create /path
- B) hdfs dfs -mkdir /path
- C) hdfs dfs -newdir /path
- D) hdfs dfs -md /path

---

### Question 12
Que fait l'option -p dans hdfs dfs -mkdir -p /path/to/dir ?

- A) Permission spéciale
- B) Crée les répertoires parents si nécessaires
- C) Chemin permanent
- D) Chemin prioritaire

---

### Question 13
Quelle commande liste le contenu d'un répertoire HDFS ?

- A) hdfs dfs -dir /path
- B) hdfs dfs -ls /path
- C) hdfs dfs -list /path
- D) hdfs dfs -show /path

---

### Question 14
Quelle option permet de lister récursivement le contenu d'un répertoire ?

- A) hdfs dfs -ls -a /path
- B) hdfs dfs -ls -R /path
- C) hdfs dfs -ls -all /path
- D) hdfs dfs -ls -recursive /path

---

### Question 15
Quelle commande copie un fichier local vers HDFS ?

- A) hdfs dfs -copy local hdfs
- B) hdfs dfs -put local_file /hdfs_path
- C) hdfs dfs -upload local_file /hdfs_path
- D) hdfs dfs -send local_file /hdfs_path

---

### Question 16
Quelle est la différence entre -put et -moveFromLocal ?

- A) Aucune différence
- B) -put copie, -moveFromLocal déplace (supprime le fichier local)
- C) -put est plus rapide
- D) -moveFromLocal compresse le fichier

---

### Question 17
Quelle commande copie un fichier de HDFS vers le système local ?

- A) hdfs dfs -download /hdfs_path local
- B) hdfs dfs -get /hdfs_path local_path
- C) hdfs dfs -fetch /hdfs_path local_path
- D) hdfs dfs -retrieve /hdfs_path local_path

---

### Question 18
Quelle commande affiche le contenu d'un fichier HDFS sans le télécharger ?

- A) hdfs dfs -show /path/file
- B) hdfs dfs -cat /path/file
- C) hdfs dfs -read /path/file
- D) hdfs dfs -display /path/file

---

### Question 19
Quelle commande permet de lire un fichier compressé dans HDFS ?

- A) hdfs dfs -cat /path/file.gz
- B) hdfs dfs -text /path/file.gz
- C) hdfs dfs -unzip /path/file.gz
- D) hdfs dfs -decompress /path/file.gz

---

### Question 20
Quelle commande affiche les dernières lignes d'un fichier HDFS ?

- A) hdfs dfs -end /path/file
- B) hdfs dfs -tail /path/file
- C) hdfs dfs -last /path/file
- D) hdfs dfs -bottom /path/file

---

### Question 21
Quelle commande vérifie l'espace utilisé par des fichiers/répertoires dans HDFS ?

- A) hdfs dfs -size /path
- B) hdfs dfs -du -h /path
- C) hdfs dfs -space /path
- D) hdfs dfs -usage /path

---

### Question 22
Que signifie l'option -h dans hdfs dfs -du -h ?

- A) Help
- B) Human-readable (format lisible: KB, MB, GB)
- C) Hidden files
- D) Headers

---

### Question 23
Quelle commande supprime un fichier dans HDFS ?

- A) hdfs dfs -delete /path/file
- B) hdfs dfs -rm /path/file
- C) hdfs dfs -del /path/file
- D) hdfs dfs -remove /path/file

---

### Question 24
Quelle option permet de supprimer un répertoire et son contenu ?

- A) hdfs dfs -rm -f /path
- B) hdfs dfs -rm -r /path
- C) hdfs dfs -rm -all /path
- D) hdfs dfs -rm -d /path

---

### Question 25
Quelle commande déplace ou renomme un fichier dans HDFS ?

- A) hdfs dfs -rename /old /new
- B) hdfs dfs -mv /old /new
- C) hdfs dfs -move /old /new
- D) hdfs dfs -rn /old /new

---

### Question 26
Quelle commande copie un fichier dans HDFS (d'un emplacement HDFS à un autre) ?

- A) hdfs dfs -copy /src /dest
- B) hdfs dfs -cp /src /dest
- C) hdfs dfs -duplicate /src /dest
- D) hdfs dfs -clone /src /dest

---

### Question 27
Quelle commande affiche des statistiques sur un fichier (comme le facteur de réplication) ?

- A) hdfs dfs -info /path/file
- B) hdfs dfs -stat %r /path/file
- C) hdfs dfs -status /path/file
- D) hdfs dfs -details /path/file

---

### Question 28
Quelle commande compte les répertoires, fichiers et la taille totale ?

- A) hdfs dfs -size /path
- B) hdfs dfs -count /path
- C) hdfs dfs -total /path
- D) hdfs dfs -summary /path

---

### Question 29
Combien de NameNodes y a-t-il dans le cluster HA du TP ?

- A) 1
- B) 2
- C) 3
- D) 4

---

### Question 30
Combien de DataNodes y a-t-il dans le cluster du TP ?

- A) 1
- B) 2
- C) 3
- D) 4

---

### Question 31
Combien de JournalNodes y a-t-il dans le cluster HA du TP ?

- A) 1
- B) 2
- C) 3
- D) 4

---

### Question 32
Quelle commande permet de voir les logs d'un conteneur Docker ?

- A) docker show logs container_name
- B) docker logs container_name
- C) docker view container_name
- D) docker output container_name

---

### Question 33
Que fait la commande docker start container_name ?

- A) Crée un nouveau conteneur
- B) Redémarre un conteneur arrêté
- C) Supprime un conteneur
- D) Liste les conteneurs

---

### Question 34
Quelle commande permet de créer un fichier local avant de l'envoyer vers HDFS ?

- A) create file.txt
- B) echo "contenu" > file.txt
- C) new file.txt
- D) touch --content file.txt

---

### Question 35
Quelle commande est un alias de hdfs dfs -put ?

- A) hdfs dfs -upload
- B) hdfs dfs -copyFromLocal
- C) hdfs dfs -send
- D) hdfs dfs -transfer

---

### Question 36
Quelle commande est un alias de hdfs dfs -get ?

- A) hdfs dfs -download
- B) hdfs dfs -copyToLocal
- C) hdfs dfs -fetch
- D) hdfs dfs -retrieve

---

### Question 37
Combien de ResourceManagers y a-t-il dans le cluster HA du TP ?

- A) 1
- B) 2
- C) 3
- D) 4

---

### Question 38
Que vérifie-t-on en exécutant hdfs dfs -ls / depuis un DataNode après l'arrêt du NameNode actif ?

- A) L'état du DataNode
- B) Que le failover HA fonctionne et que HDFS est toujours accessible
- C) La taille des fichiers
- D) Les permissions

---

### Question 39
Que fait la commande hdfs dfs -df ?

- A) Supprime des fichiers
- B) Affiche l'espace disque disponible dans HDFS
- C) Crée un répertoire
- D) Affiche les formats de fichiers

---

### Question 40
Quelle commande déplace un fichier de HDFS vers le système local (supprime de HDFS) ?

- A) hdfs dfs -get
- B) hdfs dfs -moveToLocal
- C) hdfs dfs -cut
- D) hdfs dfs -export

---

## Fin du QCM

**Instructions:** Pour chaque question, sélectionnez la meilleure réponse parmi les options proposées (A, B, C ou D).
