//cluster用于便捷的操作多进程，神器啊，还能用来做负载。
//http://blog.fens.me/nodejs-core-cluster/
//https://juejin.im/post/5a3890ea51882506a463bc3a

var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

var express = require('express');
var app = express();

console.log("program start...");

if (cluster.isMaster) {
    console.log('[master] ' + "start master...");

    for (var i = 0; i < numCPUs; i++) {
        var wk = cluster.fork();
        wk.send('[master] ' + 'hi worker' + wk.id);
    }

    cluster.on('fork', function (worker) {
        console.log('[master] ' + 'fork: worker' + worker.id);
    });

    cluster.on('online', function (worker) {
        console.log('[master] ' + 'online: worker' + worker.id);
    });

    cluster.on('listening', function (worker, address) {
        console.log('[master] ' + 'listening: worker' + worker.id + ',pid:' + worker.process.pid + ', Address:' + address.address + ":" + address.port);
    });

    cluster.on('disconnect', function (worker) {
        console.log('[master] ' + 'disconnect: worker' + worker.id);
    });

    cluster.on('exit', function (worker, code, signal) {
        console.log('[master] ' + 'exit worker' + worker.id + ' died');
    });

    function eachWorker(callback) {
        for (var id in cluster.workers) {
            callback(cluster.workers[id]);
        }
    }

    setTimeout(function () {
        eachWorker(function (worker) {
            worker.send('[master] ' + 'send message to worker' + worker.id);
        });
    }, 3000);

    Object.keys(cluster.workers).forEach(function(id) {
        cluster.workers[id].on('message', function(msg){
            console.log('[master] ' + 'message ' + msg);
        });
    });

} else if (cluster.isWorker) {
    console.log('[worker] ' + "start worker ..." + cluster.worker.id);

    process.on('message', function(msg) {
        console.log('[worker] '+msg);
        process.send('[worker] worker'+cluster.worker.id+' received!');
    });

    // http.createServer(function (req, res) {
    //     startTime = new Date().getTime();
    //     while (new Date().getTime() < startTime + 5000);
    //     res.writeHead(200, {"content-type": "text/html"});
    //     res.end('delay worker'+cluster.worker.id+',PID:'+process.pid);
    // }).listen(8080);

    app.get('/delay', function (request, response) {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + 5000);
        response.send("delay get")
    })
    app.get('/notDelay', function (request, response) {
        response.send("not delay get")
    })


    app.listen(8080, function () {
        console.log("服务已启动: " + cluster.worker.id+',PID:'+process.pid);
    });
}