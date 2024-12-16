-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: blogger
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `role_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'johndoe','johndoe@example.com','hashed_password_here','2024-12-08 09:49:24','2024-12-08 10:31:43',2),(2,'username','email@gmail.com','test','2024-12-08 10:22:38','2024-12-08 10:31:43',2),(7,'username22','email2@gmail.com','test','2024-12-08 10:44:52','2024-12-08 10:44:52',2),(8,'username222','email22@gmail.com','test','2024-12-08 10:46:36','2024-12-08 10:46:36',2),(9,'username2221','email221@gmail.com','$2b$10$62hlEvsUIG66115o8NTwjODvTBhqsaXWcDAEp9LNlvZD1MYRkR.Qa','2024-12-08 10:47:28','2024-12-08 10:47:28',2),(10,'venkat','email2veat@gmail.com','$2b$10$FmFSi7q73EFCQ9ip4RSdAeJn.3yosj9imP5v4rUgfHovaQuWJoqrq','2024-12-12 10:01:40','2024-12-12 10:01:40',1),(11,'test1235','test1235@gmail.com','$2b$10$yjKl5.znD2BmGRA/DgKbeOX//vG0nDsXL1Nn1sjpXDtu5aJxH7xRi','2024-12-13 07:52:13','2024-12-13 07:52:13',1),(12,'test12356','test12356@gmail.com','$2b$10$1DwcDdyIWrDryEzqCrA8w.yXwyvQxAi2/UB/tgBhCTYKSqczuPpNS','2024-12-13 07:55:39','2024-12-13 07:55:39',1),(13,'test123455','test123455@gmail.com','$2b$10$1KxUc94qA1ERGp.R3e7.NuVoRlQqXV8L.ke.pF4zbYLzm.EMC.BrK','2024-12-13 07:57:37','2024-12-13 07:57:37',1),(14,'venkatch','venkatch@gmail.com','$2b$10$/o267Gy.Qkih2QQYZBmiFOEWJW3uz1XnwR2YMAqtvFTRkh.XNymOq','2024-12-14 12:20:34','2024-12-14 12:20:34',1),(15,'govin','govin@gmail.com','$2b$10$5MTtev6XDxk0srDCrQ/pHus3s5xZfkzBToVoQNRTx4aACYRefG4pK','2024-12-14 12:57:16','2024-12-14 12:57:16',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-16 10:41:36
