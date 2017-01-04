/**
 * Created by Administrator on 2017/1/3.
 */
function echo (arg) {
    console.log(arg);
}
//等于号 == ===
echo("1"==1); //true
echo("1"===1); //false
echo([1] == 1); //true
echo([1] === 1);//false
echo("" == 0); // true
echo("" === 0); //false
echo([] == 0); //true
echo([] === 0); //false
echo(this); //浏览器中window

//使用闭包实现私有变量
function Person(name, age) {
    this.getName = function () {
        return name;
    };
    this.setName = function(newName){
        name = newName;
    };
    this.getAge = function () {
        return age;
    };
    this.setAge = function(newAge) {
        age = newAge;
    };
    var occupation = 1;
    this.getOccupation = function () {
        return occupation;
    };
    this.setOccupation = function (newOcc) {
        occupation = newOcc;
    };
}
var p = new Person("chen",22);
echo(p.name); //undefined
echo(p.age); //undefined
echo(p.occupation); // undefined
p.setName("qinhao");
echo(p.getName()); //qinhao
echo(p.occupation); //undefined
echo(p.getOccupation()); //未赋值
p.setOccupation("程序员");
echo(p.getOccupation()); // 程序员
//由上可知,变量会保存在私有域中

