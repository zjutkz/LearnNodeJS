var user = require("./export");
//user.logUser("zjurkz","suuuperwayne@gmail.com");
let logUser = user.logUser;
let anotherFunc = user.anotherFunc;
logUser("zjurkz","suuuperwayne@gmail.com");
anotherFunc("zjurkz","suuuperwayne@gmail.com");

//user("zjurkz","suuuperwayne@gmail.com");

//==============================================================

//require的时候可以直接在后面加上参数

// var user = require("./export")(9050);
// var user = require("./export")
// console.log(user(8000));