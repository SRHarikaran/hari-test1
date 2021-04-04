CREATE TABLE `hari_db_1`.`products` (
  `id` INT NOT NULL,
  `name` VARCHAR(128) NULL,
  `decription` VARCHAR(255) NULL,
  `quantity` INT NULL,
  `image` VARCHAR(255) NULL,
  `price` VARCHAR(32) NULL,
  PRIMARY KEY (`id`));

INSERT INTO `hari_db_1`.`products` 
(`name`, `decription`, `quantity`, `image`, `price`) VALUES
('Phone', 'Some random phone description', '25', '', '15,000');
