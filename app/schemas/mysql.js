var mysql = require ('mysql');

var conn=mysql.createConnection({
	host:'192.168.2.211',
	user:'root',
	password:'feiliuZhixia3kchi',
	database:'xxx',
	port:'3306'
});
module.exports=conn