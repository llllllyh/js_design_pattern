/**
  1.多态背后的思想是将“做什么”和“谁去做以及怎样去做”分离开来，也就是将“不变的事物”与 “可能改变的事物”分离开来。
  把不变的部分隔离出来，把可变的部分封装起来，这给予了我们扩展程序的能力，程序看起来是可生长的，也是符合开放—封
  闭原则的，相对于修改代码来说，仅仅增加代码就能完成同样的功能，这显然优雅和安全得多。

  2.题目：主人家里养了两只动物，分别是一只鸭和一只鸡，当主人向它们发出“叫”的命令
    时，鸭会“嘎嘎嘎”地叫，而鸡会“咯咯咯”地叫。这两只动物都会以自己的方式来发
    出叫声。它们同样“都是动物，并且可以发出叫声”，但根据主人的指令，它们会各自
    发出不同的叫声。
 */


var makeSound = (animal) => {
  animal && animal.sound()
}

var Durk = function(){}
Durk.prototype.sound = function () {
  console.log('嘎嘎嘎')
}

var Chicken = function(){}
Chicken.prototype.sound = function () {
  console.log('咯咯咯')
}
console.log(new Durk())
makeSound(new Durk())
makeSound(new Chicken())