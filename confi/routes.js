var Index = require('../app/cont/index');
var Movie = require('../app/cont/Movie');
var User = require('../app/cont/User')
module.exports=function(app){
	//预处理
	app.use(function(req,res,next){
		var _user = req.session.user;
		if(_user){
			res.locals.user=_user[0];
		}
		return next();
	})
	app.get('/',Index.index)
	//movie
	app.get('/mover/list',User.signinRequired,Movie.list);
	app.get('/mover/new',User.signinRequired,Movie.new);
	app.get('/mover/update/',User.signinRequired,Movie.update);
	app.post('/mover/admin',User.signinRequired,Movie.add);
	app.post('/mover/list',User.signinRequired,Movie.lists);
	//user
	app.get('/user/new',User.new);
	app.post('/user/zc',User.zc);
	app.get('/user/login',User.login);
	app.post('/user/dl',User.dl);
	app.get('/user/logout',User.zx);

}