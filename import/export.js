//module.export.xx相当于多了一个别名，在require的时候可以用这个别名
//http://www.ruanyifeng.com/blog/2015/05/require.html

var User = function(name, email) {
    console.log("name: " + name + " & email: " + email);
};

var AnotherFunc = function (name, email) {
    console.log("another function: " + name + " " + email)
}
module.exports.logUser = User;
module.exports.anotherFunc = AnotherFunc;
//module.exports = User;

//==============================================================

// var powerLevel = function(level) {
//     return level > 9000 ? "it's over 9000!!!" : level;
// };
// module.exports = powerLevel;