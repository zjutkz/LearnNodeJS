//https://sunyuhui.com/2016/05/28/prototype-chain/

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

// function Clz() {
//
// }
//
// Clz.prototype.method = function () {
//     console.log("This is a method")
// }
//
// Clz.prototype.haha = function () {
//     console.log("haha")
// }
//
// Clz.haha = function () {
//     console.log("xixi")
// }
//
// Clz.haha()
// new Clz().haha()

//================================

// function Person(name) {
//     this.name = name;
// }
// Person.prototype.getName = function () {
//     console.log(this.name)
// }
// var person = new Person("zjutkz");
//
// console.log(Person.prototype)
// console.log(Person.prototype.constructor)
// console.log(person.__proto__)

//================================

function Animal(planet){
    this.planet = planet;
}
Animal.prototype.getPlanet = function(){
    return this.planet;
}

function Person(name){
    this.name = name;
}

Person.prototype = new Animal('earth');  // 没有这一句，Animal和Person豪不相干，有了这一句，就实现了继承。


Person.prototype.getName = function(){
    return this.name;
}
var person = new Person('zjutkz');
console.log(Person.prototype)
