# QCM - Apache Hive

## Chapitre : Hive

**Auteur du cours:** Mohamed KOUBAA  
**Nombre de questions:** 40

---

### Question 1
Hive a été initialement développé par quelle entreprise ?

- A) Google
- B) Yahoo
- C) Facebook
- D) Amazon

---

### Question 2
Qu'est-ce que Hive ?

- A) Une base de données relationnelle temps réel
- B) Un outil d'entrepôt de données (Data Warehouse) pour Hadoop
- C) Un système de fichiers distribué
- D) Un broker de messages

---

### Question 3
Quel langage de requête utilise Hive ?

- A) SQL standard
- B) Pig Latin
- C) HiveQL (SQL-like)
- D) Python

---

### Question 4
Hive est-il adapté pour les requêtes temps réel ?

- A) Oui, c'est son usage principal
- B) Non, il n'est pas conçu pour le temps réel
- C) Seulement avec des plugins
- D) Uniquement pour les petites requêtes

---

### Question 5
Quel composant Hive stocke les métadonnées des tables ?

- A) Driver
- B) Metastore
- C) Compiler
- D) Execution Engine

---

### Question 6
Par défaut, où sont stockées les tables internes Hive dans HDFS ?

- A) /data/hive/
- B) /user/hive/warehouse/
- C) /tmp/hive/
- D) /hive/tables/

---

### Question 7
Quelle est la différence principale entre une table INTERNE et une table EXTERNE ?

- A) Aucune différence
- B) La table externe garde les données lors du DROP, la table interne les supprime
- C) La table interne est plus rapide
- D) La table externe ne supporte pas les partitions

---

### Question 8
Quel mot-clé permet de créer une table externe ?

- A) OUTER
- B) EXTERNAL
- C) OUTSIDE
- D) REMOTE

---

### Question 9
Quel est le format de stockage par défaut dans Hive ?

- A) PARQUET
- B) ORC
- C) TEXTFILE
- D) AVRO

---

### Question 10
Quel format de stockage est orienté colonnes et offre une meilleure compression ?

- A) TEXTFILE
- B) PARQUET ou ORC
- C) CSV
- D) JSON

---

### Question 11
Qu'est-ce qu'un SerDe dans Hive ?

- A) Un type de données
- B) Un Serializer/Deserializer pour lire/écrire les données
- C) Un format de compression
- D) Un type de table

---

### Question 12
Quelle commande permet de charger un fichier local dans une table Hive ?

- A) INSERT DATA LOCAL
- B) LOAD DATA LOCAL INPATH
- C) COPY DATA FROM
- D) IMPORT DATA LOCAL

---

### Question 13
Que fait le mot-clé OVERWRITE dans la commande LOAD DATA ?

- A) Ajoute les données à la suite
- B) Remplace le contenu existant de la table
- C) Crée une nouvelle table
- D) Supprime la table

---

### Question 14
Qu'est-ce que le partitionnement dans Hive ?

- A) La compression des données
- B) La division des données en répertoires basés sur les valeurs d'une colonne
- C) Le tri des données
- D) La suppression des doublons

---

### Question 15
Dans le partitionnement, que crée Hive pour chaque valeur de partition ?

- A) Un fichier
- B) Un répertoire
- C) Une table
- D) Une base de données

---

### Question 16
Qu'est-ce que le Bucketing dans Hive ?

- A) La création de sauvegardes
- B) La division des données en fichiers basée sur le hash d'une colonne
- C) Le tri alphabétique
- D) La compression des données

---

### Question 17
Dans le Bucketing, que crée Hive pour chaque bucket ?

- A) Un répertoire
- B) Un fichier
- C) Une partition
- D) Une table

---

### Question 18
Quelle clause permet de définir le nombre de buckets ?

- A) PARTITIONED BY
- B) CLUSTERED BY ... INTO n BUCKETS
- C) GROUPED BY
- D) DIVIDED INTO

---

### Question 19
Quel type de données Hive représente un entier sur 4 bytes ?

- A) TINYINT
- B) SMALLINT
- C) INT
- D) BIGINT

---

### Question 20
Quel type de données Hive permet de stocker une chaîne jusqu'à 2G ?

- A) CHAR
- B) VARCHAR
- C) STRING
- D) TEXT

---

### Question 21
Que fait la commande DESCRIBE FORMATTED table_name ?

- A) Supprime la table
- B) Affiche les métadonnées détaillées de la table
- C) Crée une nouvelle table
- D) Modifie la structure de la table

---

### Question 22
Qu'est-ce que CTAS dans Hive ?

- A) Create Table As Select
- B) Copy Table And Save
- C) Create Temporary Archive Storage
- D) Compile Table And Sort

---

### Question 23
La commande CTAS crée quel type de table par défaut ?

- A) Table externe
- B) Table interne
- C) Table temporaire
- D) Vue

---

### Question 24
Que fait la commande CREATE TABLE new_table LIKE existing_table ?

- A) Copie les données
- B) Clone la structure sans les données
- C) Crée une vue
- D) Fusionne les tables

---

### Question 25
Quelle propriété permet d'ignorer la première ligne (en-têtes) d'un fichier ?

- A) skip.first.line
- B) skip.header.line.count
- C) ignore.header
- D) header.skip

---

### Question 26
Quelle est la syntaxe pour insérer des valeurs directement dans une table ?

- A) ADD VALUES
- B) INSERT INTO TABLE ... VALUES
- C) PUT VALUES
- D) LOAD VALUES

---

### Question 27
Que signifie le partitionnement dynamique dans Hive ?

- A) Les partitions sont créées automatiquement selon les données
- B) Les partitions sont créées manuellement
- C) Les partitions sont supprimées automatiquement
- D) Les partitions sont compressées

---

### Question 28
Quelle variable doit être configurée pour activer le partitionnement dynamique ?

- A) hive.partition.mode
- B) hive.exec.dynamic.partition.mode
- C) hive.dynamic.partition
- D) hive.auto.partition

---

### Question 29
Quelle fonction retourne la valeur par défaut si la première est NULL ?

- A) ifnull()
- B) nvl()
- C) coalesce()
- D) default()

---

### Question 30
Quelle fonction permet de convertir un type de données en un autre ?

- A) convert()
- B) cast()
- C) transform()
- D) change()

---

### Question 31
Quelle clause permet de filtrer les résultats d'agrégation ?

- A) WHERE
- B) HAVING
- C) FILTER
- D) LIMIT

---

### Question 32
Les fonctions d'agrégation peuvent-elles être utilisées dans la clause WHERE ?

- A) Oui, toujours
- B) Non, jamais
- C) Seulement avec GROUP BY
- D) Seulement avec DISTINCT

---

### Question 33
Quelle jointure retourne toutes les lignes des deux tables ?

- A) INNER JOIN
- B) LEFT JOIN
- C) FULL OUTER JOIN
- D) RIGHT JOIN

---

### Question 34
Par défaut, que fait Hive avec les doublons lors d'un UNION ?

- A) Les conserve tous
- B) Les élimine
- C) Génère une erreur
- D) Les compte

---

### Question 35
Quelle option UNION conserve tous les doublons ?

- A) UNION DISTINCT
- B) UNION ALL
- C) UNION KEEP
- D) UNION FULL

---

### Question 36
Quel format de fichier est recommandé pour les schémas évolutifs ?

- A) TEXTFILE
- B) ORC
- C) AVRO
- D) PARQUET

---

### Question 37
Quelle fonction permet de masquer les données sensibles ?

- A) hide()
- B) mask()
- C) encrypt()
- D) protect()

---

### Question 38
Quelle commande permet de supprimer une base de données avec toutes ses tables ?

- A) DROP DATABASE name
- B) DROP DATABASE name CASCADE
- C) DELETE DATABASE name
- D) REMOVE DATABASE name ALL

---

### Question 39
Quel moteur d'exécution moderne peut remplacer MapReduce pour Hive ?

- A) Storm
- B) Apache Tez ou Spark
- C) Kafka
- D) Flume

---

### Question 40
Quel avantage offre le Bucketing pour les jointures ?

- A) Compression des données
- B) Optimisation des JOIN entre tables avec même bucketing
- C) Accélération des INSERT
- D) Réduction de la taille des tables

---

## Fin du QCM

**Instructions:** Pour chaque question, sélectionnez la meilleure réponse parmi les options proposées (A, B, C ou D).
