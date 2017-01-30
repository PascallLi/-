
var log = function () {
    console.log.apply(null, arguments)
}

// 高阶函数和匿名函数
var process = function(array, processor){
    var list = []
    for (var i = 0; i < array.length; i++) {
        var a = array[i]
        var element = processor(a)
        list.push(element)
    }
    return list
}

var array = [1, 2, 3]
var list = process(array, String)

var filter = function(array, processor) {
    var list = []
    for (var i = 0; i < array.length; i++) {
        var a = array[i]
        var element = processor(a)
        if (element) {
            list.push(a)
        }
    }
    return list
}

filter([50, 60, 70], function(n){
    return n < 60
})



// apply 和 call 的区别

function Person(name, age){
     this.name = name
     this.age = age
    //  this.grade = age + 1
}

function student(name, age, grade) {
    //  Person.apply(this, arguments)
     this.grade = grade
     Person.call(this,name,age);
}

var Student = new Student("qian", 21, "一年级")

// this:在创建对象在这个时候代表的是student
//
// arguments:是一个数组,也就是[“qian”,”21”,”一年级”];
//
// 也就是通俗一点讲就是:用student去执行Person这个类里面的内容,在Person这个类里面存在this.name等之类的语句,这样就将属性创建到了student对象里面
log('name:', student.name, 'age:', student.age, 'grade:', student.grade)
