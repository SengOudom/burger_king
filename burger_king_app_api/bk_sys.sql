/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50726
Source Host           : localhost:3306
Source Database       : bk_sys

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2025-02-20 18:56:19
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for food_bk
-- ----------------------------
DROP TABLE IF EXISTS `food_bk`;
CREATE TABLE `food_bk` (
  `id_foods` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `food_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `food_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
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
  `status` int(2) NOT NULL,
  `delete_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `update_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_foods`)
) ENGINE=MyISAM AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of food_bk
-- ----------------------------
INSERT INTO `food_bk` VALUES ('1', 'Breakfast', 'Fully_Loaded_Croissan\'wich', '714.3', '49', '22.1', '1.2', '329.5', '2,235.8', '33.6', '1.2', '6', '34.7', 'fully_loaded_croissan\'wich', '1', null, '2023-12-12 08:52:26', null);
INSERT INTO `food_bk` VALUES ('2', 'Breakfast', 'Double_Sausage,_Egg,_&_Cheese_Croissan\'wich', '882.9', '65.7', '28.6', '2.3', '547.5', '2,196.1', '33.3', '1.1', '4.6', '39.3', 'double_sausage_egg_&_cheese_croissan\'wich', '1', null, '2023-12-12 09:05:06', null);
INSERT INTO `food_bk` VALUES ('3', 'Breakfast', 'Bacon,_Sausage,_Egg,_&_Cheese_Croissan\'wich', '674.5', '47.9', '22.2', '1.1', '313.9', '1,839.4', '32.6', '1.3', '5.9', '28.7', 'bacon,_sausage,_egg,_&_cheese_croissan\'wich', '1', null, '2023-12-12 09:06:15', null);
INSERT INTO `food_bk` VALUES ('4', 'Breakfast', 'Sausage,_Egg,_&_Cheese_Croissan\'wich', '552.2', '37.5', '17.1', '1.1', '284.5', '1,244.7', '30.8', '1.2', '4.5', '21.9', 'sausage,_egg,_&_cheese_croissan\'wich', '1', null, '2023-12-12 09:07:57', null);
INSERT INTO `food_bk` VALUES ('5', 'Chicken_&_Fish', 'Original_Chicken_Sandwich', '680', '39', '7', '0.3', '65', '1,380', '63', '3', '7.5', '23.4', 'original_chicken_sandwich', '1', null, '2025-01-31 11:53:33', null);
INSERT INTO `food_bk` VALUES ('6', 'Chicken_&_Fish', 'Flame-Grilled_Chicken_Sandwich', '410', '15', '3', '0', '95', '940', '43', '2', '7', '35', 'flame-grilled_chicken_sandwich', '1', null, '2025-01-31 11:57:02', null);
INSERT INTO `food_bk` VALUES ('7', 'Chicken_&_Fish', 'Fiery_Flame-Grilled_Chicken_Sandwich', '570', '31', '5', '0', '95', '1,200', '46', '3', '10', '35', 'fiery_flame-grilled_chicken_sandwich', '1', null, '2025-01-31 11:58:03', null);
INSERT INTO `food_bk` VALUES ('8', 'Chicken_&_Fish', '4_Pc._Chicken_Nuggets', '190', '12', '2.5', '0', '30', '490', '12', '1', '0', '9', '4_pc._chicken_nuggets', '1', null, '2025-02-03 10:32:57', null);
INSERT INTO `food_bk` VALUES ('9', 'Drinks_&_Coffee', 'Value_Coca-Cola', '170', '0', '0', '0', '0', '40', '47', '0', '47', '0', 'value_coca-cola', '1', null, '2025-02-03 10:38:22', null);
INSERT INTO `food_bk` VALUES ('10', 'Drinks_&_Coffee', 'Small_Coca-Cola', '220', '0', '0', '0', '0', '55', '60', '0', '60', '0', 'small_coca-cola', '1', null, '2025-02-03 10:39:48', null);
INSERT INTO `food_bk` VALUES ('11', 'Drinks_&_Coffee', 'Medium_Coca-Cola', '330', '0', '0', '0', '0', '80', '90', '0', '90', '0', 'medium_coca-cola', '1', null, '2025-02-03 10:40:06', null);
INSERT INTO `food_bk` VALUES ('12', 'Drinks_&_Coffee', 'Large_Coca-Cola', '430', '0', '0', '0', '0', '105', '116', '0', '116', '0', 'large_coca-cola', '1', null, '2025-02-03 10:40:21', null);
INSERT INTO `food_bk` VALUES ('13', 'Drinks_&_Coffee', 'Value_Diet_Coke', '0', '0', '0', '0', '0', '45', '0', '0', '0', '0', 'value_diet_coke', '1', null, '2025-02-03 10:41:02', null);
INSERT INTO `food_bk` VALUES ('14', 'Flame_Grilled_Burgers', 'Game_Day_Pretzel_Whopper-registered', '870', '47', '19.5', '1', '130', '1,780', '67', '2', '9', '44', 'game_day_pretzel_whopper-registered', '1', null, '2025-02-03 12:10:56', null);
INSERT INTO `food_bk` VALUES ('15', 'Flame_Grilled_Burgers', 'Whopper', '670', '41', '12.1', '0.2', '85.1', '1,170.3', '54', '3.2', '13.5', '31.5', 'whopper', '1', null, '2025-02-03 12:12:07', null);
INSERT INTO `food_bk` VALUES ('16', 'Flame_Grilled_Burgers', 'Triple_Whopper', '1,170', '80', '27.1', '1.5', '235.1', '1,300.3', '56', '3.2', '13.5', '72.5', 'triple_whopper', '1', null, '2025-02-05 11:26:04', null);
INSERT INTO `food_bk` VALUES ('17', 'Flame_Grilled_Burgers', 'Texas_Double_Whopper', '1,090', '75', '25.1', '2', '195.1', '2,050.3', '56.5', '3.6', '12.2', '61.4', 'texas_double_whopper', '1', null, '2025-02-05 11:31:09', null);
INSERT INTO `food_bk` VALUES ('18', 'Flame_Grilled_Burgers', 'Classic_Melt', '600', '36.1', '16', '1.4', '95', '960', '41.3', '3.4', '12.2 11.1', '30.4', 'classic_melt', '1', null, '2025-02-05 11:31:48', null);
INSERT INTO `food_bk` VALUES ('19', 'Sides', 'Large_French_Fries', '440', '21', '3', '0', '0', '320', '64', '5', '1', '5', 'large_french_fries', '1', null, '2025-02-05 11:42:11', null);
INSERT INTO `food_bk` VALUES ('20', 'Sides', 'Pickle_Fries', '380', '21', '5', '0', '0', '2,280', '41', '3', '0', '7', 'pickle_fries', '1', null, '2025-02-05 11:43:09', null);
INSERT INTO `food_bk` VALUES ('21', 'Sides', 'Large_Onion_Rings', '24', '4', '0', '0', '950', '2,280', '70', '7', '7', '7', 'large_onion_rings', '1', null, '2025-02-05 11:49:44', null);
INSERT INTO `food_bk` VALUES ('22', 'Sweets', '4_Pc._Churro_Fries', '150', '9', '3', '0', '10', '130', '17', '0', '5', '1', '4_pc._churro_fries', '1', null, '2025-02-05 11:51:36', null);
INSERT INTO `food_bk` VALUES ('23', 'Sweets', 'Classic_Oreo-registered_Shake', '640', '17', '10', '0.5', '55', '460', '109', '1', '86', '13', 'classic_oreo-registered_shake', '1', null, '2025-02-05 11:52:19', null);
INSERT INTO `food_bk` VALUES ('24', 'Flame_Grilled_Burgers', 'BBQ_Bacon_Whopper_Jr.', '392.2', '24', '7', '0', '50', '730', '32.7', '2.3', '9.2', '13 a18.2', 'bbq_bacon_whopper_jr.', '1', null, '2025-02-11 11:24:21', null);
INSERT INTO `food_bk` VALUES ('25', 'Flame_Grilled_Burgers', 'Hamburger', '250', '10', '4', '0', '30', '560', '29', '1.1', '7.1', '13.1', 'hamburger', '1', null, '2025-02-17 11:23:28', null);
INSERT INTO `food_bk` VALUES ('26', 'Flame_Grilled_Burgers', 'Rodeo_Burger', '340', '13.1', '4.5', '0.2', '35.2', '500', '41.2', '2.1', '10', '16', 'rodeo_burger', '1', null, '2025-02-17 11:24:43', null);
INSERT INTO `food_bk` VALUES ('27', 'Chicken_&_Fish', 'Honey_Mustard_Flame-Grilled_Chicken_Wrap', '230', '9', '2', '0', '45', '640', '24', '1', '5', '17', 'honey_mustard_flame-grilled_chicken_wrap', '1', null, '2025-02-17 11:25:42', null);
INSERT INTO `food_bk` VALUES ('28', 'Breakfast', 'Small_Hash_Browns', '290', '19', '3.5', '0', '0', '840', '29', '2', '0', '2', 'small_hash_browns', '1', null, '2025-02-19 11:50:08', null);

-- ----------------------------
-- Table structure for food_type
-- ----------------------------
DROP TABLE IF EXISTS `food_type`;
CREATE TABLE `food_type` (
  `id_food_type` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `food_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(2) NOT NULL,
  `created_at` timestamp NOT NULL,
  `update_at` timestamp NULL DEFAULT NULL,
  `delete_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_food_type`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of food_type
-- ----------------------------
INSERT INTO `food_type` VALUES ('1', 'Breakfast', 'breakfast_ty', '1', '2025-01-27 12:34:35', null, null);
INSERT INTO `food_type` VALUES ('2', 'Flame_Grilled_Burgers', 'flame_grilled_burgers_ty', '1', '2025-01-31 10:23:51', null, null);
INSERT INTO `food_type` VALUES ('3', 'Chicken_&_Fish', 'chicken_&_fish_ty', '1', '2025-01-31 10:24:30', null, null);
INSERT INTO `food_type` VALUES ('4', 'Sides', 'sides_ty', '1', '2025-01-31 10:25:29', null, null);
INSERT INTO `food_type` VALUES ('5', 'Drinks_&_Coffee', 'drinks_&_coffee_ty', '1', '2025-01-31 10:25:47', null, null);
INSERT INTO `food_type` VALUES ('6', 'Sweets', 'sweets_ty', '1', '2025-01-31 10:26:09', null, null);

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
