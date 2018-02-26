//http://www.cnblogs.com/hustskyking/p/websocket-with-node.html

var crypto = require('crypto');
var util = require("./util");
var WS = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
require('net').createServer(function(o){
    var key;
    o.on('data',function(e){
        var frame=util.decode(e);
        if(frame.Opcode === 8){
            console.log("receive client close msg...")
            o.end();
        }else if(!key){
            //握手
            key = e.toString().match(/Sec-WebSocket-Key: (.+)/)[1];
            key = crypto.createHash('sha1').update(key + WS).digest('base64');
            o.write('HTTP/1.1 101 Switching Protocols\r\n');
            o.write('Upgrade: websocket\r\n');
            o.write('Connection: Upgrade\r\n');
            //ws的在握手过程中会校验Sec-WebSocket-Key和Sec-WebSocket-Accept的值
            //如果校验不通过，则握手失败。
            o.write('Sec-WebSocket-Accept: ' + key + '\r\n');
            o.write('\r\n');
        }else{
            console.log(util.decode(e));
            o.write(util.encode({
                FIN:1,
                Opcode:1,
                PayloadData:'send from server...'
            }))
            setTimeout(function () {
                o.close()
            },3000)

        };
    });
}).listen(8000);