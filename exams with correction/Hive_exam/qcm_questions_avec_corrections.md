# QCM - Apache Hive
## Questions avec Corrections et Conseils

**Auteur du cours:** Mohamed KOUBAA  
**Nombre de questions:** 40

---

### Question 1
**Hive a été initialement développé par quelle entreprise ?**

- A) Google
- B) Yahoo
- **C) Facebook ✓**
- D) Amazon

**✅ Réponse: C**

💡 **Conseil:** **Facebook** a développé Hive pour analyser leurs données massives. Ensuite, il a été donné à l'Apache Software Foundation comme projet open source.

---

### Question 2
**Qu'est-ce que Hive ?**

- A) Une base de données relationnelle temps réel
- **B) Un outil d'entrepôt de données (Data Warehouse) pour Hadoop ✓**
- C) Un système de fichiers distribué
- D) Un broker de messages

**✅ Réponse: B**

💡 **Conseil:** Hive = **Data Warehouse** sur Hadoop. Il permet d'analyser de grands volumes de données avec un langage SQL-like, mais ce n'est PAS une base de données temps réel.

---

### Question 3
**Quel langage de requête utilise Hive ?**

- A) SQL standard
- B) Pig Latin
- **C) HiveQL (SQL-like) ✓**
- D) Python

**✅ Réponse: C**

💡 **Conseil:** **HiveQL** ressemble à SQL mais avec quelques différences. Il est compilé en jobs MapReduce (ou Tez/Spark) pour l'exécution sur Hadoop.

---

### Question 4
**Hive est-il adapté pour les requêtes temps réel ?**

- A) Oui, c'est son usage principal
- **B) Non, il n'est pas conçu pour le temps réel ✓**
- C) Seulement avec des plugins
- D) Uniquement pour les petites requêtes

**✅ Réponse: B**

💡 **Conseil:** Hive est pour l'**analyse batch** (ETL, reporting). Pour le temps réel, utilisez Impala, Presto, ou des bases temps réel comme HBase.

---

### Question 5
**Quel composant Hive stocke les métadonnées des tables ?**

- A) Driver
- **B) Metastore ✓**
- C) Compiler
- D) Execution Engine

**✅ Réponse: B**

💡 **Conseil:** Le **Metastore** contient : schémas des tables, emplacements HDFS, partitions, etc. Il utilise généralement une base relationnelle (MySQL, PostgreSQL).

---

### Question 6
**Par défaut, où sont stockées les tables internes Hive dans HDFS ?**

- A) /data/hive/
- **B) /user/hive/warehouse/ ✓**
- C) /tmp/hive/
- D) /hive/tables/

**✅ Réponse: B**

💡 **Conseil:** Chemin par défaut : `/user/hive/warehouse/database_name.db/table_name/`. Les tables externes peuvent être n'importe où via LOCATION.

---

### Question 7
**Quelle est la différence principale entre une table INTERNE et une table EXTERNE ?**

- A) Aucune différence
- **B) La table externe garde les données lors du DROP, la table interne les supprime ✓**
- C) La table interne est plus rapide
- D) La table externe ne supporte pas les partitions

**✅ Réponse: B**

💡 **Conseil:** **DROP TABLE INTERNE** = supprime métadonnées ET données. **DROP TABLE EXTERNE** = supprime métadonnées SEULEMENT, les fichiers restent dans HDFS.

---

### Question 8
**Quel mot-clé permet de créer une table externe ?**

- A) OUTER
- **B) EXTERNAL ✓**
- C) OUTSIDE
- D) REMOTE

**✅ Réponse: B**

💡 **Conseil:** `CREATE EXTERNAL TABLE ... LOCATION '/path/'`. Le mot-clé **EXTERNAL** indique que Hive ne gère pas le cycle de vie des données.

---

### Question 9
**Quel est le format de stockage par défaut dans Hive ?**

- A) PARQUET
- B) ORC
- **C) TEXTFILE ✓**
- D) AVRO

**✅ Réponse: C**

💡 **Conseil:** **TEXTFILE** = format par défaut (lisible, mais peu performant). En production, préférez ORC ou PARQUET pour de meilleures performances.

---

### Question 10
**Quel format de stockage est orienté colonnes et offre une meilleure compression ?**

- A) TEXTFILE
- **B) PARQUET ou ORC ✓**
- C) CSV
- D) JSON

**✅ Réponse: B**

💡 **Conseil:** **ORC** et **PARQUET** = formats orientés colonnes. Avantages : compression efficace, lecture sélective de colonnes, meilleure performance pour l'analytique.

---

### Question 11
**Qu'est-ce qu'un SerDe dans Hive ?**

- A) Un type de données
- **B) Un Serializer/Deserializer pour lire/écrire les données ✓**
- C) Un format de compression
- D) Un type de table

**✅ Réponse: B**

💡 **Conseil:** **SerDe** = Serializer/Deserializer. Il définit comment lire les lignes du fichier en colonnes et inversement. Ex: OpenCSVSerde, RegexSerde.

---

### Question 12
**Quelle commande permet de charger un fichier local dans une table Hive ?**

- A) INSERT DATA LOCAL
- **B) LOAD DATA LOCAL INPATH ✓**
- C) COPY DATA FROM
- D) IMPORT DATA LOCAL

**✅ Réponse: B**

💡 **Conseil:** `LOAD DATA LOCAL INPATH '/local/path' INTO TABLE table_name`. **LOCAL** = fichier local, sans LOCAL = fichier HDFS.

---

### Question 13
**Que fait le mot-clé OVERWRITE dans la commande LOAD DATA ?**

- A) Ajoute les données à la suite
- **B) Remplace le contenu existant de la table ✓**
- C) Crée une nouvelle table
- D) Supprime la table

**✅ Réponse: B**

💡 **Conseil:** `LOAD DATA ... OVERWRITE INTO TABLE` supprime les données existantes avant de charger. Sans OVERWRITE, les données sont ajoutées.

---

### Question 14
**Qu'est-ce que le partitionnement dans Hive ?**

- A) La compression des données
- **B) La division des données en répertoires basés sur les valeurs d'une colonne ✓**
- C) Le tri des données
- D) La suppression des doublons

**✅ Réponse: B**

💡 **Conseil:** **Partitionnement** = 1 répertoire par valeur. Ex: PARTITIONED BY (year INT) crée /year=2023/, /year=2024/. Accélère les requêtes avec filtres.

---

### Question 15
**Dans le partitionnement, que crée Hive pour chaque valeur de partition ?**

- A) Un fichier
- **B) Un répertoire ✓**
- C) Une table
- D) Une base de données

**✅ Réponse: B**

💡 **Conseil:** **Partition = répertoire** dans HDFS. Structure : `.../table/partition_col=value/data_files`. Hive ne lit que les répertoires pertinents.

---

### Question 16
**Qu'est-ce que le Bucketing dans Hive ?**

- A) La création de sauvegardes
- **B) La division des données en fichiers basée sur le hash d'une colonne ✓**
- C) Le tri alphabétique
- D) La compression des données

**✅ Réponse: B**

💡 **Conseil:** **Bucketing** = hash(colonne) % n_buckets détermine le fichier. Utile pour : jointures optimisées, sampling. Complémentaire au partitionnement.

---

### Question 17
**Dans le Bucketing, que crée Hive pour chaque bucket ?**

- A) Un répertoire
- **B) Un fichier ✓**
- C) Une partition
- D) Une table

**✅ Réponse: B**

💡 **Conseil:** **Bucket = fichier**. `INTO 8 BUCKETS` crée 8 fichiers (000000_0, 000001_0, ...). Différent du partitionnement qui crée des répertoires.

---

### Question 18
**Quelle clause permet de définir le nombre de buckets ?**

- A) PARTITIONED BY
- **B) CLUSTERED BY ... INTO n BUCKETS ✓**
- C) GROUPED BY
- D) DIVIDED INTO

**✅ Réponse: B**

💡 **Conseil:** `CLUSTERED BY (col) INTO n BUCKETS`. Optionnel : `SORTED BY (col)` pour trier dans chaque bucket. Améliore les jointures et le sampling.

---

### Question 19
**Quel type de données Hive représente un entier sur 4 bytes ?**

- A) TINYINT
- B) SMALLINT
- **C) INT ✓**
- D) BIGINT

**✅ Réponse: C**

💡 **Conseil:** Types entiers : TINYINT (1 byte), SMALLINT (2 bytes), **INT (4 bytes)**, BIGINT (8 bytes). Choisissez selon la plage de valeurs.

---

### Question 20
**Quel type de données Hive permet de stocker une chaîne jusqu'à 2G ?**

- A) CHAR
- B) VARCHAR
- **C) STRING ✓**
- D) TEXT

**✅ Réponse: C**

💡 **Conseil:** **STRING** = longueur max 2 Go, pas de limite fixe. CHAR = fixe (255 max), VARCHAR = variable (65535 max). STRING est le plus flexible.

---

### Question 21
**Que fait la commande DESCRIBE FORMATTED table_name ?**

- A) Supprime la table
- **B) Affiche les métadonnées détaillées de la table ✓**
- C) Crée une nouvelle table
- D) Modifie la structure de la table

**✅ Réponse: B**

💡 **Conseil:** `DESCRIBE FORMATTED` montre : colonnes, types, partitions, emplacement HDFS, format, SerDe, propriétés. Plus complet que `DESCRIBE` simple.

---

### Question 22
**Qu'est-ce que CTAS dans Hive ?**

- **A) Create Table As Select ✓**
- B) Copy Table And Save
- C) Create Temporary Archive Storage
- D) Compile Table And Sort

**✅ Réponse: A**

💡 **Conseil:** **CTAS** = `CREATE TABLE new_table AS SELECT ...`. Crée une table et la remplit en une seule commande. Utile pour les transformations ETL.

---

### Question 23
**La commande CTAS crée quel type de table par défaut ?**

- A) Table externe
- **B) Table interne ✓**
- C) Table temporaire
- D) Vue

**✅ Réponse: B**

💡 **Conseil:** CTAS crée toujours une **table interne** (managed). Pour créer une table externe, utilisez CREATE EXTERNAL TABLE puis INSERT.

---

### Question 24
**Que fait la commande CREATE TABLE new_table LIKE existing_table ?**

- A) Copie les données
- **B) Clone la structure sans les données ✓**
- C) Crée une vue
- D) Fusionne les tables

**✅ Réponse: B**

💡 **Conseil:** **LIKE** copie le schéma (colonnes, types, partitions, format) mais pas les données. Utile pour créer des tables avec la même structure.

---

### Question 25
**Quelle propriété permet d'ignorer la première ligne (en-têtes) d'un fichier ?**

- A) skip.first.line
- **B) skip.header.line.count ✓**
- C) ignore.header
- D) header.skip

**✅ Réponse: B**

💡 **Conseil:** `TBLPROPERTIES('skip.header.line.count'='1')`. Ignore les N premières lignes (headers) lors du chargement. Essentiel pour les CSV avec en-têtes.

---

### Question 26
**Quelle est la syntaxe pour insérer des valeurs directement dans une table ?**

- A) ADD VALUES
- **B) INSERT INTO TABLE ... VALUES ✓**
- C) PUT VALUES
- D) LOAD VALUES

**✅ Réponse: B**

💡 **Conseil:** `INSERT INTO TABLE t VALUES (v1, v2, ...)`. Possible depuis Hive 0.14. Pour les insertions massives, préférez LOAD DATA ou INSERT...SELECT.

---

### Question 27
**Que signifie le partitionnement dynamique dans Hive ?**

- **A) Les partitions sont créées automatiquement selon les données ✓**
- B) Les partitions sont créées manuellement
- C) Les partitions sont supprimées automatiquement
- D) Les partitions sont compressées

**✅ Réponse: A**

💡 **Conseil:** **Dynamique** : Hive crée les partitions selon les valeurs trouvées dans les données. **Statique** : vous spécifiez la valeur de partition explicitement.

---

### Question 28
**Quelle variable doit être configurée pour activer le partitionnement dynamique ?**

- A) hive.partition.mode
- **B) hive.exec.dynamic.partition.mode ✓**
- C) hive.dynamic.partition
- D) hive.auto.partition

**✅ Réponse: B**

💡 **Conseil:** `SET hive.exec.dynamic.partition.mode=nonstrict`. Par défaut = strict (requiert au moins une partition statique). nonstrict = tout dynamique.

---

### Question 29
**Quelle fonction retourne la valeur par défaut si la première est NULL ?**

- A) ifnull()
- **B) nvl() ✓**
- C) coalesce()
- D) default()

**✅ Réponse: B**

💡 **Conseil:** `nvl(value, default)` = retourne default si value est NULL. `coalesce(v1, v2, ...)` retourne la première valeur non-NULL parmi plusieurs.

---

### Question 30
**Quelle fonction permet de convertir un type de données en un autre ?**

- A) convert()
- **B) cast() ✓**
- C) transform()
- D) change()

**✅ Réponse: B**

💡 **Conseil:** `CAST(expr AS type)`. Ex: `CAST('123' AS INT)`, `CAST(date_col AS STRING)`. Essentiel pour les conversions de types.

---

### Question 31
**Quelle clause permet de filtrer les résultats d'agrégation ?**

- A) WHERE
- **B) HAVING ✓**
- C) FILTER
- D) LIMIT

**✅ Réponse: B**

💡 **Conseil:** **WHERE** filtre avant l'agrégation, **HAVING** filtre après. `GROUP BY col HAVING COUNT(*) > 10` filtre les groupes.

---

### Question 32
**Les fonctions d'agrégation peuvent-elles être utilisées dans la clause WHERE ?**

- A) Oui, toujours
- **B) Non, jamais ✓**
- C) Seulement avec GROUP BY
- D) Seulement avec DISTINCT

**✅ Réponse: B**

💡 **Conseil:** **WHERE ne peut pas contenir d'agrégations** car elle s'exécute AVANT le GROUP BY. Utilisez HAVING pour filtrer sur des agrégats.

---

### Question 33
**Quelle jointure retourne toutes les lignes des deux tables ?**

- A) INNER JOIN
- B) LEFT JOIN
- **C) FULL OUTER JOIN ✓**
- D) RIGHT JOIN

**✅ Réponse: C**

💡 **Conseil:** **FULL OUTER JOIN** = toutes les lignes des deux tables, avec NULL pour les non-correspondances. LEFT/RIGHT = toutes d'un côté seulement.

---

### Question 34
**Par défaut, que fait Hive avec les doublons lors d'un UNION ?**

- A) Les conserve tous
- **B) Les élimine ✓**
- C) Génère une erreur
- D) Les compte

**✅ Réponse: B**

💡 **Conseil:** `UNION` = `UNION DISTINCT` par défaut, élimine les doublons. Pour tout garder, utilisez `UNION ALL`.

---

### Question 35
**Quelle option UNION conserve tous les doublons ?**

- A) UNION DISTINCT
- **B) UNION ALL ✓**
- C) UNION KEEP
- D) UNION FULL

**✅ Réponse: B**

💡 **Conseil:** **UNION ALL** = conserve TOUS les enregistrements, y compris les doublons. Plus performant car pas de déduplication.

---

### Question 36
**Quel format de fichier est recommandé pour les schémas évolutifs ?**

- A) TEXTFILE
- B) ORC
- **C) AVRO ✓**
- D) PARQUET

**✅ Réponse: C**

💡 **Conseil:** **AVRO** = excellent pour l'évolution de schéma (ajout/suppression de colonnes). Le schéma est stocké avec les données. ORC/PARQUET sont plus performants mais moins flexibles.

---

### Question 37
**Quelle fonction permet de masquer les données sensibles ?**

- A) hide()
- **B) mask() ✓**
- C) encrypt()
- D) protect()

**✅ Réponse: B**

💡 **Conseil:** `mask(string)` : majuscules→X, minuscules→x, chiffres→n. Ex: "Allen" → "Xxxxx", "123" → "nnn". Utile pour anonymiser.

---

### Question 38
**Quelle commande permet de supprimer une base de données avec toutes ses tables ?**

- A) DROP DATABASE name
- **B) DROP DATABASE name CASCADE ✓**
- C) DELETE DATABASE name
- D) REMOVE DATABASE name ALL

**✅ Réponse: B**

💡 **Conseil:** `DROP DATABASE name` échoue si la BD contient des tables. `DROP DATABASE name CASCADE` supprime d'abord toutes les tables puis la BD.

---

### Question 39
**Quel moteur d'exécution moderne peut remplacer MapReduce pour Hive ?**

- A) Storm
- **B) Apache Tez ou Spark ✓**
- C) Kafka
- D) Flume

**✅ Réponse: B**

💡 **Conseil:** **Tez** (optimisé pour les DAG) et **Spark** (in-memory) sont bien plus rapides que MapReduce pour Hive. Configuration : `SET hive.execution.engine=tez`.

---

### Question 40
**Quel avantage offre le Bucketing pour les jointures ?**

- A) Compression des données
- **B) Optimisation des JOIN entre tables avec même bucketing ✓**
- C) Accélération des INSERT
- D) Réduction de la taille des tables

**✅ Réponse: B**

💡 **Conseil:** Deux tables avec **même clé de bucket et même nombre de buckets** = jointure optimisée. Hive peut joindre bucket par bucket sans shuffle global.

---

## 📊 Résumé des Thèmes Abordés

| Thème | Nombre de Questions |
|-------|---------------------|
| Concepts Hive (architecture, métastore) | 6 |
| Types de tables (interne, externe) | 4 |
| Formats de stockage et SerDe | 5 |
| DDL (CREATE, DROP, ALTER) | 6 |
| DML (LOAD, INSERT) | 4 |
| Partitionnement et Bucketing | 6 |
| DQL (SELECT, JOIN, fonctions) | 9 |

---

## 🎯 Conseils pour l'Examen

1. **Distinguez les types de tables** :
   - INTERNE : Hive gère les données (supprimées au DROP)
   - EXTERNE : Données indépendantes (conservées au DROP)

2. **Connaissez les formats de stockage** :
   - TEXTFILE : défaut, lisible, peu performant
   - ORC/PARQUET : colonnes, compression, performant
   - AVRO : évolution de schéma

3. **Comprenez Partitionnement vs Bucketing** :
   - Partition = répertoire (valeurs de colonne)
   - Bucket = fichier (hash de colonne)

4. **Maîtrisez les commandes clés** :
   - LOAD DATA [LOCAL] INPATH
   - INSERT INTO/OVERWRITE
   - CREATE TABLE ... AS SELECT (CTAS)
   - DESCRIBE FORMATTED

5. **Retenez les fonctions importantes** :
   - nvl(), cast(), mask()
   - Agrégations : count, sum, avg, min, max

---

**Bonne chance pour votre examen ! 🍀**
