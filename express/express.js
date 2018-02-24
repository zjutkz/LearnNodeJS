//express koa2 还得深入学习才是！
//它们的中间件思想感觉挺好的，不过有一些不灵活就是了

var express = require('express');
var app = express();
var http = require("http");
const child_process = require('child_process');

//模拟直出的思想，localhost:9999是一个java的服务，浏览器输入localhost:8080
//node中间层去localhost:9999进行数据，然后展示。
//https://cloud.tencent.com/developer/article/1004935
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.get('/', function (request, response) {
    console.log("主页 GET 请求");

    const options = {
        hostname:"localhost",
        port:9999,
        path:"/product/list",
        method: 'GET',
    };

    var req = http.request(options,function(res){
        res.setEncoding('utf-8');
        res.on('data',function(chunk){
            var products = JSON.parse(chunk);
            response.render('index', {
                products: products
            });
            response.end();
        });
        res.on('end',function(){
            console.log('响应结束********');
        });
    });

    req.on('error',function(err){
        console.error(err);
    });

    req.end();
});


//  POST 请求
app.post('/', function (req, res) {
    console.log("主页 POST 请求");
    res.send('Hello POST');
});

//  /del_user 页面响应
app.get('/del_user/1.0', function (req, res) {
    console.log("/del_user 响应 DELETE 请求");
    res.send('删除页面1.0');
});
app.get('/del_user/2.0', function (req, res) {
    console.log("/del_user 响应 DELETE 请求");
    res.send('删除页面2.0');
});

//通过子进程的方式去做一些回调里的耗时操作
//static中间件，可以直接引用静态资源(不过好像用了这个中间件，就不会进入callback了)
app.use('/list_user', express.static(__dirname + '/www'));
//var delayer = require("./delay");

//  /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
    //res.send("please wait....");

    //delayer.delay(res);

    var subProcess = child_process.fork('delay.js', 0);
    subProcess.on('exit',function (code) {
        console.log("子进程已经退出 " + code) //打印退出码
    });

    res.send("hello world");
    console.log("/list_user GET 请求");
});

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {
    console.log("/ab*cd GET 请求");
    res.send('正则匹配');
});


var server = app.listen(8081, function () {
    console.log("服务已启动");
});