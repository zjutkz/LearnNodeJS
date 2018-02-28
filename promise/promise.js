//promise有点像Java里的RxJava，函数式编程，解决callback hell。

var fs = require("fs");

// function haha(fileName,append) {
//     return new Promise(function (resolve, reject) {
//         console.log("start... ====>" + fileName + " " + append);
//         fs.readFile(fileName,"utf-8",function(err,data) {
//             resolve(append + " " + data);
//         });
//     });
// }
//
// haha("file1","")
//     .then(txt => haha("file2",txt))
//     .then(txt => console.log(txt))
//     .catch(err => console.error('执行出错：', err));

//===========================================================================

//async和await感觉是在语法层面上解决了callback hell，代码比起一味的then then的要好看很多

function haha(fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName,"utf-8",function(err, data) {
            resolve(data);
        });
    });
}

async function fetch(){
    var txt1 = await haha("file1");
    var txt2 = await haha("file2");
    console.log(txt1 + " " + txt2)
}

fetch()