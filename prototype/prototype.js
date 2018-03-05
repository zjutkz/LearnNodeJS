// function People(name) {
//     this.name=name;
//     //对象方法
//     this.Introduce=function(){
//         console.log("My name is "+this.name);
//     }
// }
// //类方法
// People.Run=function(){
//     console.log("I can run");
// }
// //原型方法
// People.prototype.IntroduceChinese=function(){
//     console.log("我的名字是"+this.name);
// }
//
//
//
// //测试
//
// var p1=new People("zjutkz");
//
// p1.Introduce();
//
// People.Run();
//
// p1.IntroduceChinese();

//================================

function Clz() {

}

Clz.prototype.method = function () {
    console.log("This is a method")
}

Clz.prototype.haha = function () {
    console.log("haha")
}

Clz.haha = function () {
    console.log("xixi")
}

Clz.haha()
new Clz().haha()


