# QCM - Hive Commandes
## Questions avec Corrections et Conseils

**Auteur du cours:** Mohamed KOUBAA  
**Nombre de questions:** 40

---

### Question 1
**Quelle commande permet de créer une base de données si elle n'existe pas déjà ?**

- A) CREATE DATABASE database_name
- **B) CREATE DATABASE IF NOT EXISTS database_name ✓**
- C) NEW DATABASE database_name
- D) MAKE DATABASE database_name

**✅ Réponse: B**

💡 **Conseil:** `IF NOT EXISTS` évite les erreurs si la base existe déjà. Bonne pratique dans les scripts pour l'idempotence.

---

### Question 2
**Quelle commande affiche la liste de toutes les bases de données ?**

- A) LIST DATABASES
- B) DISPLAY DATABASES
- **C) SHOW DATABASES ✓**
- D) VIEW DATABASES

**✅ Réponse: C**

💡 **Conseil:** `SHOW DATABASES` (ou `SHOW SCHEMAS`). Commandes similaires : `SHOW TABLES`, `SHOW PARTITIONS`, `SHOW FUNCTIONS`.

---

### Question 3
**Quelle commande permet de sélectionner une base de données pour l'utiliser ?**

- A) SELECT database_name
- B) OPEN database_name
- **C) USE database_name ✓**
- D) SWITCH database_name

**✅ Réponse: C**

💡 **Conseil:** `USE db_name` change le contexte de la session. Après cela, les tables sont référencées sans préfixe (table au lieu de db.table).

---

### Question 4
**Par défaut, peut-on supprimer une base de données contenant des tables ?**

- A) Oui, sans problème
- **B) Non, il faut utiliser CASCADE ✓**
- C) Oui, mais avec un avertissement
- D) Non, il faut d'abord la renommer

**✅ Réponse: B**

💡 **Conseil:** `DROP DATABASE db_name` échoue si elle contient des tables. Utilisez `DROP DATABASE db_name CASCADE` pour tout supprimer.

---

### Question 5
**Quel est le suffixe ajouté au nom de la base de données dans HDFS ?**

- A) .database
- **B) .db ✓**
- C) .hive
- D) Aucun suffixe

**✅ Réponse: B**

💡 **Conseil:** Structure HDFS : `/user/hive/warehouse/mabase.db/matable/`. Le suffixe **.db** identifie les répertoires de bases de données.

---

### Question 6
**Où se trouve le répertoire d'une table dans HDFS par rapport à sa base de données ?**

- A) Au même niveau
- **B) Dans un sous-répertoire de la base de données ✓**
- C) Dans un répertoire parent
- D) À la racine de HDFS

**✅ Réponse: B**

💡 **Conseil:** Hiérarchie : warehouse/ → database.db/ → table/ → [partition/] → fichiers. La table est un sous-répertoire de la BD.

---

### Question 7
**Quel mot-clé permet de créer une table visible uniquement dans la session courante ?**

- A) SESSION
- B) LOCAL
- **C) TEMPORARY ✓**
- D) PRIVATE

**✅ Réponse: C**

💡 **Conseil:** `CREATE TEMPORARY TABLE ...` crée une table éphémère. Utile pour les transformations intermédiaires (ex: conversion texte→parquet).

---

### Question 8
**Le mot-clé EXTERNAL dans CREATE TABLE signifie que :**

- A) La table est stockée sur un serveur externe
- **B) Hive ne gère pas physiquement les données ✓**
- C) La table est cryptée
- D) La table est en lecture seule

**✅ Réponse: B**

💡 **Conseil:** Table EXTERNE : DROP supprime les métadonnées mais **conserve les fichiers**. Idéal quand les données sont partagées avec d'autres systèmes.

---

### Question 9
**Quelle clause permet de spécifier un chemin HDFS personnalisé pour une table externe ?**

- A) PATH
- B) DIRECTORY
- **C) LOCATION ✓**
- D) HDFS_PATH

**✅ Réponse: C**

💡 **Conseil:** `CREATE EXTERNAL TABLE ... LOCATION '/custom/path/'`. Sans LOCATION, même les tables externes vont dans warehouse.

---

### Question 10
**Quel est le format de stockage par défaut si non spécifié ?**

- A) PARQUET
- B) ORC
- **C) TEXTFILE ✓**
- D) AVRO

**✅ Réponse: C**

💡 **Conseil:** **TEXTFILE** = défaut (lisible, peu performant). Spécifiez toujours `STORED AS PARQUET` ou `ORC` en production pour de meilleures performances.

---

### Question 11
**Quel SerDe est utilisé par défaut pour le format TEXTFILE ?**

- A) OpenCSVSerde
- B) RegexSerDe
- **C) LazySimpleSerDe ✓**
- D) JsonSerDe

**✅ Réponse: C**

💡 **Conseil:** **LazySimpleSerDe** = SerDe par défaut. "Lazy" car les champs sont désérialisés uniquement à l'accès (optimisation).

---

### Question 12
**Quel est le séparateur de colonnes par défaut avec LazySimpleSerDe ?**

- A) Virgule (,)
- B) Point-virgule (;)
- **C) Tabulation (\t) ✓**
- D) Espace

**✅ Réponse: C**

💡 **Conseil:** Défaut : colonnes séparées par **TAB**, lignes par **\n**, NULL représenté par **\N**. Modifiable via `ROW FORMAT DELIMITED`.

---

### Question 13
**Comment sont représentées les valeurs NULL par défaut dans Hive ?**

- A) NULL
- B) empty
- **C) \N ✓**
- D) (null)

**✅ Réponse: C**

💡 **Conseil:** **\N** = représentation par défaut de NULL. Modifiable via `TBLPROPERTIES('serialization.null.format'='')` pour chaîne vide.

---

### Question 14
**Quel SerDe utiliser pour parser des fichiers logs avec des expressions régulières ?**

- A) OpenCSVSerde
- **B) RegexSerDe ✓**
- C) LogSerDe
- D) PatternSerDe

**✅ Réponse: B**

💡 **Conseil:** `ROW FORMAT SERDE 'org.apache.hadoop.hive.serde2.RegexSerDe' WITH SERDEPROPERTIES ("input.regex" = "...")`. Puissant pour les logs Apache, etc.

---

### Question 15
**Quelle propriété permet d'ignorer la ligne d'en-tête d'un fichier CSV ?**

- A) ignore.header=true
- **B) skip.header.line.count ✓**
- C) header.skip.count
- D) no.header

**✅ Réponse: B**

💡 **Conseil:** `TBLPROPERTIES('skip.header.line.count'='1')` ignore la première ligne. Essentiel pour les CSV avec en-têtes de colonnes.

---

### Question 16
**Quelle commande permet de voir la structure détaillée d'une table ?**

- A) SHOW TABLE table_name
- **B) DESCRIBE FORMATTED table_name ✓**
- C) VIEW STRUCTURE table_name
- D) TABLE INFO table_name

**✅ Réponse: B**

💡 **Conseil:** `DESCRIBE FORMATTED` montre tout : colonnes, types, partitions, SerDe, location HDFS, propriétés. Plus complet que `DESCRIBE` simple.

---

### Question 17
**Le mot-clé LOCAL dans LOAD DATA indique que le fichier se trouve :**

- A) Dans HDFS
- **B) Dans le système de fichiers local ✓**
- C) Sur un serveur distant
- D) Dans le Metastore

**✅ Réponse: B**

💡 **Conseil:** `LOAD DATA LOCAL INPATH '/home/user/file.csv'` = fichier local. Sans LOCAL = fichier déjà dans HDFS.

---

### Question 18
**Que fait LOAD DATA INPATH (sans LOCAL) ?**

- A) Copie le fichier local vers HDFS
- **B) Déplace le fichier HDFS vers la table ✓**
- C) Crée un lien symbolique
- D) Compresse le fichier

**✅ Réponse: B**

💡 **Conseil:** Sans LOCAL : le fichier HDFS est **déplacé** (pas copié) vers le répertoire de la table. Avec LOCAL : le fichier est copié de local vers HDFS.

---

### Question 19
**Quelle option permet de remplacer les données existantes lors du chargement ?**

- A) REPLACE
- **B) OVERWRITE ✓**
- C) UPDATE
- D) REFRESH

**✅ Réponse: B**

💡 **Conseil:** `LOAD DATA ... OVERWRITE INTO TABLE` efface d'abord le contenu. Sans OVERWRITE, les nouvelles données sont ajoutées aux existantes.

---

### Question 20
**Pour convertir un fichier texte en Parquet, quelle est la méthode recommandée ?**

- A) Utiliser une commande de conversion directe
- **B) Créer une table temporaire texte puis INSERT INTO une table Parquet ✓**
- C) Renommer le fichier
- D) Modifier le format dans le Metastore

**✅ Réponse: B**

💡 **Conseil:** 1) CREATE TEMPORARY TABLE tmp STORED AS TEXTFILE, 2) LOAD DATA, 3) CREATE TABLE final STORED AS PARQUET, 4) INSERT INTO final SELECT * FROM tmp.

---

### Question 21
**Quelle commande permet d'activer le partitionnement dynamique non strict ?**

- A) SET hive.partition.dynamic=true
- **B) SET hive.exec.dynamic.partition.mode=nonstrict ✓**
- C) SET hive.dynamic.mode=all
- D) SET partition.mode=dynamic

**✅ Réponse: B**

💡 **Conseil:** Mode **strict** (défaut) : au moins une partition statique requise. Mode **nonstrict** : toutes les partitions peuvent être dynamiques.

---

### Question 22
**Dans une insertion avec partition dynamique, où doit se trouver la colonne de partition dans le SELECT ?**

- A) En première position
- **B) En dernière position ✓**
- C) N'importe où
- D) Elle ne doit pas être dans le SELECT

**✅ Réponse: B**

💡 **Conseil:** `INSERT INTO table PARTITION(year, month) SELECT col1, col2, year, month FROM src`. Les colonnes de partition sont **à la fin** du SELECT.

---

### Question 23
**Quelle commande ajoute manuellement une partition à une table ?**

- A) CREATE PARTITION
- B) ADD PARTITION
- **C) ALTER TABLE ... ADD PARTITION ✓**
- D) INSERT PARTITION

**✅ Réponse: C**

💡 **Conseil:** `ALTER TABLE t ADD PARTITION (year=2024, month=1)`. Crée le répertoire et enregistre la partition dans le Metastore.

---

### Question 24
**Que fait la commande SET hive.enforce.bucketing=true ?**

- A) Active le partitionnement
- **B) Force le respect du bucketing lors des insertions ✓**
- C) Désactive le bucketing
- D) Crée des buckets automatiquement

**✅ Réponse: B**

💡 **Conseil:** Avec `enforce.bucketing=true`, Hive garantit que les données sont correctement distribuées dans les buckets lors de l'insertion.

---

### Question 25
**Pourquoi le bucketing optimise-t-il les jointures ?**

- A) Il compresse les données
- **B) Les données avec même clé sont dans le même bucket, évitant le shuffle ✓**
- C) Il trie les données
- D) Il réduit la taille des tables

**✅ Réponse: B**

💡 **Conseil:** Même clé = même hash = même bucket. Jointure : bucket 0 de A avec bucket 0 de B, etc. Pas besoin de redistribuer les données sur le réseau (shuffle).

---

### Question 26
**Pour optimiser une jointure entre deux tables bucketées, elles doivent avoir :**

- A) Le même nom
- **B) La même clé de bucket et le même nombre de buckets ✓**
- C) Le même format de stockage
- D) Les mêmes colonnes

**✅ Réponse: B**

💡 **Conseil:** **Même clé + même nombre de buckets** = jointure optimisée (bucket-map join). Sinon, shuffle nécessaire.

---

### Question 27
**Quelle clause définit le délimiteur de champs dans un fichier ?**

- A) FIELDS DELIMITED BY
- **B) FIELDS TERMINATED BY ✓**
- C) COLUMN SEPARATOR
- D) FIELD DELIMITER

**✅ Réponse: B**

💡 **Conseil:** `ROW FORMAT DELIMITED FIELDS TERMINATED BY ','`. Syntaxe standard pour les fichiers CSV ou délimités.

---

### Question 28
**Quelle clause définit le délimiteur de lignes ?**

- A) ROWS TERMINATED BY
- **B) LINES TERMINATED BY ✓**
- C) LINE SEPARATOR
- D) ROW DELIMITER

**✅ Réponse: B**

💡 **Conseil:** `LINES TERMINATED BY '\n'` (défaut). Rarement modifié sauf pour des formats spéciaux.

---

### Question 29
**Le SerDe OpenCSVSerde est recommandé pour quel type de fichiers ?**

- A) JSON
- **B) CSV avec guillemets et échappements ✓**
- C) Fichiers binaires
- D) Fichiers XML

**✅ Réponse: B**

💡 **Conseil:** **OpenCSVSerde** gère correctement les guillemets ("valeur, avec virgule"), les échappements, etc. Meilleur que LazySimpleSerDe pour les vrais CSV.

---

### Question 30
**Quel format de stockage offre la meilleure compression selon le cours ?**

- A) TEXTFILE
- B) PARQUET
- **C) ORC ✓**
- D) AVRO

**✅ Réponse: C**

💡 **Conseil:** **ORC** offre généralement la meilleure compression (optimisé pour Hive). PARQUET est plus portable (Spark, Impala). Les deux sont bien meilleurs que TEXTFILE.

---

### Question 31
**Quelle commande INSERT ajoute des données sans supprimer les existantes ?**

- A) INSERT OVERWRITE
- **B) INSERT INTO ✓**
- C) INSERT APPEND
- D) INSERT ADD

**✅ Réponse: B**

💡 **Conseil:** `INSERT INTO TABLE t SELECT ...` ajoute aux données existantes. `INSERT OVERWRITE` remplace tout.

---

### Question 32
**Quelle commande INSERT remplace les données existantes ?**

- A) INSERT INTO
- **B) INSERT OVERWRITE ✓**
- C) INSERT REPLACE
- D) INSERT UPDATE

**✅ Réponse: B**

💡 **Conseil:** `INSERT OVERWRITE TABLE t SELECT ...` supprime les données actuelles avant d'insérer. Utile pour les rechargements complets.

---

### Question 33
**Dans CREATE TABLE AS SELECT, peut-on créer une table externe ?**

- A) Oui, avec EXTERNAL
- **B) Non, uniquement des tables internes ✓**
- C) Seulement avec LOCATION
- D) Seulement pour les tables partitionnées

**✅ Réponse: B**

💡 **Conseil:** **CTAS crée toujours une table interne**. Pour une table externe, créez d'abord la structure avec CREATE EXTERNAL TABLE puis INSERT INTO.

---

### Question 34
**Quelle est la syntaxe pour insérer plusieurs valeurs en une commande ?**

- **A) INSERT INTO TABLE t VALUES (v1), (v2), (v3) ✓**
- B) INSERT INTO TABLE t VALUES (v1); VALUES (v2)
- C) INSERT MULTI INTO TABLE t
- D) BULK INSERT INTO TABLE t

**✅ Réponse: A**

💡 **Conseil:** `INSERT INTO TABLE t VALUES (1,'a'), (2,'b'), (3,'c')`. Chaque tuple entre parenthèses, séparés par des virgules.

---

### Question 35
**Quel est l'avantage des tables TEMPORARY ?**

- A) Elles sont plus rapides
- **B) Elles sont visibles uniquement dans la session courante ✓**
- C) Elles sont compressées automatiquement
- D) Elles sont répliquées

**✅ Réponse: B**

💡 **Conseil:** Tables TEMPORARY = disparaissent à la fin de la session. Parfait pour les tables intermédiaires de transformation sans polluer le schéma.

---

### Question 36
**Quelle commande permet de modifier les propriétés d'une table existante ?**

- A) MODIFY TABLE
- B) UPDATE TABLE
- **C) ALTER TABLE ✓**
- D) CHANGE TABLE

**✅ Réponse: C**

💡 **Conseil:** `ALTER TABLE` pour : renommer, ajouter colonnes, modifier propriétés, ajouter partitions. Commande très polyvalente.

---

### Question 37
**Comment ajouter un commentaire à une colonne lors de la création de table ?**

- A) -- commentaire
- B) /* commentaire */
- **C) COMMENT 'description' ✓**
- D) DESC 'description'

**✅ Réponse: C**

💡 **Conseil:** `col_name TYPE COMMENT 'description'`. Les commentaires sont stockés dans le Metastore et visibles avec DESCRIBE.

---

### Question 38
**Quelle clause permet de définir la propriété de format null personnalisé ?**

- A) NULLFORMAT
- **B) TBLPROPERTIES('serialization.null.format'='...') ✓**
- C) NULL AS
- D) NULLVALUE

**✅ Réponse: B**

💡 **Conseil:** `TBLPROPERTIES('serialization.null.format'='')` pour représenter NULL par une chaîne vide au lieu de \N.

---

### Question 39
**Quel SerDe est automatiquement utilisé pour le format ORC ?**

- A) LazySimpleSerDe
- **B) OrcSerde ✓**
- C) BinarySerDe
- D) ColumnSerDe

**✅ Réponse: B**

💡 **Conseil:** `STORED AS ORC` implique automatiquement OrcSerde. De même : PARQUET → ParquetHiveSerDe, AVRO → AvroSerDe.

---

### Question 40
**Que signifie "Lazy reading" dans le contexte du SerDe par défaut ?**

- A) La lecture est lente
- **B) Les champs sont convertis uniquement lorsqu'ils sont utilisés ✓**
- C) La lecture est différée
- D) Les données sont chargées en mémoire

**✅ Réponse: B**

💡 **Conseil:** **Lazy** = paresseux. Les colonnes sont désérialisées à la demande. Si une requête n'utilise que 2 colonnes sur 10, les 8 autres ne sont pas traitées.

---

## 📊 Résumé des Thèmes Abordés

| Thème | Nombre de Questions |
|-------|---------------------|
| Gestion des bases de données | 5 |
| Création de tables (syntaxe, options) | 8 |
| SerDe et formats de stockage | 8 |
| Chargement de données (LOAD, INSERT) | 8 |
| Partitionnement et Bucketing | 6 |
| Commandes utilitaires | 5 |

---

## 🎯 Conseils pour l'Examen

1. **Maîtrisez la syntaxe de base** :
   ```sql
   CREATE DATABASE IF NOT EXISTS db;
   USE db;
   SHOW TABLES;
   DESCRIBE FORMATTED table;
   ```

2. **Connaissez les différences clés** :
   - LOCAL vs non-LOCAL dans LOAD DATA
   - INTO vs OVERWRITE
   - Table INTERNE vs EXTERNE
   - Partition STATIQUE vs DYNAMIQUE

3. **Retenez les SerDe courants** :
   - LazySimpleSerDe (défaut TEXTFILE)
   - OpenCSVSerde (CSV propres)
   - RegexSerDe (logs)
   - OrcSerde, ParquetHiveSerDe (automatiques)

4. **Comprenez le bucketing** :
   - Même clé + même nombre de buckets = jointure optimisée
   - `SET hive.enforce.bucketing=true`

5. **N'oubliez pas les propriétés importantes** :
   - `skip.header.line.count`
   - `serialization.null.format`
   - `hive.exec.dynamic.partition.mode`

---

**Bonne chance pour votre examen ! 🍀**
