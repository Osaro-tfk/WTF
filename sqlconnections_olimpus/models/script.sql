create database OlimpusCars;
use OlimpusCars;
create table showRoom(
Make varchar(20),
Model varchar(20),
CarYear date,
Colour varchar(20),
regNumber char(50),
carPhotoLink char
);
select * from  showroom;
alter table showroom modify column CarYear int;
insert into showroom(Make,Model,CarYear,Colour,regNumber,CarPhotoLink) values("Range Rover","Sport",1993,"Black","166327847","t");