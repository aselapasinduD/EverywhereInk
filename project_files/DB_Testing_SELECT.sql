USE foo_test;

SELECT * FROM `notebooks` ORDER BY `created_at` ASC;
SELECT BIN_TO_UUID(`id`) FROM `notebooks` ORDER BY `created_at` ASC;
SELECT * FROM `groups` ORDER BY `created_at` ASC;
SELECT * FROM `subjects` ORDER BY `created_at` ASC;
SELECT BIN_TO_UUID(`id`) FROM `statuses` ORDER BY `created_at` ASC;
SELECT BIN_TO_UUID(`id`) FROM `tags` ORDER BY `created_at` ASC;
SELECT BIN_TO_UUID(`id`) FROM `pages` ORDER BY `created_at` ASC;
