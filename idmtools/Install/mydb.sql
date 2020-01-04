create user 'administrator'@'localhost' identified by 'administrator';
grant all on radius.* to 'administrator'@'localhost' identified by 'administrator';
grant all on *.* to 'administrator'@'localhost' identified by 'administrator';
flush privileges;
