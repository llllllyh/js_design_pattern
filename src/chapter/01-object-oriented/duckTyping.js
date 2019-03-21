/**
    1.在 JavaScript 中，当我们对一个变量赋值时，显然不需要考虑它的类型，因此，JavaScript
    是一门典型的动态类型语言。 
    2.动态类型语言对变量类型的宽容给实际编码带来了很大的灵活性。由于无需进行类型检测，
    我们可以尝试调用任何对象的任意方法，而无需去考虑它原本是否被设计为拥有该方法。
    3.鸭子类型的通俗说法是：“如果它走起路来像鸭子，叫起来也是鸭子，那么它就是鸭子。” (关注 HAS-A, 而不是 IS-A。)
 */

var duck = {
  duckSinging(){
    console.log('嘎嘎嘎')
  }
}

var chicken = {
  duckSinging(){
    console.log('嘎嘎嘎')
  }
}

var choir = []; // 合唱团

var joinChoir = ( animal ) => {
  if( animal && typeof  animal.duckSinging === 'function'){
    choir.push(animal)
    console.log(`恭喜加入合唱团，当前已有成员数量：${choir.length}位`)
  }
}

joinChoir(duck)
joinChoir(chicken)