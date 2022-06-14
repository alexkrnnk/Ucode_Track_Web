USE ucode_web;

SELECT heroes.id, heroes.name, heroes_powers.power_points 
FROM heroes LEFT OUTER JOIN heroes_powers
ON heroes.id = heroes_powers.hero_id GROUP BY heroes.id ORDER BY heroes_powers.power_points DESC LIMIT 1;

SELECT heroes.id, heroes.name, min(heroes_powers.power_points), powers.type
FROM heroes 
LEFT OUTER JOIN heroes_powers
ON heroes.id = heroes_powers.hero_id 
LEFT OUTER JOIN powers
ON heroes.id = powers.id WHERE powers.type = "defense";

SELECT heroes.id, heroes.name, teams.name, heroes_powers.power_points
FROM heroes
JOIN heroes_powers
ON heroes.id = heroes_powers.hero_id
JOIN teams
ON heroes.id = teams.id WHERE teams.name = 'Avengers' ORDER BY heroes_powers.power_points;

SELECT teams.name, SUM(heroes_powers.power_points) AS points
FROM heroes
JOIN heroes_powers ON heroes_powers.hero_id = heroes.id
JOIN teams ON teams.id = heroes.id GROUP BY teams.name ORDER BY points;

