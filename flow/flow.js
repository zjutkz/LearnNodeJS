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