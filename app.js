//加载模块
var express = require('express');	//express模快
var path = require('path'); //路径
var app = express();//express实例化
var serverStatic = require('serve-static'); //静态资源
var bodyParser = require('body-parser');//解析内容

//设定静态资源
app.use(serverStatic('public'));

app.set('views','./app/views/pages');//设定模板目录
app.set('view engine','ejs')//设定模板为ejs
app.use(bodyParser.urlencoded());//解析客户端请求的body中的内容,内部使用JSON编码处理,url编码处理以及对于文件的上传处理.
app.listen(3000);//端口号为3000

require('./confi/routes')(app);
console.log('port:3000')