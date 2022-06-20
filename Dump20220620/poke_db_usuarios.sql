-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: poke_db
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_446adfc18b35418aac32ae0b7b` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'nelson','nelson@gmail.com','',''),(2,'rodrigo','rodrigo@gmail.com','',''),(3,'leonardo','leonardo@gmail.com','',''),(4,'asd','gustavo@gmail.com','nelson','#ASDasd123'),(7,'teste','teste@gmail.com','teste','#ASDasd123'),(8,'Rodrigo Yuji ','tanikawa.rodrigo@gmail.com','Yamamoto Tanikawa','#ASDasd123'),(9,'Rodrigo Yuji ','teste2@gmail.com','Yamamoto Tanikawa','#ASDasd123'),(10,'rodrigo','rods@gmail.com','',''),(11,'rodrigo','rod@gmail.com','','$2b$05$W/Cics9MN9NSnA4wezLPYOEwuig3eqkP/CUo2.FOQGmBFpLCjgt7.'),(12,'rodrigo','teste123@gmail.com','','$2b$10$XTljgzDRLJSuytfwvZKq1.vRnuhECaG5Sn08YI5Ml4TnQw9dM6xrW'),(13,'lucas','teste1234@gmail.com','','$2b$10$IUAABGnBwBGP1caYlvuqre/gLM/nf5M67O018CApNngU7QZ12Q1g.'),(14,'Rodrigo Yuji ','nelsonnelson@gmail.com','Yamamoto Tanikawa','$2b$10$zhAW524mhAbHKLE7L6MjHuN1zarTY5s8p4/tUJdiqk90RB/QV/pXe'),(15,'123quatro','novedez@gmail.com','567oito','$2b$10$lDbt9ZRROSUHkDzd2FRDK.Xf5JiM22Nmk3T412ncX9CnZHoGdtWb.');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-20  9:08:48
