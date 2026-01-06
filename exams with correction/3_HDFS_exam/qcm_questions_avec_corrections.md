# QCM - HDFS (Hadoop Distributed File System)
## Questions avec Corrections et Conseils

**Auteur du cours:** Mohamed KOUBAA  
**Nombre de questions:** 40

---

### Question 1
**Quelle est la taille par défaut d'un bloc dans HDFS version 2 ?**

- A) 64 MB
- **B) 128 MB ✓**
- C) 256 MB
- D) 512 MB

**✅ Réponse: B**

💡 **Conseil:** HDFS v1 = 64 MB, **HDFS v2 = 128 MB** par défaut. Les gros blocs réduisent les métadonnées et optimisent les lectures séquentielles de gros fichiers.

---

### Question 2
**Quel est le facteur de réplication par défaut dans HDFS ?**

- A) 1
- B) 2
- **C) 3 ✓**
- D) 4

**✅ Réponse: C**

💡 **Conseil:** Le **REPLICATION_FACTOR = 3** par défaut (1 original + 2 copies). Cela garantit la disponibilité même si 2 nœuds tombent en panne simultanément.

---

### Question 3
**Quel composant HDFS est responsable de la gestion de l'espace de noms du système de fichiers ?**

- A) DataNode
- **B) NameNode ✓**
- C) Secondary NameNode
- D) Zookeeper

**✅ Réponse: B**

💡 **Conseil:** **NameNode** = Master qui gère les métadonnées (namespace, arborescence, localisation des blocs). Il ne stocke pas les données elles-mêmes.

---

### Question 4
**Quel composant HDFS stocke physiquement les blocs de données ?**

- A) NameNode
- **B) DataNode ✓**
- C) Journal Node
- D) Resource Manager

**✅ Réponse: B**

💡 **Conseil:** **DataNode** = Esclave qui stocke les blocs de données. Un cluster a 1 NameNode mais plusieurs DataNodes (des dizaines à des milliers).

---

### Question 5
**Qu'est-ce que FSImage dans HDFS ?**

- A) Un fichier de configuration
- **B) Un fichier en mémoire contenant la table d'adresses des blocs ✓**
- C) Un fichier de logs
- D) Un fichier de sauvegarde

**✅ Réponse: B**

💡 **Conseil:** **FSImage** = snapshot du système de fichiers en mémoire (structure des répertoires, métadonnées, localisation des blocs). Volatile, perdu au redémarrage.

---

### Question 6
**Qu'est-ce que EditLog dans HDFS ?**

- A) Un fichier image du système
- **B) Un journal de toutes les modifications du système de fichiers ✓**
- C) Un fichier de configuration
- D) Un fichier de monitoring

**✅ Réponse: B**

💡 **Conseil:** **EditLog** = journal de transactions persistant. Chaque opération (création, suppression, etc.) est d'abord écrite dans l'EditLog. Permet de reconstruire FSImage.

---

### Question 7
**Qu'est-ce qu'un Heartbeat dans HDFS ?**

- A) Un signal de synchronisation des données
- **B) Une pulsation envoyée par les DataNodes au NameNode pour signaler qu'ils sont actifs ✓**
- C) Un mécanisme de compression
- D) Un protocole de transfert de données

**✅ Réponse: B**

💡 **Conseil:** Les DataNodes envoient des **Heartbeats** réguliers (toutes les 3 sec par défaut). Si le NameNode ne reçoit plus de heartbeat, il considère le DataNode comme mort.

---

### Question 8
**Quelle commande permet de lister les fichiers d'un répertoire HDFS ?**

- A) hdfs dfs -dir
- **B) hdfs dfs -ls ✓**
- C) hdfs dfs -list
- D) hdfs dfs -show

**✅ Réponse: B**

💡 **Conseil:** `hdfs dfs -ls` = list (comme `ls` sous Linux). Ajoutez `-R` pour lister récursivement : `hdfs dfs -ls -R /path`

---

### Question 9
**Quelle commande permet de copier un fichier local vers HDFS ?**

- A) hdfs dfs -copy
- **B) hdfs dfs -put ✓**
- C) hdfs dfs -upload
- D) hdfs dfs -send

**✅ Réponse: B**

💡 **Conseil:** `hdfs dfs -put local.txt /hdfs/path` ou son alias `-copyFromLocal`. Le fichier local est conservé après la copie.

---

### Question 10
**Quelle commande permet de copier un fichier HDFS vers le système local ?**

- A) hdfs dfs -copy
- B) hdfs dfs -download
- **C) hdfs dfs -get ✓**
- D) hdfs dfs -fetch

**✅ Réponse: C**

💡 **Conseil:** `hdfs dfs -get /hdfs/file.txt local/` ou son alias `-copyToLocal`. Télécharge de HDFS vers le système local.

---

### Question 11
**Quel est le nombre minimum de machines nécessaires pour le Quorum Journal Manager (QJM) ?**

- A) 1
- B) 2
- **C) 3 ✓**
- D) 5

**✅ Réponse: C**

💡 **Conseil:** **QJM** nécessite **minimum 3 JournalNodes** pour le quorum (majorité). Avec 3 nœuds, le système tolère 1 panne. Formule : 2N+1 nœuds tolèrent N pannes.

---

### Question 12
**À quelle fréquence le Secondary NameNode effectue-t-il un checkpoint par défaut ?**

- A) Toutes les 15 minutes
- B) Toutes les 30 minutes
- **C) Toutes les heures ✓**
- D) Toutes les 24 heures

**✅ Réponse: C**

💡 **Conseil:** Le Secondary NameNode fait un checkpoint **toutes les heures** (ou après un certain nombre de transactions). Il fusionne FSImage + EditLog pour créer un nouveau FSImage.

---

### Question 13
**Dans une architecture HDFS, combien de NameNode(s) actif(s) y a-t-il normalement ?**

- A) Aucun
- **B) Un seul ✓**
- C) Deux
- D) Plusieurs

**✅ Réponse: B**

💡 **Conseil:** **Un seul NameNode actif** à la fois. En mode HA, il y a un Standby NameNode prêt à prendre le relais, mais un seul est actif.

---

### Question 14
**Qu'est-ce qu'un Rack dans un cluster Hadoop ?**

- A) Un type de fichier
- **B) Un regroupement physique de serveurs ✓**
- C) Un protocole réseau
- D) Un outil de monitoring

**✅ Réponse: B**

💡 **Conseil:** Un **Rack** = armoire contenant plusieurs serveurs partageant le même switch réseau. HDFS utilise le "rack awareness" pour placer les réplicas intelligemment.

---

### Question 15
**Que signifie SPOF (Single Point of Failure) concernant le NameNode ?**

- A) Le NameNode est très rapide
- **B) Le NameNode est un point de défaillance unique pouvant causer l'arrêt du système ✓**
- C) Le NameNode peut être dupliqué facilement
- D) Le NameNode stocke une seule copie des données

**✅ Réponse: B**

💡 **Conseil:** Sans HA, le NameNode est un **SPOF** : s'il tombe, tout le cluster est inaccessible. C'est pourquoi la Haute Disponibilité (HA) a été introduite.

---

### Question 16
**Quel composant permet la haute disponibilité en cas de panne du NameNode actif ?**

- A) DataNode
- **B) Standby NameNode ✓**
- C) Secondary NameNode
- D) Task Tracker

**✅ Réponse: B**

💡 **Conseil:** **Standby NameNode** ≠ Secondary NameNode. Le Standby peut prendre le relais instantanément. Le Secondary ne fait que des checkpoints.

---

### Question 17
**Quelle est la différence entre Secondary NameNode et Standby NameNode ?**

- A) Ils sont identiques
- **B) Secondary fait des checkpoints, Standby peut prendre le relais en cas de panne ✓**
- C) Standby fait des checkpoints, Secondary peut prendre le relais
- D) Les deux peuvent prendre le relais

**✅ Réponse: B**

💡 **Conseil:** **Secondary** = assistant qui fait des checkpoints (fusion FSImage + EditLog). **Standby** = NameNode de secours en mode HA, synchronisé en temps réel via QJM.

---

### Question 18
**Quel service est utilisé pour la coordination et l'élection de leader dans HDFS HA ?**

- A) Ambari
- B) Oozie
- **C) Zookeeper ✓**
- D) Flume

**✅ Réponse: C**

💡 **Conseil:** **Zookeeper** gère l'élection de leader et le basculement (failover) automatique. Il maintient un "lock" que seul le NameNode actif détient.

---

### Question 19
**Que fait la commande `hdfs dfs -mkdir -p /chemin/complet` ?**

- A) Crée uniquement le dernier répertoire
- **B) Crée tous les répertoires parents si nécessaire ✓**
- C) Supprime le répertoire existant
- D) Liste les répertoires

**✅ Réponse: B**

💡 **Conseil:** `-p` = "parents", crée toute l'arborescence si elle n'existe pas. Sans `-p`, la commande échoue si le parent n'existe pas.

---

### Question 20
**Quelle commande affiche le contenu d'un fichier HDFS ?**

- A) hdfs dfs -show
- **B) hdfs dfs -cat ✓**
- C) hdfs dfs -read
- D) hdfs dfs -display

**✅ Réponse: B**

💡 **Conseil:** `hdfs dfs -cat /path/file` = affiche le contenu (comme `cat` Linux). Pour les fichiers compressés, utilisez `-text`.

---

### Question 21
**Quelle commande permet de vérifier l'espace disponible dans HDFS ?**

- A) hdfs dfs -space
- B) hdfs dfs -size
- **C) hdfs dfs -df ✓**
- D) hdfs dfs -free

**✅ Réponse: C**

💡 **Conseil:** `hdfs dfs -df` = disk free (espace libre). `hdfs dfs -du` = disk usage (espace utilisé par fichier/répertoire).

---

### Question 22
**Qu'est-ce que le "Rack Awareness Mode" dans HDFS ?**

- A) Un mode de compression
- **B) Un mode où les copies sont stockées dans des racks différents pour la tolérance aux pannes ✓**
- C) Un mode de monitoring
- D) Un mode de sécurité

**✅ Réponse: B**

💡 **Conseil:** Avec **Rack Awareness**, HDFS place les réplicas sur des racks différents. Si un rack entier tombe (panne de switch), les données restent accessibles.

---

### Question 23
**Quel type d'architecture utilise HDFS ?**

- A) Peer-to-Peer
- **B) Master/Slave ✓**
- C) Client/Serveur traditionnel
- D) Mesh

**✅ Réponse: B**

💡 **Conseil:** HDFS = architecture **Master/Slave**. NameNode = Master (1 seul). DataNodes = Slaves (plusieurs). Le Master coordonne, les Slaves stockent.

---

### Question 24
**Quelle commande permet de supprimer un répertoire et son contenu dans HDFS ?**

- A) hdfs dfs -del
- **B) hdfs dfs -rm -r ✓**
- C) hdfs dfs -delete
- D) hdfs dfs -remove

**✅ Réponse: B**

💡 **Conseil:** `hdfs dfs -rm -r /path` = remove récursif. Sans `-r`, seuls les fichiers peuvent être supprimés, pas les répertoires.

---

### Question 25
**Que contient un Block Report envoyé par un DataNode ?**

- A) Les erreurs système
- **B) La liste des blocs stockés sur ce DataNode ✓**
- C) Les configurations réseau
- D) Les utilisateurs connectés

**✅ Réponse: B**

💡 **Conseil:** Le **Block Report** = liste complète des blocs sur un DataNode. Envoyé périodiquement, il permet au NameNode de savoir où sont les données.

---

### Question 26
**Quelle commande permet de déplacer un fichier du local vers HDFS en supprimant l'original ?**

- A) hdfs dfs -put
- B) hdfs dfs -mv
- **C) hdfs dfs -moveFromLocal ✓**
- D) hdfs dfs -cut

**✅ Réponse: C**

💡 **Conseil:** `-moveFromLocal` = copie + suppression du fichier local. `-put` ou `-copyFromLocal` conservent l'original.

---

### Question 27
**Le FSImage est-il volatile ou persistant ?**

- A) Persistant sur disque
- **B) Volatile (en mémoire, perdu au redémarrage) ✓**
- C) Partiellement persistant
- D) Stocké sur les DataNodes

**✅ Réponse: B**

💡 **Conseil:** **FSImage en mémoire = volatile**. C'est pourquoi l'EditLog (persistant) et les checkpoints du Secondary NameNode sont essentiels pour la récupération.

---

### Question 28
**Comment le FSImage peut-il être reconstruit après un redémarrage ?**

- A) Il ne peut pas être reconstruit
- **B) À partir du EditLog ✓**
- C) À partir des DataNodes
- D) À partir de Zookeeper

**✅ Réponse: B**

💡 **Conseil:** Au redémarrage : charge le dernier checkpoint FSImage du disque + rejoue les transactions de l'EditLog = FSImage reconstruit en mémoire.

---

### Question 29
**Quelle est la caractéristique principale de la scalabilité HDFS ?**

- A) Scalabilité verticale uniquement
- **B) Scalabilité horizontale (ajout de machines) ✓**
- C) Scalabilité limitée à 10 nœuds
- D) Pas de scalabilité

**✅ Réponse: B**

💡 **Conseil:** HDFS = **scalabilité horizontale** : on ajoute des DataNodes pour augmenter la capacité. Pas besoin d'acheter des serveurs plus puissants (scalabilité verticale).

---

### Question 30
**Que fait HDFS automatiquement quand un DataNode tombe en panne ?**

- A) Arrête le cluster
- **B) Recrée les copies des blocs pour maintenir le facteur de réplication ✓**
- C) Supprime les données
- D) Envoie une alerte et attend une intervention manuelle

**✅ Réponse: B**

💡 **Conseil:** **Auto-réplication** : le NameNode détecte la panne (heartbeat manquant), identifie les blocs sous-répliqués, et lance la copie vers d'autres DataNodes.

---

### Question 31
**Quelle commande est un alias de `hdfs dfs -put` ?**

- A) hdfs dfs -upload
- **B) hdfs dfs -copyFromLocal ✓**
- C) hdfs dfs -send
- D) hdfs dfs -transfer

**✅ Réponse: B**

💡 **Conseil:** `-put` = `-copyFromLocal` = copie Local → HDFS. Utilisez celui que vous préférez, le comportement est identique.

---

### Question 32
**Quelle commande est un alias de `hdfs dfs -get` ?**

- A) hdfs dfs -download
- **B) hdfs dfs -copyToLocal ✓**
- C) hdfs dfs -fetch
- D) hdfs dfs -retrieve

**✅ Réponse: B**

💡 **Conseil:** `-get` = `-copyToLocal` = copie HDFS → Local. Mnémotechnique : "get from HDFS" ou "copy to local".

---

### Question 33
**Dans HDFS 3.0, quelle alternative à la réplication a été introduite pour économiser l'espace ?**

- A) Compression automatique
- **B) Erasure Coding ✓**
- C) Déduplication
- D) Archivage

**✅ Réponse: B**

💡 **Conseil:** **Erasure Coding** utilise des codes de correction d'erreur (comme RAID) au lieu de copies complètes. Économise ~50% d'espace tout en gardant la tolérance aux pannes.

---

### Question 34
**Lors d'une opération d'écriture, avec qui le client interagit-il en premier ?**

- A) DataNode
- **B) NameNode ✓**
- C) Secondary NameNode
- D) Zookeeper

**✅ Réponse: B**

💡 **Conseil:** Écriture : Client → **NameNode** (demande de création + allocation de blocs) → puis Client → DataNodes (écriture des données). Le NameNode ne touche jamais les données.

---

### Question 35
**Que vérifie le NameNode avant de créer un fichier ?**

- A) L'espace disque uniquement
- **B) L'existence du fichier et les droits d'accès ✓**
- C) La connexion réseau
- D) La charge CPU

**✅ Réponse: B**

💡 **Conseil:** Le NameNode vérifie : 1) Le fichier n'existe pas déjà 2) L'utilisateur a les droits d'écriture dans le répertoire. Ensuite il crée l'entrée dans FSImage.

---

### Question 36
**Quelle commande affiche la fin d'un fichier HDFS ?**

- A) hdfs dfs -end
- **B) hdfs dfs -tail ✓**
- C) hdfs dfs -last
- D) hdfs dfs -bottom

**✅ Réponse: B**

💡 **Conseil:** `hdfs dfs -tail /path/file` = affiche les derniers 1 Ko du fichier (comme `tail` Linux). Utile pour vérifier les logs.

---

### Question 37
**Que signifie HA dans le contexte HDFS ?**

- A) Hadoop Architecture
- **B) High Availability ✓**
- C) Hardware Allocation
- D) Hadoop Administration

**✅ Réponse: B**

💡 **Conseil:** **HA = High Availability** (Haute Disponibilité). HDFS HA = configuration avec NameNode actif + Standby pour éliminer le SPOF.

---

### Question 38
**Quel est le rôle du Quorum Journal Manager ?**

- A) Gérer les requêtes des utilisateurs
- **B) Stocker le EditLog de manière distribuée pour la haute disponibilité ✓**
- C) Compresser les données
- D) Monitorer le cluster

**✅ Réponse: B**

💡 **Conseil:** **QJM** = JournalNodes (minimum 3) qui stockent l'EditLog de manière distribuée. Le Standby NameNode lit l'EditLog depuis le QJM pour rester synchronisé.

---

### Question 39
**Lors du failover, comment le Standby NameNode devient-il actif ?**

- A) Par intervention manuelle uniquement
- **B) En acquérant le lock dans Zookeeper quand le NameNode actif échoue ✓**
- C) Par redémarrage du cluster
- D) En copiant les données du NameNode actif

**✅ Réponse: B**

💡 **Conseil:** **Failover automatique** : le NameNode actif détient un lock Zookeeper. S'il tombe, le lock expire, et le Standby l'acquiert pour devenir actif.

---

### Question 40
**Quelle commande permet de compter les répertoires, fichiers et la taille dans HDFS ?**

- A) hdfs dfs -size
- **B) hdfs dfs -count ✓**
- C) hdfs dfs -stat
- D) hdfs dfs -info

**✅ Réponse: B**

💡 **Conseil:** `hdfs dfs -count /path` retourne : nombre de répertoires, nombre de fichiers, taille totale. `-stat` donne d'autres infos (permissions, facteur de réplication).

---

## 📊 Résumé des Thèmes Abordés

| Thème | Nombre de Questions |
|-------|---------------------|
| Architecture HDFS (NameNode, DataNode) | 10 |
| Commandes HDFS | 12 |
| Haute Disponibilité (HA) | 8 |
| Tolérance aux pannes et réplication | 6 |
| Concepts clés (FSImage, EditLog, etc.) | 4 |

---

## 🎯 Conseils pour l'Examen

1. **Mémorisez les chiffres clés** :
   - Bloc = 128 MB (v2)
   - Réplication = 3
   - QJM minimum = 3 nœuds
   - Checkpoint = toutes les heures

2. **Connaissez les commandes essentielles** :
   - `-ls`, `-mkdir`, `-put`, `-get`, `-cat`, `-rm`
   - Aliases : `-copyFromLocal` = `-put`, `-copyToLocal` = `-get`

3. **Distinguez les composants HA** :
   - Secondary NameNode ≠ Standby NameNode
   - QJM = stockage distribué de l'EditLog
   - Zookeeper = élection de leader

4. **Comprenez le flux de données** :
   - Écriture : Client → NameNode (métadonnées) → DataNodes (données)
   - Lecture : Client → NameNode (localisation) → DataNodes (données)

5. **Retenez les mécanismes de tolérance** :
   - Réplication des blocs
   - Rack Awareness
   - Auto-récupération après panne

---

**Bonne chance pour votre examen ! 🍀**
