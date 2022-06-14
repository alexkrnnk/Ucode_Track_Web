USE ucode_web;

CREATE TABLE heroes(
	id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL UNIQUE,
    description TEXT NOT NULL,
    class_role ENUM('tankman', 'healer', 'dps') NOT NULL
);

