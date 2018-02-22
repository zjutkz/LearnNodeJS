const child_process = require('child_process')

for (var id = 0; id<3; id++){
    // 开启子进程，并处理输出
    var subProcess = child_process.fork('child.js', [id])
    // 监听三个进程
    subProcess.on('exit',function (code) {
        console.log("子进程已经退出 "+code) //打印退出码
    })
}