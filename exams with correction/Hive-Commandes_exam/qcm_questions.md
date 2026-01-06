# QCM - Hive Commandes

## Chapitre : Tutoriel Hive - Commandes de Base

**Auteur du cours:** Mohamed KOUBAA  
**Nombre de questions:** 40

---

### Question 1
Quelle commande permet de créer une base de données si elle n'existe pas déjà ?

- A) CREATE DATABASE database_name
- B) CREATE DATABASE IF NOT EXISTS database_name
- C) NEW DATABASE database_name
- D) MAKE DATABASE database_name

---

### Question 2
Quelle commande affiche la liste de toutes les bases de données ?

- A) LIST DATABASES
- B) DISPLAY DATABASES
- C) SHOW DATABASES
- D) VIEW DATABASES

---

### Question 3
Quelle commande permet de sélectionner une base de données pour l'utiliser ?

- A) SELECT database_name
- B) OPEN database_name
- C) USE database_name
- D) SWITCH database_name

---

### Question 4
Par défaut, peut-on supprimer une base de données contenant des tables ?

- A) Oui, sans problème
- B) Non, il faut utiliser CASCADE
- C) Oui, mais avec un avertissement
- D) Non, il faut d'abord la renommer

---

### Question 5
Quel est le suffixe ajouté au nom de la base de données dans HDFS ?

- A) .database
- B) .db
- C) .hive
- D) Aucun suffixe

---

### Question 6
Où se trouve le répertoire d'une table dans HDFS par rapport à sa base de données ?

- A) Au même niveau
- B) Dans un sous-répertoire de la base de données
- C) Dans un répertoire parent
- D) À la racine de HDFS

---

### Question 7
Quel mot-clé permet de créer une table visible uniquement dans la session courante ?

- A) SESSION
- B) LOCAL
- C) TEMPORARY
- D) PRIVATE

---

### Question 8
Le mot-clé EXTERNAL dans CREATE TABLE signifie que :

- A) La table est stockée sur un serveur externe
- B) Hive ne gère pas physiquement les données
- C) La table est cryptée
- D) La table est en lecture seule

---

### Question 9
Quelle clause permet de spécifier un chemin HDFS personnalisé pour une table externe ?

- A) PATH
- B) DIRECTORY
- C) LOCATION
- D) HDFS_PATH

---

### Question 10
Quel est le format de stockage par défaut si non spécifié ?

- A) PARQUET
- B) ORC
- C) TEXTFILE
- D) AVRO

---

### Question 11
Quel SerDe est utilisé par défaut pour le format TEXTFILE ?

- A) OpenCSVSerde
- B) RegexSerDe
- C) LazySimpleSerDe
- D) JsonSerDe

---

### Question 12
Quel est le séparateur de colonnes par défaut avec LazySimpleSerDe ?

- A) Virgule (,)
- B) Point-virgule (;)
- C) Tabulation (\t)
- D) Espace

---

### Question 13
Comment sont représentées les valeurs NULL par défaut dans Hive ?

- A) NULL
- B) empty
- C) \N
- D) (null)

---

### Question 14
Quel SerDe utiliser pour parser des fichiers logs avec des expressions régulières ?

- A) OpenCSVSerde
- B) RegexSerDe
- C) LogSerDe
- D) PatternSerDe

---

### Question 15
Quelle propriété permet d'ignorer la ligne d'en-tête d'un fichier CSV ?

- A) ignore.header=true
- B) skip.header.line.count
- C) header.skip.count
- D) no.header

---

### Question 16
Quelle commande permet de voir la structure détaillée d'une table ?

- A) SHOW TABLE table_name
- B) DESCRIBE FORMATTED table_name
- C) VIEW STRUCTURE table_name
- D) TABLE INFO table_name

---

### Question 17
Le mot-clé LOCAL dans LOAD DATA indique que le fichier se trouve :

- A) Dans HDFS
- B) Dans le système de fichiers local
- C) Sur un serveur distant
- D) Dans le Metastore

---

### Question 18
Que fait LOAD DATA INPATH (sans LOCAL) ?

- A) Copie le fichier local vers HDFS
- B) Déplace le fichier HDFS vers la table
- C) Crée un lien symbolique
- D) Compresse le fichier

---

### Question 19
Quelle option permet de remplacer les données existantes lors du chargement ?

- A) REPLACE
- B) OVERWRITE
- C) UPDATE
- D) REFRESH

---

### Question 20
Pour convertir un fichier texte en Parquet, quelle est la méthode recommandée ?

- A) Utiliser une commande de conversion directe
- B) Créer une table temporaire texte puis INSERT INTO une table Parquet
- C) Renommer le fichier
- D) Modifier le format dans le Metastore

---

### Question 21
Quelle commande permet d'activer le partitionnement dynamique non strict ?

- A) SET hive.partition.dynamic=true
- B) SET hive.exec.dynamic.partition.mode=nonstrict
- C) SET hive.dynamic.mode=all
- D) SET partition.mode=dynamic

---

### Question 22
Dans une insertion avec partition dynamique, où doit se trouver la colonne de partition dans le SELECT ?

- A) En première position
- B) En dernière position
- C) N'importe où
- D) Elle ne doit pas être dans le SELECT

---

### Question 23
Quelle commande ajoute manuellement une partition à une table ?

- A) CREATE PARTITION
- B) ADD PARTITION
- C) ALTER TABLE ... ADD PARTITION
- D) INSERT PARTITION

---

### Question 24
Que fait la commande SET hive.enforce.bucketing=true ?

- A) Active le partitionnement
- B) Force le respect du bucketing lors des insertions
- C) Désactive le bucketing
- D) Crée des buckets automatiquement

---

### Question 25
Pourquoi le bucketing optimise-t-il les jointures ?

- A) Il compresse les données
- B) Les données avec même clé sont dans le même bucket, évitant le shuffle
- C) Il trie les données
- D) Il réduit la taille des tables

---

### Question 26
Pour optimiser une jointure entre deux tables bucketées, elles doivent avoir :

- A) Le même nom
- B) La même clé de bucket et le même nombre de buckets
- C) Le même format de stockage
- D) Les mêmes colonnes

---

### Question 27
Quelle clause définit le délimiteur de champs dans un fichier ?

- A) FIELDS DELIMITED BY
- B) FIELDS TERMINATED BY
- C) COLUMN SEPARATOR
- D) FIELD DELIMITER

---

### Question 28
Quelle clause définit le délimiteur de lignes ?

- A) ROWS TERMINATED BY
- B) LINES TERMINATED BY
- C) LINE SEPARATOR
- D) ROW DELIMITER

---

### Question 29
Le SerDe OpenCSVSerde est recommandé pour quel type de fichiers ?

- A) JSON
- B) CSV avec guillemets et échappements
- C) Fichiers binaires
- D) Fichiers XML

---

### Question 30
Quel format de stockage offre la meilleure compression selon le cours ?

- A) TEXTFILE
- B) PARQUET
- C) ORC
- D) AVRO

---

### Question 31
Quelle commande INSERT ajoute des données sans supprimer les existantes ?

- A) INSERT OVERWRITE
- B) INSERT INTO
- C) INSERT APPEND
- D) INSERT ADD

---

### Question 32
Quelle commande INSERT remplace les données existantes ?

- A) INSERT INTO
- B) INSERT OVERWRITE
- C) INSERT REPLACE
- D) INSERT UPDATE

---

### Question 33
Dans CREATE TABLE AS SELECT, peut-on créer une table externe ?

- A) Oui, avec EXTERNAL
- B) Non, uniquement des tables internes
- C) Seulement avec LOCATION
- D) Seulement pour les tables partitionnées

---

### Question 34
Quelle est la syntaxe pour insérer plusieurs valeurs en une commande ?

- A) INSERT INTO TABLE t VALUES (v1), (v2), (v3)
- B) INSERT INTO TABLE t VALUES (v1); VALUES (v2)
- C) INSERT MULTI INTO TABLE t
- D) BULK INSERT INTO TABLE t

---

### Question 35
Quel est l'avantage des tables TEMPORARY ?

- A) Elles sont plus rapides
- B) Elles sont visibles uniquement dans la session courante
- C) Elles sont compressées automatiquement
- D) Elles sont répliquées

---

### Question 36
Quelle commande permet de modifier les propriétés d'une table existante ?

- A) MODIFY TABLE
- B) UPDATE TABLE
- C) ALTER TABLE
- D) CHANGE TABLE

---

### Question 37
Comment ajouter un commentaire à une colonne lors de la création de table ?

- A) -- commentaire
- B) /* commentaire */
- C) COMMENT 'description'
- D) DESC 'description'

---

### Question 38
Quelle clause permet de définir la propriété de format null personnalisé ?

- A) NULLFORMAT
- B) TBLPROPERTIES('serialization.null.format'='...')
- C) NULL AS
- D) NULLVALUE

---

### Question 39
Quel SerDe est automatiquement utilisé pour le format ORC ?

- A) LazySimpleSerDe
- B) OrcSerde
- C) BinarySerDe
- D) ColumnSerDe

---

### Question 40
Que signifie "Lazy reading" dans le contexte du SerDe par défaut ?

- A) La lecture est lente
- B) Les champs sont convertis uniquement lorsqu'ils sont utilisés
- C) La lecture est différée
- D) Les données sont chargées en mémoire

---

## Fin du QCM

**Instructions:** Pour chaque question, sélectionnez la meilleure réponse parmi les options proposées (A, B, C ou D).
