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
-- Table structure for table `blog_posts`
--

DROP TABLE IF EXISTS `blog_posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog_posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `published_at` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `blog_posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_posts`
--

LOCK TABLES `blog_posts` WRITE;
/*!40000 ALTER TABLE `blog_posts` DISABLE KEYS */;
INSERT INTO `blog_posts` VALUES (8,13,'How to Generate Software License Keys and Verify Them','You are running a small software business that sells digital downloads - apps, plugins, or even templates. When the buyer completes the purchase, you need to provide them with a license key that they can use to activate and validate the software.Productivity software\n\n',NULL,'2024-12-14 12:01:49','2024-12-14 12:01:49'),(9,13,'Send Personalized Emails with SMTP and Mail Merge in Google Sheets','The Mail merge add-on lets you send personalized emails to multiple recipients in one go. The emails are always sent via your Gmail account or your Google Workspace email address. Google also imposes a limit on the number of emails you can send per day.\n\n',NULL,'2024-12-14 12:02:00','2024-12-14 12:02:00'),(11,12,'Why Choose React For Web Development in 2024','In the quest for the best web development framework in 2024, look no further than the JavaScript library. Its popularity has soared for a reason: it streamlines development, delivers exceptional performance, and embraces SEO-friendliness. Whether you’re a seasoned developer seeking cutting-edge solutions or a beginner embarking on your web development journey, React’s accessible learning curve and vibrant community make it an ideal choice. Ditch sluggish websites and embrace lightning-fast experiences with React’s Virtual DOM technology.\n\n',NULL,'2024-12-14 12:03:18','2024-12-14 12:03:18'),(13,12,'Build a New React App with Create-React-App in Just 5 Minutes','Create React App is a feature-rich development environment for learning React, and is the best method to start building a new single-page application in React. We can use create-react-app to bootstrap a React application on your preferred system. It offers a modern build setup with zero configuration',NULL,'2024-12-14 12:05:03','2024-12-14 12:05:03'),(14,13,'test','test blog',NULL,'2024-12-14 12:56:52','2024-12-14 12:56:52'),(15,15,'lets get started into react','yeah, create react app ',NULL,'2024-12-14 12:57:51','2024-12-14 12:57:51');
/*!40000 ALTER TABLE `blog_posts` ENABLE KEYS */;
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
