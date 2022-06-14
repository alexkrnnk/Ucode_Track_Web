USE ucode_web;

SELECT heroes.id, heroes.name, teams.name, races.name FROM heroes
JOIN teams ON heroes.id = teams.id
JOIN races ON heroes.id = races.id WHERE races.name != 'Human' AND (heroes.class_role = 'tankman' OR heroes.class_role = 'healer') 
AND heroes.name LIKE '%a%' GROUP BY  heroes.id HAVING COUNT(teams.id) > 1 ORDER BY heroes.id DESC LIMIT 1;