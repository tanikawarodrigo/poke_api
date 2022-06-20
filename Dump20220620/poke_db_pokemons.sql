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
-- Table structure for table `pokemons`
--

DROP TABLE IF EXISTS `pokemons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pokemons` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `categoria` varchar(255) NOT NULL,
  `habilidade` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_ed4c18e9a6c96721ff237dc769` (`nome`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pokemons`
--

LOCK TABLES `pokemons` WRITE;
/*!40000 ALTER TABLE `pokemons` DISABLE KEYS */;
INSERT INTO `pokemons` VALUES (7,'Bulbasaur','Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce lentamente.','Bulbasaur.png','semente',''),(8,'Ivysaur ','Quando o bulbo nas costas cresce, parece perder a capacidade de ficar em pé nas patas traseiras.','Ivysaur.png','semente',''),(9,'Venusaur ','Sua planta floresce quando está absorvendo energia solar. Ele permanece em movimento para buscar a luz do sol.','Venusaur.png','semente',''),(10,'Charmander','Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta de sua cauda.','Charmander.png','Lagarto',''),(11,'Charmeleon','Tem uma natureza bárbara. Na batalha, ele chicoteia sua cauda de fogo e corta com garras afiadas.','Charmeleon.png','Chama',''),(12,'Charizard','Ele cospe fogo que é quente o suficiente para derreter pedregulhos. Pode causar incêndios florestais soprando chamas.','Charizard.png','Chama',''),(13,'Squirtle','Quando retrai seu longo pescoço em sua concha, esguicha água com força vigorosa.','Squirtle.png','Pequena Tartaruga',''),(14,'Wartortle','É reconhecido como um símbolo de longevidade. Se a concha tiver algas, esse Wartortle é muito antigo.','Wartortle.png','Tartaruga',''),(15,'Blastoise','Ele esmaga seu inimigo sob seu corpo pesado para causar desmaios. Em uma pitada, ele se retirará dentro de sua concha.','Blastoise.png','Tartaruga',''),(16,'Caterpie','Para proteção, ele libera um cheiro horrível da antena em sua cabeça para afastar os inimigos.','Caterpie.png','Minhoca',''),(17,'Metapod','Está esperando o momento de evoluir. Nesta fase, ele só pode endurecer, por isso permanece imóvel para evitar ataques.','Metapod.png','Casulo',''),(18,'Butterfree','Na batalha, ele bate as asas em grande velocidade para liberar poeira altamente tóxica no ar.','Butterfree.png','Borboleta',''),(19,'Pidgey','Muito dócil. Se atacado, ele geralmente levanta areia para se proteger, em vez de revidar.','Pidgey.png','Passaro pequeno',''),(20,'Pidgeotto','Este Pokémon é cheio de vitalidade. Ele voa constantemente em torno de seu grande território em busca de presas.','Pidgeotto.png','Passaro',''),(21,'Pidgeot','Este Pokémon voa em velocidade Mach 2, em busca de presas. Suas grandes garras são temidas como armas perversas.','Pidgeot.png','Passaro',''),(22,'Rattata','Vai mastigar qualquer coisa com suas presas. Se você vir um, pode ter certeza de que mais 40 vivem na área.','Rattata.png','Rato',''),(23,'Raticate','Suas patas traseiras são palmadas. Eles agem como nadadeiras, para que possam nadar em rios e caçar presas.','Raticate.png','Rato',''),(24,'Pikachu','Pikachu que pode gerar eletricidade poderosa tem bolsas nas bochechas que são extra macias e super elásticas.','Pikachu.png','Rato',''),(25,'Raichu','Sua longa cauda serve como base para se proteger de sua própria energia de alta tensão.','Raichu.png','Rato',''),(26,'Diglett','Se um Diglett cava em um campo, ele deixa o solo perfeitamente arado e ideal para plantar.','Diglett.png','Verruga?',''),(27,'Dugtrio','Uma equipe de trigêmeos Diglett. Ele desencadeia enormes terremotos cavando 60 milhas no subsolo.','Dugtrio.png','Verruga Tripla!? (migos)',''),(28,'Meowth','Adora colecionar coisas brilhantes. Se estiver de bom humor, pode até deixar seu Treinador dar uma olhada em seu tesouro de tesouros.','Meowth.png','arranha gato',''),(29,'Mewtwo','Seu DNA é quase o mesmo que o de Mew. No entanto, seu tamanho e disposição são muito diferentes.','Mewtwo.png','Genética','');
/*!40000 ALTER TABLE `pokemons` ENABLE KEYS */;
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
