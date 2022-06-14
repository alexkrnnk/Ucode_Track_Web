USE ucode_web;

CREATE TABLE IF NOT EXISTS powers(
    id INT(6) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    type ENUM('attack', 'defense') NOT NULL
);

CREATE TABLE IF NOT EXISTS heroes_powers(
    hero_id INT(6) NOT NULL,
    power_id INT(6) NOT NULL,
    power_points INT NOT NULL,
    FOREIGN KEY (hero_id) REFERENCES heroes(id) ON DELETE CASCADE,
    FOREIGN KEY (power_id) REFERENCES powers(id) ON DELETE CASCADE
);

ALTER TABLE heroes ADD race_id INT(6) NOT NULL;

CREATE TABLE IF NOT EXISTS races(
    id INT(6) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name ENUM('Human', 'Kree') NOT NULL
);

CREATE TABLE IF NOT EXISTS teams(
    id INT(6) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name ENUM('Avengers', 'Hydra') NOT NULL
);

CREATE TABLE IF NOT EXISTS heroes_teams(
    id INT(6) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    hero_id INT(6) NOT NULL,
    team_id INT(6) NOT NULL,
    FOREIGN KEY (hero_id) REFERENCES heroes(id) ON DELETE CASCADE,
	FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE
);
