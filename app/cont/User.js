var mysql = require('./../schemas/mysql');

exports.new = function(req,res){
	res.render('userNew',{title:'注册'})
}
exports.zc = function(req,res){
	var user = req.body;
	var find = 'sel'
	mysql.query(find,function(err){
		if(err)
	})
	var save = 'INSERT INTO user (user ,password ,purview) VALUES ("'+user.user+'","'+user.password+'","'0'");'
}