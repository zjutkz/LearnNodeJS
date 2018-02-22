//module.export.xx相当于多了一个别名，在require的时候可以用这个别名

var User = function(name, email) {
    console.log("name: " + name + " & email: " + email);
};
module.exports.logUser = User;
//module.exports = User;

//==============================================================

// var powerLevel = function(level) {
//     return level > 9000 ? "it's over 9000!!!" : level;
// };
// module.exports = powerLevel;