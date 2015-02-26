dataset-user-interactions-mimic
===============================

A dataset with user micro-interactions used in this paper:
[Mimic: Visual Analysis of Online Micro-interactions](http://www.autodeskresearch.com/publications/mimic)

The dataset consists of data from a replication of a recent crowd-sourcing experiment to better understand why participants consistently perform poorly in answering a canonical conditional probability question called the Mammography Problem.

![Screenshot](https://github.com/sbreslav/dataset-user-interactions-mimic/raw/master/images/screenshot2.png)

## Building Dataset
To populate a [MongoDB](http://www.mongodb.org/) or [TingoDB](http://www.tingodb.com/) with the data, follow these steps:

1. (Optional) If you want to use MongoDB, make sure [MongoDB](http://www.mongodb.org/) is installed
2. Edit configuration in package.json
3. Install all the required packages
> npm install
4. Run the db_import.js script
> npm start