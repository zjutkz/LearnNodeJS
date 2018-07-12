//通过实现一个简单的promise去理解原理
//https://mengera88.github.io/2017/05/18/Promise%E5%8E%9F%E7%90%86%E8%A7%A3%E6%9E%90/
function CustomPromise(fn) {
    var state = 'pending',
        value = null,
        callbacks = [];
    this.then = function (onFulfilled) {
        if (state === 'pending') {
            callbacks.push(onFulfilled);
            return this;
        }
        onFulfilled(value);
        return this;
    };
    function resolve(newValue) {
        value = newValue;
        state = 'fulfilled';
        setTimeout(function () {
            callbacks.forEach(function (callback) {
                callback(value);
            });
        }, 0);
    }
    fn(resolve);
}

function test() {
    let promise = new CustomPromise(function (resolve) {
        console.log('aaaa')
        resolve("bbbb")
    });

    return promise;
}

let aa = test();

aa.then(function (value) {
    console.log(value)
})
setTimeout(function () {
    aa.then(function (value) {
        console.log(value)
    })
},1000)