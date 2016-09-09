var Index = require('../app/cont/index');
var Movie = require('../app/cont/Movie');
var User = require('../app/cont/User')
module.exports=function(app){
	app.get('/',Index.index)
	//movie
	app.get('/mover/list',Movie.list);
	app.get('/mover/new',Movie.new);
	app.get('/mover/update/',Movie.update);
	app.post('/mover/admin',Movie.add);
	//user
	app.get('/user/new',User.new)
	app.post('/user/zc',User.zc)

}