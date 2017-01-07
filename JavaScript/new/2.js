/**
 * Created by Administrator on 2017/1/7.
 */
//原型继承
/*var Student  = {
    name: 'Robot',
    height: 1.6,
    run: function () {
        console.log(this.name + ' is running...');
    }
};
function createStudent(name) {
    // 基于Student原型创建一个新对象:
    var s = Object.create(Student);
    // 初始化新对象:
    s.name = name;
    return s;
};

var xiaoming = createStudent("小明");
xiaoming.run();
console.log(Object.getPrototypeOf(xiaoming)==Student.prototype);
function Person(name){
    this.name = name;
}
var people = new Person("小明");
console.log(Object.getPrototypeOf(people)==Person.prototype)*/

/*function Student(props) {
    this.name = props.name || '匿名'; // 默认值为'匿名'
    this.grade = props.grade || 1; // 默认值为1
}

Student.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
};

var xiaoming = createStudent({
    name: '小明'
});
console.log(xiaoming.hello())
function PrimaryStudent(props) {
    Student.call(this, props)
    this.grade = props.grade || 1;
}
function F() {

}
F.prototype = Student.prototype;
var arr = [1,2,3,4,5,6,7,8];
arr.suffle();*/

function groupBy(scores, func) {
    var map = new Map();
    for(var i = 0,len=scores.length;i<len;i++){
        var key = func(scores[i]);
        var arr = map.get(key);
        arr && arr.push(scores[i]) || (map.set(key, [scores[i]]));
    }
    return map;
}
var scores = [20, 81, 75, 40, 91, 59, 77, 66, 72, 88, 99];
var groups = groupBy(scores, function (x) {
    if (x < 60) {
        return 'C';
    } else if (x < 80) {
        return 'B';
    } else {
        return 'A';
    }
});
console.log(groups.get("C"))