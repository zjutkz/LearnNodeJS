// var axios = require("axios")
//
// axios.get('http://127.0.0.1:8081')
//     .then(function (response) {
//         console.log(response.data);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });
//
// axios.get('http://127.0.0.1:8081/del_user/1.0')
//     .then(function (response) {
//         console.log(response.data);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

//================================================

//如果server没有使用多进程的架构，则多个请求会阻塞(server用express/express.js)
//如果server用了多进程架构，则多个请求之间不会阻塞(server用multiprocess/cluster.js)
//特别需要注意的是如果在同一台机器上，连续请求同一个url，则不管使用的是多进程架构也好，
//或者两个url在不同的端口也好，都是会阻塞的！

var http = require("http");

function getData(port,path) {
    const options = {
        hostname:"localhost",
        port:port,
        path:path,
        method: 'GET',
    };

    return new Promise(function (resolve, reject) {
        var data;

        var req = http.request(options,function(res){
            res.setEncoding('utf-8');
            res.on('data',function(chunk){var http = require("http");
                data = chunk
            });
            res.on('end',function(){
                resolve(data)
            });
        });

        req.end();
    })
}

function getDataWithCallback(port,path, callback) {
    const options = {
        hostname:"localhost",
        port:port,
        path:path,
        method: 'GET',
    };

    var data;

    var req = http.request(options,function(res){
        res.setEncoding('utf-8');
        res.on('data',function(chunk){
            console.log("on data:" + chunk)
            data = chunk
        });
        res.on('end',function(){
            callback(data)
        });
        res.on("error",function (err) {
            reject(err)
        })

    });

    req.end();
}

async function get(port,path) {
    var data = await getData(port,path)
    console.log(data)
}

function getWithCallback(port, path, callback) {
    getDataWithCallback(port, path, function (data) {
        callback(data)
    })
}


get(8080, "/delay")
get(8080, "/notDelay")
//get("/del_user/1.0")
