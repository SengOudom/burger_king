/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50726
Source Host           : localhost:3306
Source Database       : bk_sys

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2024-01-17 11:52:02
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for food_bk
-- ----------------------------
DROP TABLE IF EXISTS `food_bk`;
CREATE TABLE `food_bk` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `product_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `calories` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fat` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `saturated_fat` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trams_fat` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cholesterol` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sodium` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `carbohydrates` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fiber` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sugar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `proteins` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `delete_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `update_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of food_bk
-- ----------------------------
INSERT INTO `food_bk` VALUES ('1', 'Breakfast', 'Fully_Loaded_Croissan\'wich', '714.3', '49', '22.1', '1.2', '329.5', '2,235.8', '33.6', '1.2', '6', '34.7', '170237114663', null, '2023-12-12 08:52:26', null);
INSERT INTO `food_bk` VALUES ('2', 'Breakfast', 'Double_Sausage,_Egg,_&_Cheese_Croissan\'wich', '882.9', '65.7', '28.6', '2.3', '547.5', '2,196.1', '33.3', '1.1', '4.6', '39.3', '170237190635', null, '2023-12-12 09:05:06', null);
INSERT INTO `food_bk` VALUES ('3', 'Breakfast', 'Bacon,_Sausage,_Egg,_&_Cheese_Croissan\'wich', '674.5', '47.9', '22.2', '1.1', '313.9', '1,839.4', '32.6', '1.3', '5.9', '28.7', '170237197564', null, '2023-12-12 09:06:15', null);
INSERT INTO `food_bk` VALUES ('4', 'Breakfast', 'Sausage,_Egg,_&_Cheese_Croissan\'wich', '552.2', '37.5', '17.1', '1.1', '284.5', '1,244.7', '30.8', '1.2', '4.5', '21.9', '170237207711', null, '2023-12-12 09:07:57', null);
INSERT INTO `food_bk` VALUES ('5', 'Flame_Grilled_Burgers', 'Whopper', '673.3', '41', '12.1', '0.2', '85.1', '1,170.3', '55', '3.5', '13.8', '31.5', '170237225142', null, '2023-12-12 09:10:51', null);
INSERT INTO `food_bk` VALUES ('6', 'Flame_Grilled_Burgers', 'Whopper_with_Bacon', '753.3', '49', '13.1', '1.2', '100.1', '1,430.3', '56.2', '3.5', '14', '37.5', '170237251695', null, '2023-12-12 09:15:16', null);
INSERT INTO `food_bk` VALUES ('7', 'Flame_Grilled_Burgers', 'Whopper_with_Cheese', '773.3', '51', '15.1', '1.3', '110.1', '1,610.3', '58.6', '3.6', '15.7', '36.5', '170237257540', null, '2023-12-12 09:16:15', null);
INSERT INTO `food_bk` VALUES ('8', 'Flame_Grilled_Burgers', 'Whopper_with_Bacon_&_Cheese', '823.3', '53', '18.1', '0.9', '115.1', '1,850.3', '58.8', '3.7', '15.8', '40.5', '170237263051', null, '2023-12-12 09:17:10', null);
INSERT INTO `food_bk` VALUES ('9', 'Chicken_&_Fish', 'BK_Royal_Crispy_Chicken', '600', '33', '5', '0.1', '80', '1,330', '54', '4.1', '9.5', '31.4', '170237701775', null, '2023-12-12 10:30:17', null);
INSERT INTO `food_bk` VALUES ('10', 'Chicken_&_Fish', 'Spicy_BK_Royal_Crispy_Chicken', '910', '65', '10.5', '0.1', '95', '1,820', '59', '4.1', '11.5', '31.4', '170237708849', null, '2023-12-12 10:31:28', null);
INSERT INTO `food_bk` VALUES ('11', 'Chicken_&_Fish', 'Bacon_and_Swiss_BK_Royal_Crispy_Chicken', '890', '61', '13.5', '0.4', '125', '2,160', '57', '4.1', '10.5', '39.4', '170237713874', null, '2023-12-12 10:32:18', null);
INSERT INTO `food_bk` VALUES ('12', 'Chicken_&_Fish', 'Honey_Mustard_BK_Royal_Crispy_Chicken', '570', '27', '4', '0', '70', '1,330', '61', '9', '14', '31', '170237718991', null, '2023-12-12 10:33:09', null);
INSERT INTO `food_bk` VALUES ('13', 'Drinks_&_Coffee', 'Value_Coca-Cola', '200', '0', '0', '0', '0', '50', '53', '0', '53', '0', '170237729073', null, '2023-12-12 10:34:50', null);
INSERT INTO `food_bk` VALUES ('14', 'Drinks_&_Coffee', 'Small_Coca-Cola', '240', '0', '0', '0', '0', '60', '66', '0', '66', '0', '170237732457', null, '2023-12-12 10:35:24', null);
INSERT INTO `food_bk` VALUES ('15', 'Drinks_&_Coffee', 'Medium_Coca-Cola', '350', '0', '0', '0', '0', '85', '96', '0', '96', '0', '170237735015', null, '2023-12-12 10:35:50', null);
INSERT INTO `food_bk` VALUES ('16', 'Drinks_&_Coffee', 'Large_Coca-Cola', '460', '0', '0', '0', '0', '115', '126', '0', '126', '0', '170237737835', null, '2023-12-12 10:36:18', null);
INSERT INTO `food_bk` VALUES ('17', 'Drinks_&_Coffee', 'Value_Diet_Coke', '0', '0', '0', '0', '0', '50', '0', '0', '0', '0', '170237741131', null, '2023-12-12 10:36:51', null);
INSERT INTO `food_bk` VALUES ('18', 'Sides', 'Value_Classic_Fries', '230', '10', '1', '0', '0', '170', '33', '2', '1', '3', '170237748572', null, '2023-12-12 10:38:05', null);
INSERT INTO `food_bk` VALUES ('19', 'Sides', 'Small_Classic_Fries', '300', '13', '2', '0', '0', '220', '43', '3', '1', '4', '170237751845', null, '2023-12-12 10:38:38', null);
INSERT INTO `food_bk` VALUES ('20', 'Sides', 'Medium_Classic_Fries', '370', '16', '2', '0', '0', '270', '54', '4', '1', '5', '170237755065', null, '2023-12-12 10:39:10', null);
INSERT INTO `food_bk` VALUES ('21', 'Sides', 'Large_Classic_Fries', '440', '19', '3', '0', '0', '320', '64', '5', '1', '5', '170237757448', null, '2023-12-12 10:39:34', null);
INSERT INTO `food_bk` VALUES ('22', 'Sides', 'Value_Onion_Rings', '200', '1.5', '0', '0', '0', '370', '27', '3', '3', '3', '170237761512', null, '2023-12-12 10:40:15', null);
INSERT INTO `food_bk` VALUES ('23', 'Sweets', 'HERSHEY\'S®_Sundae_Pie', '310', '18', '12', '0', '10', '230', '32', '1', '22', '3', '170237769943', null, '2023-12-12 10:41:39', null);
INSERT INTO `food_bk` VALUES ('24', 'Sweets', 'Classic_Oreo®_Shake', '640', '17', '10', '0.5', '55', '460', '109', '1', '86', '13', '170237774248', null, '2023-12-12 10:42:22', null);
INSERT INTO `food_bk` VALUES ('25', 'Sweets', 'Chocolate_Oreo®_Shake', '670', '17', '10', '0.5', '55', '470', '116', '2', '91', '13', '170237787750', null, '2023-12-12 10:44:37', null);
INSERT INTO `food_bk` VALUES ('26', 'Sweets', 'Chocolate_Shake', '590', '14', '9', '0.5', '55', '420', '103', '1', '84', '13', '170237801413', null, '2023-12-12 10:46:54', null);
INSERT INTO `food_bk` VALUES ('27', 'Flame_Grilled_Burgers', 'BBQ_Bacon_Whopper_Jr.', '392.2', '24', '7', '0', '50', '730', '32.7', '2.3', '9.2', '18.2', '170375864926', null, '2023-12-28 10:17:29', null);
INSERT INTO `food_bk` VALUES ('28', 'Flame_Grilled_Burgers', 'Hamburger', '250', '10', '4', '0', '30', '560', '29', '1.1', '7.1', '13.1', '170427446584', null, '2024-01-03 09:34:25', null);

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of migrations
-- ----------------------------
INSERT INTO `migrations` VALUES ('1', '2023_12_01_101430_create_product_bk', '1');
INSERT INTO `migrations` VALUES ('2', '2014_10_12_000000_create_users_table', '2');
INSERT INTO `migrations` VALUES ('3', '2023_12_05_094126_create_images_table', '3');

-- ----------------------------
-- Table structure for password_resets
-- ----------------------------
DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of password_resets
-- ----------------------------

-- ----------------------------
-- Table structure for product_bk
-- ----------------------------
DROP TABLE IF EXISTS `product_bk`;
CREATE TABLE `product_bk` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `update_at` timestamp NULL DEFAULT NULL,
  `delete_at` timestamp NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of product_bk
-- ----------------------------
INSERT INTO `product_bk` VALUES ('1', 'Breakfast', '170228531929', '2023-12-11 09:01:59', null, '2023-12-22 14:52:44');
INSERT INTO `product_bk` VALUES ('2', 'Flame_Grilled_Burgers', '170228532747', '2023-12-11 09:02:07', null, '2023-12-22 14:52:44');
INSERT INTO `product_bk` VALUES ('3', 'Chicken_&_Fish', '170228533525', '2023-12-11 09:02:15', null, '2023-12-22 14:52:44');
INSERT INTO `product_bk` VALUES ('4', 'Drinks_&_Coffee', '170228535882', '2023-12-11 09:02:38', null, '2023-12-22 14:52:44');
INSERT INTO `product_bk` VALUES ('5', 'Sides', '170228538463', '2023-12-11 09:03:04', null, '2023-12-22 14:52:44');
INSERT INTO `product_bk` VALUES ('6', 'Sweets', '170228539375', '2023-12-11 09:03:13', null, '2023-12-22 14:52:44');
