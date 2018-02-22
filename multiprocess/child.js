var f = function(){
    // process全局可以获得当前进程的信息
    console.log("进程", process.argv[2] + "执行结束")
};

// 延迟运行，现node的注册机制和并发
setTimeout(f, 1000*(3-process.argv[2]));