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

var http = require("http");

function getData(path) {
    const options = {
        hostname:"localhost",
        port:8081,
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

function getDataWithCallback(path, callback) {
    const options = {
        hostname:"localhost",
        port:8081,
        path:path,
        method: 'GET',
    };

    var data;

    var req = http.request(options,function(res){
        res.setEncoding('utf-8');
        res.on('data',function(chunk){var http = require("http");
            data = chunk
        });
        res.on('end',function(){
            callback(data)
        });
    });

    req.end();
}

async function get(path) {
    var data = await getData(path)
    console.log(data)
}

function getWithCallback(path, callback) {
    getDataWithCallback(path, function (data) {
        callback(data)
    })
}

// get("/")
// get("/del_user/1.0")
getWithCallback("/", function (data) {
    console.log(data)
})
getWithCallback("/del_user/1.0", function (data) {
    console.log(data)
})