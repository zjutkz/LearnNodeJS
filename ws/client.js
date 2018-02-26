var WebSocket = require('ws')
var util = require("./util")

var ws=new WebSocket("ws://127.0.0.1:8000");

ws.onopen = function(){
    ws.send("握手成功");
};

ws.onmessage = function (res) {
    console.log(res.data)
    // setTimeout(function () {
    //     ws.close();
    // },3000)
}

ws.onclose = function () {
    console.log("receive server close msg...")
}

ws.onerror=function (e) {
    console.log(e)
}