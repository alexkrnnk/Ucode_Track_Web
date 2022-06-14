USE ucode_web;

SELECT heroes.id, heroes.name, teams.name FROM heroes LEFT OUTER JOIN teams ON (heroes.id = teams.id);

SELECT heroes.id, heroes.name, powers.name, powers.type FROM heroes LEFT OUTER JOIN powers ON (heroes.id = powers.id);

SELECT heroes.id, heroes.name, powers.name, teams.name FROM heroes INNER JOIN teams ON heroes.id = teams.id INNER JOIN powers ON heroes.id = powers.id;

