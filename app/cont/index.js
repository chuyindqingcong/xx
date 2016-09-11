var mysql = require('./../schemas/mysql');
exports.index = function(req,res){
		var xx='select * from xx LIMIT 15';
		var list = 'SELECT * FROM sock';
		mysql.query(list,function(err,lists){
			if(err) console.log(err);
			mysql.query(xx,function(err,movie){
				if(err) console.log(err);
				res.render('index',{
					title:'首页',
					movie:movie,
					sock:lists
				})
			})	
		})
	
}