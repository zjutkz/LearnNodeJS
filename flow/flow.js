//涉及nodeJS的Event loop机制，浏览器和node里还不一样，坑爹！！
//同样是event 还有macro task和micro task之分 学到了。。
//https://github.com/dwqs/blog/issues/61

console.log(1);

setTimeout(() => {
    console.log(2);
    new Promise(resolve => {
        console.log(4);
        resolve()
    }).then(() => {
        console.log(5)
    })
});

new Promise(resolve => {
    console.log(7);
    resolve()
}).then(() => {
    console.log(8)
});

setTimeout(() => {
    console.log(9);
    new Promise(resolve => {
        console.log(11);
        resolve()
    }).then(() => {
        console.log(12)
    })
},2);


//node版本不同对执行顺序有不一样的修改
//https://www.jianshu.com/p/837b584e1bdd
//http://www.ruanyifeng.com/blog/2018/02/node-event-loop.html
//下面的代码会按照task队列的形式走，既timer队列和check队列走完，才会切换到microTask

// process.nextTick(function () {
//     console.log(1)
// })
//
// process.nextTick(function () {
//     console.log(2)
// })
//
// setTimeout(function () {
//     console.log(10)
// },0)
//
// setImmediate(function () {
//     console.log(3)
//     process.nextTick(function () {
//         console.log(4)
//     })
// })
//
// setImmediate(function () {
//     console.log(5)
// })
//
// setTimeout(function () {
//     console.log(9)
// },0)
//
// setImmediate(function () {
//     console.log(6)
// })
//
// setTimeout(function () {
//     console.log(8)
// },0)
//
// console.log(11)