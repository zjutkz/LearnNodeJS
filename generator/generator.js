//node里竟然也有generator！！！还好py里也有，学起来也不算困难，不过py里基本都是配合协程一起使用的
//网上看到很多文章都说generator是用来解决异步编程的，个人感觉有点小看它的作用了，它的作用远不止于此。


// var compute = function* (a, b) {
//     var sum = a + b;
//     yield console.log(sum);
//     var c = a - b;
//     yield console.log(c);
//     var d = a * b;
//     yield console.log(d);
//     var e = a / b;
//     console.log(e);
// };
//
// var generator = compute(4, 2);
//
// generator.next();
// generator.next();
// generator.next();
// generator.next();

//=================================================

// var compute = function* (a, b) {
//     var foo = yield a + b;
//     console.log(foo);
// };
//
// var generator = compute(4, 2);
// generator.next();
// generator.next("Hello world!");

//=================================================

// var fs = require("fs");
// var textEncoding = require('text-encoding');
// var TextDecoder = textEncoding.TextDecoder;
//
// fs.readFile('file1', 'utf8', function (err, txt) {
//     console.log("calback: ");
//     console.log(txt)
// });
//
// var flow = function* () {
//     yield fs.readFileSync('file1');
//     yield fs.readFileSync('file2');
// };
//
// var generator = flow();
// var txt1 = generator.next().value;
// var txt2 = generator.next().value;
// console.log(new TextDecoder("utf-8").decode(txt1));
// console.log(new TextDecoder("utf-8").decode(txt2));

//=================================================

// var fs = require("fs");
//
// var co = function (flow) {
//     var generator = flow();
//     var next = function (data) {
//         var result = generator.next(data);
//         if (!result.done) {
//             result.value(function (err, data) {
//                 if (err) {
//                     throw err;
//                 }
//                 next(data);
//             });
//         }
//     };
//     next();
// };
//
// co(function* () {
//     var txt = yield fs.readFile('file1', 'utf8');
//     console.log(txt);
//     var txt2 = yield fs.readFile('file2', 'utf8');
//     console.log(txt2);
// });

//=================================================

//var fs = require("fs");
//
// fs.readFile("file1","utf-8",function(err, txt1) {
//     fs.readFile("file2","utf-8",function(err, txt2) {
//         console.log(txt1 + " " + txt2);
//     })
// });
//

//yield之后会被await代替，这个需要注意！

//var co = require("co");
// function read(fileName) {
//     return new Promise(function (resolve, reject) {
//         fs.readFile(fileName,"utf-8",function(err, data) {
//             console.log(fileName + ": " + data);
//             resolve(data);
//         });
//     });
// }
//
// var flow = function* () {
//     yield read("file1");
//     yield read("file2");
// };
//
// co(flow());

//=================================================

// var fs = require("fs");
//
// function readSync(milliSeconds) {  // 模拟卡顿
//     var startTime = new Date().getTime();
//     while (new Date().getTime() < startTime + milliSeconds);
//     return fs.readFileSync("file1","utf-8");
// }
//
//
// function readAsync(milliSeconds) {  // 模拟卡顿
//     fs.readFile("file1","utf8",function (err,txt) {
//         var startTime = new Date().getTime();
//         while (new Date().getTime() < startTime + milliSeconds);
//         console.log(txt);
//     });
// }
//
// console.log("start.....");
// readAsync(3000);
// console.log("end.....");

//=================================================
