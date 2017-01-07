/**
 * Created by Administrator on 2017/1/7.
 */
console.log(parseInt("1a", 10));
var map = new Map();
map.set("a",1);
map.set("b",2);
map.set("c",3);
console.log(map);
/*for(var x of map){
    console.log(x);
}*/
/*
map.forEach(function (element, index, array) {
    console.log(element + ":" + index + ":" + array);
})
*/
console.log(Math.abs(""))//绝对值
/*
//变量提升
function foo() {
    var x = "Hello," + y;
    console.log(x);
    var y = 'Bob';
}
foo();*/
//全局
console.log(this);
var person = {name:"chen",age:11,getAge:function () {
    function getage(){console.log(this.age);}
    getage();
}};
person.getAge();
function myMap(func){
    var arr = [],len=this.length;;
    for(let i=0; i<len; i++){
        arr.push(func(this[i]))
    }
    return arr;
}
function myReduce(func) {
    var sum=0,len=arr.length;
    for(let i=1; i<len; i++){
        sum += func(this[i-1],this[i]);
    }
    return sum;
}
Array.prototype.myMap = myMap;
Array.prototype.myReduce = myReduce;
var arr = [1,2,3,4,5,6];
/*arr.myMap(function (a) {
    return a*a;
});*/
/*var result = arr.myReduce(function (a, b) {
    return a+b;
})*/
var reduceResult = arr.myReduce(function (a,b) {
    return a+b;
})
var mapResult = arr.myMap(function (a) {
    return a*a;
})
console.log(arr);
console.log(reduceResult);
console.log(mapResult);

function myFilter(func){
    var len=this.length;
    for(let i=0; i<len; i++){
       var result = func(this[i],i,this);
        !result&&this.splice(i,1)||(this[i]=result);
    }
}
var arr1 = [1,2,3,4,5,6];
Array.prototype.myFilter = myFilter;
arr1.myFilter(function (a) {
    return a%2==0
})
console.log(arr1);
//没想出来
function mySort(func) {

}
//generator
function* foo(x) {
    yield x+1;
    yield x+2;
    return x+3;
}
console.log("========")
console.log(foo(1))
function fib(max) {
    var t,a=0,b=1,arr=[0,1];
    while (arr.length < max){
        t = a+b;
        a=b;
        b=t;
        arr.push(t);
    }
    return arr;
}
function* fib1(max) {
    var t,a=0,b=1,n=1;
    while(n < max){
        yield a;
        t =a + b;
        a = b;
        b = t;
        n++;
    }
    return a;
}
for(var x of fib1(10)){
    console.log(x);
}
var id = 0;
function* next_id(){
    yield ++id;

}
console.log(next_id().next())
var i = new Number(11);
var j = Number(11);
console.log(typeof i);
console.log(typeof j);
