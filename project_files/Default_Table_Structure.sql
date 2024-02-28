USE foo_test;

CREATE TABLE `notebooks` (
	`id` BINARY(16) NOT NULL DEFAULT (UUID_TO_BIN(UUID())) PRIMARY KEY,
    `name` VARCHAR(20) UNIQUE NOT NULL,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
INSERT INTO `notebooks`(`name`) VALUES ('All Notes');

CREATE TABLE `groups` (
	`id` BINARY(16) NOT NULL DEFAULT (UUID_TO_BIN(UUID())) PRIMARY KEY,
    `name` VARCHAR(20) NOT NULL,
    `notebookId` BINARY(16) NOT NULL,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (`notebookId`) REFERENCES `notebooks`(`id`)
);
INSERT INTO `groups`(`name`,`notebookId`) VALUES ('Welcome Group',UUID_TO_BIN('f5e3c8eb-d5ef-11ee-ac7e-40167e72e3ed'));

CREATE TABLE `subjects` (
	`id` BINARY(16) NOT NULL DEFAULT (UUID_TO_BIN(UUID())) PRIMARY KEY,
    `name` VARCHAR(20) UNIQUE NOT NULL,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
INSERT INTO `subjects`(`name`) VALUES ('Welcome Subject');

CREATE TABLE `statuses` (
	`id` BINARY(16) NOT NULL DEFAULT (UUID_TO_BIN(UUID())) PRIMARY KEY,
    `name` VARCHAR(20) UNIQUE NOT NULL,
    `color` VARCHAR(9) NOT NULL,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
INSERT INTO `statuses`(`name`,`color`) VALUES ('Active', '#5599ff'),('On Hold', '#cccccc'),('On Going', '#ff9955'),('Completed', '#55ff55'),('Dropped', '#ff5555');

CREATE TABLE `tags` (
	`id` BINARY(16) NOT NULL DEFAULT (UUID_TO_BIN(UUID())) PRIMARY KEY,
    `name` VARCHAR(20) UNIQUE NOT NULL,
    `color` VARCHAR(9) NOT NULL,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
INSERT INTO `tags`(`name`,`color`) VALUE ('Welcome', '#ff9955'),('EverywhereInk', '#5599ff');

CREATE TABLE `pages` (
	`id` BINARY(16) NOT NULL DEFAULT (UUID_TO_BIN(UUID())) PRIMARY KEY,
    `name` VARCHAR(32) NOT NULL,
    `notebookId` BINARY(16) NOT NULL,
    `groupId` BINARY(16),
    `subjectId` BINARY(16),
    `statusId` BINARY(16),
    `markdownText` MEDIUMTEXT,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (`notebookId`) REFERENCES `notebooks`(`id`),
    FOREIGN KEY (`groupId`) REFERENCES `groups`(`id`),
    FOREIGN KEY (`subjectId`) REFERENCES `subjects`(`id`),
    FOREIGN KEY (`statusId`) REFERENCES `statuses`(`id`)
);
INSERT INTO `pages`(`name`,`notebookId`,`groupId`,`subjectId`,`statusId`,`markdownText`) VALUES ('Welcome To EverywhereInk',UUID_TO_BIN('f5e3c8eb-d5ef-11ee-ac7e-40167e72e3ed'),UUID_TO_BIN('12aeede6-d623-11ee-87ff-40167e72e3ed'),UUID_TO_BIN('bf7ddc65-d623-11ee-87ff-40167e72e3ed'),UUID_TO_BIN('f6e1fbb3-d5ef-11ee-ac7e-40167e72e3ed'),'# Welcome All');

CREATE TABLE `pagestotags` (
	`id` BINARY(16) NOT NULL DEFAULT (UUID_TO_BIN(UUID())) PRIMARY KEY,
	`pageId` BINARY(16) NOT NULL,
    `tagId` BINARY(16) NOT NULL,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (`pageId`) REFERENCES `pages`(`id`),
    FOREIGN KEY (`tagId`) REFERENCES `tags`(`id`)
);
INSERT INTO `pagestotags`(`pageId`,`tagId`) VALUES (UUID_TO_BIN('eb02a552-d624-11ee-87ff-40167e72e3ed'),UUID_TO_BIN('95f65a41-d626-11ee-87ff-40167e72e3ed'));