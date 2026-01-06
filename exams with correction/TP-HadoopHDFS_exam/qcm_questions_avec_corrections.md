# QCM - TP Hadoop HDFS
## Questions avec Corrections et Conseils

**Auteur du cours:** Mohamed KOUBAA  
**Nombre de questions:** 40

---

### Question 1
**Quelle commande permet de démarrer un cluster Hadoop avec Docker Compose ?**

- A) docker start hadoop
- **B) docker-compose up -d ✓**
- C) docker run hadoop
- D) hadoop start cluster

**✅ Réponse: B**

💡 **Conseil:** `docker-compose up -d` lit le fichier docker-compose.yml et démarre tous les services définis. L'option `-d` lance en arrière-plan.

---

### Question 2
**Que signifie l'option -d dans docker-compose up -d ?**

- A) Debug mode
- **B) Detached mode (arrière-plan) ✓**
- C) Delete mode
- D) Direct mode

**✅ Réponse: B**

💡 **Conseil:** **Detached** = les conteneurs s'exécutent en arrière-plan et vous récupérez le contrôle du terminal. Sans -d, les logs s'affichent en temps réel.

---

### Question 3
**Quelle commande permet de vérifier les conteneurs Docker en cours d'exécution ?**

- A) docker list
- **B) docker ps ✓**
- C) docker show
- D) docker status

**✅ Réponse: B**

💡 **Conseil:** `docker ps` = process status. Affiche les conteneurs en cours. `docker ps -a` affiche tous les conteneurs (y compris arrêtés).

---

### Question 4
**Quelle commande permet d'accéder au shell d'un conteneur Docker ?**

- A) docker shell container_name
- **B) docker exec -it container_name bash ✓**
- C) docker enter container_name
- D) docker connect container_name

**✅ Réponse: B**

💡 **Conseil:** `docker exec -it` = exécute une commande interactive. `-i` = interactive, `-t` = terminal. `bash` ouvre un shell dans le conteneur.

---

### Question 5
**Quelle commande affiche les processus Java dans un conteneur ?**

- A) java -list
- **B) jps ✓**
- C) ps java
- D) java --processes

**✅ Réponse: B**

💡 **Conseil:** **jps** = Java Process Status. Affiche les processus JVM (NameNode, DataNode, etc.). Outil du JDK, très utile pour le débogage Hadoop.

---

### Question 6
**Quelle commande permet de vérifier l'état d'un NameNode dans un cluster HA ?**

- A) hdfs check nn1
- **B) hdfs haadmin -getServiceState nn1 ✓**
- C) hdfs status nn1
- D) hdfs namenode status

**✅ Réponse: B**

💡 **Conseil:** `hdfs haadmin` = outil d'administration HA. `-getServiceState nn1` retourne "active" ou "standby". nn1/nn2 sont les identifiants des NameNodes.

---

### Question 7
**Quels sont les deux états possibles d'un NameNode dans un cluster HA ?**

- A) Running / Stopped
- **B) Active / Standby ✓**
- C) Master / Slave
- D) Primary / Secondary

**✅ Réponse: B**

💡 **Conseil:** **Active** = gère les requêtes clients. **Standby** = synchronisé et prêt à prendre le relais. Un seul NameNode est actif à la fois.

---

### Question 8
**Quelle commande affiche l'état de tous les services NameNode ?**

- A) hdfs haadmin -status all
- **B) hdfs haadmin -getAllServiceState ✓**
- C) hdfs haadmin -list
- D) hdfs status all

**✅ Réponse: B**

💡 **Conseil:** `-getAllServiceState` affiche l'état de tous les NameNodes configurés. Plus rapide que d'interroger chaque NN individuellement.

---

### Question 9
**Quelle commande Docker permet d'arrêter un conteneur ?**

- A) docker kill container_name
- **B) docker stop container_name ✓**
- C) docker end container_name
- D) docker terminate container_name

**✅ Réponse: B**

💡 **Conseil:** `docker stop` envoie SIGTERM puis SIGKILL après un délai. `docker kill` envoie SIGKILL immédiatement (arrêt brutal).

---

### Question 10
**Que se passe-t-il automatiquement quand le NameNode actif est arrêté dans un cluster HA ?**

- A) Le cluster s'arrête
- **B) Le Standby NameNode devient actif (failover) ✓**
- C) Les données sont perdues
- D) Un nouveau NameNode est créé

**✅ Réponse: B**

💡 **Conseil:** **Failover automatique** : Zookeeper détecte la panne, le Standby acquiert le lock et devient Active. HDFS reste accessible sans intervention.

---

### Question 11
**Quelle commande crée un répertoire dans HDFS ?**

- A) hdfs dfs -create /path
- **B) hdfs dfs -mkdir /path ✓**
- C) hdfs dfs -newdir /path
- D) hdfs dfs -md /path

**✅ Réponse: B**

💡 **Conseil:** `hdfs dfs -mkdir /path` = make directory. Similaire à la commande Unix. Échoue si le répertoire parent n'existe pas (sauf avec -p).

---

### Question 12
**Que fait l'option -p dans hdfs dfs -mkdir -p /path/to/dir ?**

- A) Permission spéciale
- **B) Crée les répertoires parents si nécessaires ✓**
- C) Chemin permanent
- D) Chemin prioritaire

**✅ Réponse: B**

💡 **Conseil:** `-p` = parents. Crée `/path`, `/path/to`, `/path/to/dir` si nécessaire. Sans -p, échec si `/path/to` n'existe pas.

---

### Question 13
**Quelle commande liste le contenu d'un répertoire HDFS ?**

- A) hdfs dfs -dir /path
- **B) hdfs dfs -ls /path ✓**
- C) hdfs dfs -list /path
- D) hdfs dfs -show /path

**✅ Réponse: B**

💡 **Conseil:** `hdfs dfs -ls` = list. Affiche permissions, propriétaire, taille, date, nom. Format similaire à `ls -l` sous Unix.

---

### Question 14
**Quelle option permet de lister récursivement le contenu d'un répertoire ?**

- A) hdfs dfs -ls -a /path
- **B) hdfs dfs -ls -R /path ✓**
- C) hdfs dfs -ls -all /path
- D) hdfs dfs -ls -recursive /path

**✅ Réponse: B**

💡 **Conseil:** `-R` = recursive. Liste le contenu du répertoire et de tous ses sous-répertoires. Utile pour voir toute l'arborescence.

---

### Question 15
**Quelle commande copie un fichier local vers HDFS ?**

- A) hdfs dfs -copy local hdfs
- **B) hdfs dfs -put local_file /hdfs_path ✓**
- C) hdfs dfs -upload local_file /hdfs_path
- D) hdfs dfs -send local_file /hdfs_path

**✅ Réponse: B**

💡 **Conseil:** `hdfs dfs -put` = copie Local → HDFS. Le fichier local est conservé. Alias : `-copyFromLocal`.

---

### Question 16
**Quelle est la différence entre -put et -moveFromLocal ?**

- A) Aucune différence
- **B) -put copie, -moveFromLocal déplace (supprime le fichier local) ✓**
- C) -put est plus rapide
- D) -moveFromLocal compresse le fichier

**✅ Réponse: B**

💡 **Conseil:** **-put/-copyFromLocal** = copie (original conservé). **-moveFromLocal** = déplace (original supprimé après copie vers HDFS).

---

### Question 17
**Quelle commande copie un fichier de HDFS vers le système local ?**

- A) hdfs dfs -download /hdfs_path local
- **B) hdfs dfs -get /hdfs_path local_path ✓**
- C) hdfs dfs -fetch /hdfs_path local_path
- D) hdfs dfs -retrieve /hdfs_path local_path

**✅ Réponse: B**

💡 **Conseil:** `hdfs dfs -get` = copie HDFS → Local. Alias : `-copyToLocal`. Le fichier HDFS est conservé.

---

### Question 18
**Quelle commande affiche le contenu d'un fichier HDFS sans le télécharger ?**

- A) hdfs dfs -show /path/file
- **B) hdfs dfs -cat /path/file ✓**
- C) hdfs dfs -read /path/file
- D) hdfs dfs -display /path/file

**✅ Réponse: B**

💡 **Conseil:** `hdfs dfs -cat` affiche le contenu sur stdout. Pour les gros fichiers, utilisez `-tail` ou redirigez vers `head`.

---

### Question 19
**Quelle commande permet de lire un fichier compressé dans HDFS ?**

- A) hdfs dfs -cat /path/file.gz
- **B) hdfs dfs -text /path/file.gz ✓**
- C) hdfs dfs -unzip /path/file.gz
- D) hdfs dfs -decompress /path/file.gz

**✅ Réponse: B**

💡 **Conseil:** `hdfs dfs -text` décompresse automatiquement et affiche le contenu. Fonctionne avec gzip, bzip2, et les formats SequenceFile.

---

### Question 20
**Quelle commande affiche les dernières lignes d'un fichier HDFS ?**

- A) hdfs dfs -end /path/file
- **B) hdfs dfs -tail /path/file ✓**
- C) hdfs dfs -last /path/file
- D) hdfs dfs -bottom /path/file

**✅ Réponse: B**

💡 **Conseil:** `hdfs dfs -tail` affiche les derniers ~1 Ko du fichier. Utile pour vérifier la fin des logs ou des fichiers de données.

---

### Question 21
**Quelle commande vérifie l'espace utilisé par des fichiers/répertoires dans HDFS ?**

- A) hdfs dfs -size /path
- **B) hdfs dfs -du -h /path ✓**
- C) hdfs dfs -space /path
- D) hdfs dfs -usage /path

**✅ Réponse: B**

💡 **Conseil:** `hdfs dfs -du` = disk usage. Affiche la taille de chaque fichier/sous-répertoire. `-h` = human-readable (Ko, Mo, Go).

---

### Question 22
**Que signifie l'option -h dans hdfs dfs -du -h ?**

- A) Help
- **B) Human-readable (format lisible: KB, MB, GB) ✓**
- C) Hidden files
- D) Headers

**✅ Réponse: B**

💡 **Conseil:** **-h = human-readable**. Au lieu de "1073741824 bytes", affiche "1G". Plus facile à lire pour les humains.

---

### Question 23
**Quelle commande supprime un fichier dans HDFS ?**

- A) hdfs dfs -delete /path/file
- **B) hdfs dfs -rm /path/file ✓**
- C) hdfs dfs -del /path/file
- D) hdfs dfs -remove /path/file

**✅ Réponse: B**

💡 **Conseil:** `hdfs dfs -rm` = remove. Par défaut, va dans la corbeille (.Trash). Pour suppression définitive immédiate : `-skipTrash`.

---

### Question 24
**Quelle option permet de supprimer un répertoire et son contenu ?**

- A) hdfs dfs -rm -f /path
- **B) hdfs dfs -rm -r /path ✓**
- C) hdfs dfs -rm -all /path
- D) hdfs dfs -rm -d /path

**✅ Réponse: B**

💡 **Conseil:** `-r` = recursive. Sans cette option, -rm ne peut pas supprimer un répertoire non vide. `-rf` = recursive + force (pas de confirmation).

---

### Question 25
**Quelle commande déplace ou renomme un fichier dans HDFS ?**

- A) hdfs dfs -rename /old /new
- **B) hdfs dfs -mv /old /new ✓**
- C) hdfs dfs -move /old /new
- D) hdfs dfs -rn /old /new

**✅ Réponse: B**

💡 **Conseil:** `hdfs dfs -mv` = move. Déplace ou renomme. Opération rapide car seules les métadonnées changent (pas de copie de données).

---

### Question 26
**Quelle commande copie un fichier dans HDFS (d'un emplacement HDFS à un autre) ?**

- A) hdfs dfs -copy /src /dest
- **B) hdfs dfs -cp /src /dest ✓**
- C) hdfs dfs -duplicate /src /dest
- D) hdfs dfs -clone /src /dest

**✅ Réponse: B**

💡 **Conseil:** `hdfs dfs -cp` = copy. Crée une copie complète des données. Plus lent que -mv car les blocs sont dupliqués.

---

### Question 27
**Quelle commande affiche des statistiques sur un fichier (comme le facteur de réplication) ?**

- A) hdfs dfs -info /path/file
- **B) hdfs dfs -stat %r /path/file ✓**
- C) hdfs dfs -status /path/file
- D) hdfs dfs -details /path/file

**✅ Réponse: B**

💡 **Conseil:** `hdfs dfs -stat` avec formats : %r (réplication), %o (taille bloc), %n (nom), %b (taille). Ex: `-stat "%r %o" /file`.

---

### Question 28
**Quelle commande compte les répertoires, fichiers et la taille totale ?**

- A) hdfs dfs -size /path
- **B) hdfs dfs -count /path ✓**
- C) hdfs dfs -total /path
- D) hdfs dfs -summary /path

**✅ Réponse: B**

💡 **Conseil:** `hdfs dfs -count` retourne : nombre de répertoires, nombre de fichiers, taille totale, chemin. Utile pour les statistiques.

---

### Question 29
**Combien de NameNodes y a-t-il dans le cluster HA du TP ?**

- A) 1
- **B) 2 ✓**
- C) 3
- D) 4

**✅ Réponse: B**

💡 **Conseil:** Cluster HA = **2 NameNodes** (1 actif + 1 standby). Plus économique que 3+, suffisant pour la haute disponibilité.

---

### Question 30
**Combien de DataNodes y a-t-il dans le cluster du TP ?**

- A) 1
- **B) 2 ✓**
- C) 3
- D) 4

**✅ Réponse: B**

💡 **Conseil:** Le TP utilise **2 DataNodes** pour démontrer la distribution. En production, des dizaines voire des milliers de DataNodes.

---

### Question 31
**Combien de JournalNodes y a-t-il dans le cluster HA du TP ?**

- A) 1
- **B) 2 ✓**
- C) 3
- D) 4

**✅ Réponse: B**

💡 **Conseil:** Le TP a **2 JournalNodes** (minimum recommandé = 3 pour le quorum en production). Le QJM synchronise l'EditLog entre les NameNodes.

---

### Question 32
**Quelle commande permet de voir les logs d'un conteneur Docker ?**

- A) docker show logs container_name
- **B) docker logs container_name ✓**
- C) docker view container_name
- D) docker output container_name

**✅ Réponse: B**

💡 **Conseil:** `docker logs container_name` affiche stdout/stderr du conteneur. Options utiles : `-f` (follow), `--tail 100` (dernières lignes).

---

### Question 33
**Que fait la commande docker start container_name ?**

- A) Crée un nouveau conteneur
- **B) Redémarre un conteneur arrêté ✓**
- C) Supprime un conteneur
- D) Liste les conteneurs

**✅ Réponse: B**

💡 **Conseil:** `docker start` redémarre un conteneur existant (arrêté). `docker run` crée ET démarre un nouveau conteneur à partir d'une image.

---

### Question 34
**Quelle commande permet de créer un fichier local avant de l'envoyer vers HDFS ?**

- A) create file.txt
- **B) echo "contenu" > file.txt ✓**
- C) new file.txt
- D) touch --content file.txt

**✅ Réponse: B**

💡 **Conseil:** `echo "texte" > fichier` crée/écrase le fichier avec le texte. `echo "texte" >> fichier` ajoute à la fin. Commandes shell standard.

---

### Question 35
**Quelle commande est un alias de hdfs dfs -put ?**

- A) hdfs dfs -upload
- **B) hdfs dfs -copyFromLocal ✓**
- C) hdfs dfs -send
- D) hdfs dfs -transfer

**✅ Réponse: B**

💡 **Conseil:** **-put = -copyFromLocal** : copie Local → HDFS. Mnémotechnique : "put (mettre) dans HDFS" ou "copy from local".

---

### Question 36
**Quelle commande est un alias de hdfs dfs -get ?**

- A) hdfs dfs -download
- **B) hdfs dfs -copyToLocal ✓**
- C) hdfs dfs -fetch
- D) hdfs dfs -retrieve

**✅ Réponse: B**

💡 **Conseil:** **-get = -copyToLocal** : copie HDFS → Local. Mnémotechnique : "get (obtenir) depuis HDFS" ou "copy to local".

---

### Question 37
**Combien de ResourceManagers y a-t-il dans le cluster HA du TP ?**

- A) 1
- **B) 2 ✓**
- C) 3
- D) 4

**✅ Réponse: B**

💡 **Conseil:** **2 ResourceManagers** pour la HA de YARN (1 actif + 1 standby). Gèrent l'allocation des ressources pour les applications MapReduce, Spark, etc.

---

### Question 38
**Que vérifie-t-on en exécutant hdfs dfs -ls / depuis un DataNode après l'arrêt du NameNode actif ?**

- A) L'état du DataNode
- **B) Que le failover HA fonctionne et que HDFS est toujours accessible ✓**
- C) La taille des fichiers
- D) Les permissions

**✅ Réponse: B**

💡 **Conseil:** Si `hdfs dfs -ls /` fonctionne après l'arrêt du NameNode actif, cela prouve que le **failover HA** s'est bien déclenché et que le Standby a pris le relais.

---

### Question 39
**Que fait la commande hdfs dfs -df ?**

- A) Supprime des fichiers
- **B) Affiche l'espace disque disponible dans HDFS ✓**
- C) Crée un répertoire
- D) Affiche les formats de fichiers

**✅ Réponse: B**

💡 **Conseil:** `hdfs dfs -df` = disk free. Affiche l'espace total, utilisé et disponible du système de fichiers HDFS. `-h` pour format lisible.

---

### Question 40
**Quelle commande déplace un fichier de HDFS vers le système local (supprime de HDFS) ?**

- A) hdfs dfs -get
- **B) hdfs dfs -moveToLocal ✓**
- C) hdfs dfs -cut
- D) hdfs dfs -export

**✅ Réponse: B**

💡 **Conseil:** `-moveToLocal` = copie vers local + suppression de HDFS. Note : cette commande peut ne pas être implémentée dans toutes les versions (vérifiez avec `hdfs dfs -help`).

---

## 📊 Résumé des Thèmes Abordés

| Thème | Nombre de Questions |
|-------|---------------------|
| Docker et conteneurs | 8 |
| Commandes HDFS (manipulation fichiers) | 18 |
| Haute Disponibilité (HA) | 8 |
| Architecture du cluster | 6 |

---

## 🎯 Conseils pour l'Examen

1. **Commandes Docker essentielles** :
   - `docker-compose up -d` : démarrer
   - `docker ps` : lister
   - `docker exec -it container bash` : entrer
   - `docker logs container` : voir les logs
   - `docker stop/start container` : arrêter/démarrer

2. **Commandes HDFS à mémoriser** :
   - Navigation : `-ls`, `-ls -R`, `-mkdir -p`
   - Transfert Local↔HDFS : `-put`/`-get`, `-moveFromLocal`/`-moveToLocal`
   - Lecture : `-cat`, `-text`, `-tail`
   - Gestion : `-rm -r`, `-mv`, `-cp`
   - Stats : `-du -h`, `-df`, `-count`, `-stat`

3. **Haute Disponibilité** :
   - 2 NameNodes (actif/standby)
   - `hdfs haadmin -getServiceState nn1`
   - Failover automatique via Zookeeper

4. **Architecture du TP** :
   - 2 NameNodes, 2 DataNodes, 2 ResourceManagers, 2 JournalNodes

5. **Alias à retenir** :
   - `-put` = `-copyFromLocal`
   - `-get` = `-copyToLocal`

---

**Bonne chance pour votre examen ! 🍀**
