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

// function haha(fileName) {
//     return new Promise(function (resolve, reject) {
//         fs.readFile(fileName,"utf-8",function(err, data) {
//             resolve(data);
//         });
//     });
// }
//
// async function fetch(){
//     var txt1 = await haha("file1");
//     var txt2 = await haha("file2");
//     console.log(txt1 + " " + txt2)
// }
//
// fetch()


//模拟第一个接口请求rt很大的情况
let index = 0;

function doSth(delay) {
    return new Promise(function (resolve, reject) {
        let startTime = new Date().getTime();
        //while (new Date().getTime() < startTime + delay);
        // if(delay > 100) {
        //     resolve("some value: " + ++index)
        // }else {
        //     reject("reject!")
        // }
        //resolve("result");
        setTimeout(function  () {
        resolve('result');
    },delay);
    })
}
async function test() {
    let start = Date.now();
    for(let i = 0; i < 100; i++) {
        await doSth(30);
    }
    console.log("test: " + (Date.now() - start));
}
async function testAll() {
    let start = Date.now();
    let arr = [];
    for(let i = 0; i < 100; i++) {
        arr.push(doSth(30));
    }
    await Promise.all(arr);
    console.log("testAll: " + (Date.now() - start));
}
//test();
testAll();



async function delay(delay) {
    console.log("start...");
    try {
        //let haha = await doSth(delay);
        console.log(haha)
        return {"haha": haha}
    }catch (error) {
        console.log(error)
    }
}

// delay(1)
// delay(500)

//async方法返回的是一个promise，不能直接拿返回值，要用promise的方式，或者用await

// function test() {
//     let promise = delay(500);
//     promise.then(function (data) {
//         console.log(data.haha);
//     })
// }


// async function test() {
//     let data = await delay(500);
//     console.log(data.haha);
// }

// test()



// var a = new Promise(function  (resolve,reject) {
//     console.log(1);
//     setTimeout(function  () {
//         console.log(11);
//         resolve('aaa');
//     },1000);
// });
//
// var b = new Promise(function  (resolve,reject) {
//     console.log(2);
//     setTimeout(function  () {
//         console.log(22);
//         resolve('bbb');
//     },300);
// });
//
// var p = Promise.all([a,b]);
// p.then(function(val) {
//     console.log(val);
// });