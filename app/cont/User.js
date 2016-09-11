var mysql = require('./../schemas/mysql');

exports.new = function(req,res){
	res.render('userNew',{title:'注册'})
}
exports.zc = function(req,res){
	var user = req.body;
	console.log(user.user);
	var find = 'SELECT * FROM user WHERE user="'+user.user+'";';
	mysql.query(find,function(err,mover){
		if(err) console.log(err);
		if(mover.length>0){
			res.send('1');
		}else{
			var save = 'INSERT INTO user (user ,password ,purview) VALUES ("'+user.user+'","'+user.password+'","0");';
			mysql.query(save,function(err,mover){
				if(err) console.log(err);
				res.send('0')
			})
		}
	})
	//var save = 'INSERT INTO user (user ,password ,purview) VALUES ("'+user.user+'","'+user.password+'","'0'");'
}
exports.login = function(req,res){
	res.render('userLogin',{title:'登录'})
}
exports.dl = function(req,res){
	var user = req.body;
	var find = 'SELECT * FROM user WHERE user="'+user.user+'" and password="'+user.password+'";';
	mysql.query(find,function(err,mover){
		if(err) console.log(err);
		if(mover.length>0){
			req.session.user=mover;
			res.send('0');
		}else{
			res.send('1')
		}
	})
}
exports.zx = function (req,res) {
	delete req.session.user;
	res.redirect('/')
}

exports.signinRequired = function(req,res,next){
	var user = req.session.user;
	if(!user){
		return res.redirect('/user/login');
	}
	next();
}
exports.adminRequired = function(req,res,next){
	var user = req.session.user;
	if(user.purview<5){
		return res.redirect('/user/login');
	}
	next();
}