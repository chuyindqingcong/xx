var Index = require('../app/cont/index');
var Movie = require('../app/cont/Movie');

module.exports=function(app){
	app.get('/',Index.index)
	//movie
	app.get('/mover/list',Movie.list);
	app.get('/mover/new',Movie.new);
	app.get('/mover/update/',Movie.update);
	app.post('/movie/admin',Movie.add);
}