/**
 * Created by Administrator on 2017/1/3.
 */
function echo(arg) {
    console.log(arg);
}
//创建对象的构造函数
function Person (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
var chen = new Person("chen", "qinhao");
echo(chen);
//小心使用typeof、instanceof、constructor
var arr = ['a', 'b', 'c', 'd'];
echo(typeof arr);
echo(typeof "");
echo(typeof []);
echo(typeof .1); //number
echo(typeof 1);  //number
echo(typeof true); //boolean
echo(typeof {}); //object
echo(typeof echo); //function
echo(arr instanceof Array); //[]
echo(arr.constructor()); // []
echo({}.constructor()); // {}
echo(Person.constructor()); // function
//自调匿名函数
echo(

(function (a, b) {
    return a + b;
})(10,20)

);

//从数组中随机
var items = [12,,'a','b','c','','ab',true,110];
echo(items[Math.floor(Math.random() * items.length)]);
echo(items[1]);
//最大值和最小值之间
var max = 100, min = 1;
echo(Math.floor(Math.random() * (max - min + 1)) + min);
//在0和设定的最大值之间生成一个数字数组
var numberArray = [];
for(var i = 1; numberArray.push(i++) < max;);
//echo(numberArray);
//生成一个随机的数字字母字符串
function generateRandomAlphaNum(len) {
    var rdmstring = "";
    for( ; rdmstring.length <= len; rdmstring += Math.random().toString(36).substr(2));
    return rdmstring.substr(0, len);
}
var gran = generateRandomAlphaNum(36);
echo(gran.toString());
//打乱一个数字数组
var number = [5, 458, 120, -211, 144, 8889, -888];
number = number.sort(function(){
    return Math.random() - 0.5;
});
echo(number);
//string的trim
String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "");
};
//
var str = new String(11);
echo(str);
//附加一个数组到另一个数组上
var array1 = [12, "foo", {name: "Joe"}, -2458];
var array2 = ["Doe", 555, 100];
array1.push(array2);
Array.prototype.push.apply(array1, array2);
echo(array1);

//将arguments对象转换成一个数组
function argToArray(){
    echo(arguments);
    return Array.prototype.slice.call(arguments);
}
echo(argToArray(1,2,3,4,5,6,7));
var array3 = [1,2,3,4,5,6,7];
echo(array3.splice());
/*echo(array3.slice(1));
echo(array3);
array3.splice(0,3);
echo(array3);
var array4 = "1,2,3,4,5".split(",");
echo(array4);*/
var obj5 = { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6, '6': 7 };
echo(obj5[0]);
var array6 = [1,2,3,4,5];
function slice1(start,end) {
    var arr = [];
    for(start;start<=end;start++){
        arr.push(this[start]);
    }
    return arr;
}

Array.prototype.slice1 = slice1;
echo(array6.slice1(0,2));


