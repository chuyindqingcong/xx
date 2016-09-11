var mysql = require('./../schemas/mysql');
//var save = 'UPDATE xx SET name='+movie.name+',size='+movie.size+',img='+movie.size+',author='+movie.author+' WHERE id='+movie.id+';';
exports.new = function(req,res) {
	res.render('moverNew',{
		title:'新增页面',
		name:"",
		size:"",
		id:"",
		author:"",
		img:""
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

		mysql.query(find,function(err,movie){
			if(err) console.log(err);
			res.render('moverNew',{
				title:'更新页面',
				id:id,
				name:movie[0].name,
				size:movie[0].size,
				img:movie[0].img,
				author:movie[0].author
			})
		})
	}
}
exports.add = function(req,res) {
	console.log('aa')
	var id = req.body.id;
	var movie = req.body;
	var save="";
	if(id>=1){
		save = 'UPDATE xx SET name="'+movie.name+'",size="'+movie.size+'",img="'+movie.img+'",author="'+movie.author+'" WHERE id="'+movie.id+'";';
	}else{
		save = 'INSERT INTO xx (name ,author ,size,img) VALUES ("'+movie.name+'","'+movie.author+'","'+movie.size+'","'+movie.img+'");';
	}
	mysql.query(save,function(err){
			if(err) console.log(err);
			res.redirect('/')
		})
}