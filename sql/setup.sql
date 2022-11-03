-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS dnd_classes;

CREATE TABLE dnd_classes (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    hit_dice INT NOT NULL
);

INSERT INTO dnd_classes (name, hit_dice) 
VALUES 
('Barbarian', 12),
('Bard', 8),
('Cleric', 8),
('Druid', 8),
('Fighter', 10),
('Monk', 8),
('Paladin', 10),
('Ranger', 10),
('Rogue', 8),
('Sorcerer', 6),
('Warlock', 8),
('Wizard', 6),
('Artificer', 8);

DROP TABLE IF EXISTS harry_potter_houses;

CREATE TABLE harry_potter_houses (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    color VARCHAR NOT NULL
);

INSERT INTO harry_potter_houses (name, color)
VALUES
('Gryffindor', 'Maroon'),
('Ravenclaw', 'Blue'),
('Hufflepuff', 'Yellow'),
('Slytherin', 'Green');

