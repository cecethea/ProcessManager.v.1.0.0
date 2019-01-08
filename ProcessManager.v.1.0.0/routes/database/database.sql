
CREATE DATABASE 20190104_preocess_master;


CREATE TABLE `process_master` (
	`id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
	`code` INT(11) UNSIGNED NOT NULL DEFAULT '0',
	`name` VARCHAR(255) NOT NULL DEFAULT '0',
	INDEX `id` (`id`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB

INSERT INTO process_master (code,name)
VALUES (00001223,cece);