CREATE DATABASE ucode_web;

CREATE USER 'okorniienk'@'localhost' IDENTIFIED BY 'securepass';
GRANT ALL PRIVILEGES ON ucode_web . * TO 'okorniienk'@'localhost';

