function sleep(milliSeconds) {  // 模拟卡顿
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
    console.log("delay complete");
}

// function delay(response) {
//     sleep(3000);  // 阻塞 10s
// }
//
// exports.delay = delay;


sleep(3000);