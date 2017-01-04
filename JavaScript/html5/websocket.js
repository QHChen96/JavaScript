/**
 * Created by Administrator on 2017/1/4.
 */
/**
 * open 成功创建时触发
 * error 错误时触发,连接不能持续
 * close 关闭时触发
*/
var socket = new WebSocket("ws://127.0.0.1/");
var message = {
    time: new Date(),
    text: "Hello World",
    clientId: "abas89safhk"
};
socket.onopen = function () {
    alert("open");
};
socket.onerror = function () {
    alert("error");
};
socket.onclose = function (event) {
    alert("close");
    console.log("Was clean? " + event.wasClean + " Code=" + event.code + " Reason=" + event.reason) ;
};
socket.onmessage = function (event) {
    var data = event.data;
    //处理
};
socket.send(JSON.stringify(message));
socket.close();//关闭