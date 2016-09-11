var mysql = require('./../schemas/mysql');
//var save = 'UPDATE xx SET name='+movie.name+',size='+movie.size+',img='+movie.size+',author='+movie.author+' WHERE id='+movie.id+';';
exports.new = function(req,res) {
	var save = 'SELECT * FROM sock';
	mysql.query(save,function(err,lists){
		if(err) console.log(err);
		res.render('moverNew',{
			title:'新增页面',
			name:"",
			size:"",
			id:"",
			author:"",
			img:"",
			lists:lists
		})
	})
}
exports.list = function(req,res) {
	var find = 'SELECT * FROM xx';
	mysql.query(find,function(err,movie){
		if(err) console.log(err);
		res.render('moverList',{
			title:'列表页面',
			movie:movie
		})
	})

}
exports.update = function(req,res) {
	var a=req.query;
	var id = a.id;
	if(id){
		var find = 'SELECT * FROM xx WHERE id='+id+';';
		var list = 'SELECT * FROM sock';
		mysql.query(list,function(err,lists){
			if(err) console.log(err);
			mysql.query(find,function(err,movie){
				if(err) console.log(err);
				console.log(movie)
				res.render('moverNew',{
					title:'更新页面',
					id:id,
					name:movie[0].name,
					size:movie[0].size,
					img:movie[0].img,
					author:movie[0].author,
					sock:movie[0].sock,
					lists:lists
				})
			})
		})
	}
}
exports.add = function(req,res) {
	var id = req.body.id;
	var movie = req.body;
	var save="";
	if(id>=1){
		save = 'UPDATE xx SET name="'+movie.name+'",size="'+movie.size+'",img="'+movie.img+'",author="'+movie.author+'",sock="'+movie.sock+'" WHERE id="'+movie.id+'";';
	}else{
		save = 'INSERT INTO xx (name ,author ,size,img, sock) VALUES ("'+movie.name+'","'+movie.author+'","'+movie.size+'","'+movie.img+'","'+movie.sock+'");';
	}
	mysql.query(save,function(err){
			if(err) console.log(err);
			res.redirect('/')
		})
}