CREATE TABLE usuarios(
	Id int primary key AUTO_INCREMENT,
    username varchar(100) not null,
    password varchar(100) not null
);

CREATE TABLE equipo(
	Id int primary key AUTO_INCREMENT,
    name varchar(100) not null,
    leage varchar(150) not null,
    country varchar(100) not null
);
CREATE TABLE futbolista(
	Id int primary key AUTO_INCREMENT,
    name varchar(100) not null,
    age int not null,
    team_id int,
    squad_number int not null,
    position varchar(50) not null,
    nationality varchar(100) not null,  
    FOREIGN KEY (team_id) REFERENCES equipo(Id)
);

INSERT INTO usuarios(username,password) VALUES ('admin','admin');