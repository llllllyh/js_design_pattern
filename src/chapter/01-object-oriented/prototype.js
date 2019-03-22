/**
  从设计模式的角度讲，原型模式是用于创建对象的一种模式，如果我们想要创建一个对象，
  一种方法是先指定它的类型，然后通过类来创建这个对象。原型模式选择了另外一种方式，我们
  不再关心对象的具体类型，而是找到一个对象，然后通过克隆来创建一个一模一样的对象。
  既然原型模式是通过克隆来创建对象的，那么很自然地会想到，如果需要一个跟某个对象一
  模一样的对象，就可以使用原型模式。

  所有的数据都是对象。
  要得到一个对象，不是通过实例化类，而是找到一个对象作为原型并克隆它。
  对象会记住它的原型。
  如果对象无法响应某个请求，它会把这个请求委托给它自己的原型
 */

var Plane = function() {
  this.blood = 100,
  this.attackLevel = 1,
  this.defenseLevel = 1
}

var plane = new Plane()
plane.blood = 500
plane.attackLevel = 10
plane.defenseLevel = 7

var clonePlane = Object.create(plane)
console.log('clonePlane=',clonePlane)
console.log('clonePlane===plane'+clonePlane === plane)

//在不支持 Object.create 方法的浏览器中，则可以使用以下代码
Object.create = Object.create || function(obj){
  var F = new function(){}
  F.prototype = obj
  return new F()
}