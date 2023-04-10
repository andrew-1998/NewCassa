-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: cassa
-- ------------------------------------------------------
-- Server version	8.0.32-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `files`
--

DROP TABLE IF EXISTS `files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `files` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `procedure_id` int unsigned NOT NULL,
  `filename` varchar(127) DEFAULT NULL,
  `fileurl` varchar(255) DEFAULT NULL,
  `alterpath` varchar(127) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files`
--

LOCK TABLES `files` WRITE;
/*!40000 ALTER TABLE `files` DISABLE KEYS */;
INSERT INTO `files` VALUES (1,1,'Чертеж захвата.pdf','https://tender.rusal.ru/Files/Download?fileUid=549443fb-0b2f-4ad4-8c08-a2150fa51cf2&amp;entityTypeCode=Tender&amp;entityUid=2c5990f6-5541-4d6b-87d0-cbeeeb7aee96','/var/www/html/NewCassa/data/source/Чертеж захвата.pdf'),(2,1,'Чертежи вкладыша.rar','https://tender.rusal.ru/Files/Download?fileUid=5e694658-d01c-4c3a-8de2-effb2bd1b11c&amp;entityTypeCode=Tender&amp;entityUid=2c5990f6-5541-4d6b-87d0-cbeeeb7aee96','/var/www/html/NewCassa/data/source/Чертежи вкладыша.rar');
/*!40000 ALTER TABLE `files` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `procedures`
--

DROP TABLE IF EXISTS `procedures`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `procedures` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `tender_id` int unsigned NOT NULL,
  `startdate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `procedures`
--

LOCK TABLES `procedures` WRITE;
/*!40000 ALTER TABLE `procedures` DISABLE KEYS */;
INSERT INTO `procedures` VALUES (1,8,'2023-03-23 17:37:00');
/*!40000 ALTER TABLE `procedures` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tenders`
--

DROP TABLE IF EXISTS `tenders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tenders` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `lot` varchar(12) NOT NULL,
  `org` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tenders`
--

LOCK TABLES `tenders` WRITE;
/*!40000 ALTER TABLE `tenders` DISABLE KEYS */;
INSERT INTO `tenders` VALUES (1,'T-0007258','ООО КРАМЗ','https://tender.rusal.ru/Tender/T-0007258/1'),(2,'T-0007257','ООО КРАМЗ','https://tender.rusal.ru/Tender/T-0007257/1'),(3,'T-0007243','ЗАО РУСАЛ Арменал','https://tender.rusal.ru/Tender/T-0007243/1'),(4,'T-0007237','АО РУСАЛ МЕНЕДЖМЕНТ','https://tender.rusal.ru/Tender/T-0007237/1'),(5,'T-0007235','ООО КРАМЗ','https://tender.rusal.ru/Tender/T-0007235/1'),(6,'T-0007233','ООО КРАМЗ','https://tender.rusal.ru/Tender/T-0007233/1'),(7,'T-0007232','ООО КРАМЗ','https://tender.rusal.ru/Tender/T-0007232/1'),(8,'T-0007226','ЗАО РУСАЛ Арменал','https://tender.rusal.ru/Tender/T-0007226/1'),(9,'T-0007195','ЗАО РУСАЛ Арменал','https://tender.rusal.ru/Tender/T-0007195/1'),(10,'T-0007174','ЗАО РУСАЛ Арменал','https://tender.rusal.ru/Tender/T-0007174/1');
/*!40000 ALTER TABLE `tenders` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-10 22:54:21
