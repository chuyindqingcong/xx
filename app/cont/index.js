var mysql = require('./../schemas/mysql');
exports.index = function(req,res){
	
		var xx='select * from xx';
		mysql.query(xx,function(err,movie){
			if(err) console.log(err);
			res.render('index',{
				title:'首页',
				movie:movie
			})
		})
	
}