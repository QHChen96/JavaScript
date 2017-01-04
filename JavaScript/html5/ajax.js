/**
 * Created by Administrator on 2017/1/4.
 */
/* 支持IE7之前
function createXHR() {
    if(typeof arguments.callee.activeXString != "string") {
        var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"],
            i, len;
        for(i = 0, len = versions.length; i < len; i++){
            try {
                new ActiveXObject(versions[i]);
                arguments.callee.activeXString = versions[i];
            } catch (ex) {
                //出异常说明不支持
            }
        }
    }
    return new ActiveXObject(arguments.callee.activeXString);
}
*/
//创建XHR
function createXHR() {
    if(typeof XMLHttpRequest != 'undefined') {
        return new XMLHttpRequest();
    } else if (typeof ActiveXObject != 'undefined') {
        if(typeof arguments.callee.activeXString != "string") {
            var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"],
                i, len;
            for(i = 0, len = versions.length; i < len; i++){
                try {
                    new ActiveXObject(versions[i]);
                    arguments.callee.activeXString = versions[i];
                } catch (ex) {
                    //出异常说明不支持
                }
            }
        }
        return new ActiveXObject(arguments.callee.activeXString);
    } else {
        throw new Error('No XHR object available.');
    }
}
var xhr = createXHR();
//打开一个请求
xhr.open('GET', 'example.php', false);
//发送
xhr.send(null); //不需要主体时必须传入null
/*
响应
responseText: 作为响应主体被返回的文本
responseXML: 如果响应的内容类型是 text/xml 或 application/xml 对于非xml会是null
status: 响应的HTTP状态
statusText: HTTP状态说明

readyState
0 未初始化。尚未open
1 启动。open
2 发送。send(),未接收到响应
3 接收。已经接收到部分
4 完成。已经完全
 */
if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) { //304为资源未改变
    alert(xhr.responseText);
} else {
    alert("Request was unsuccessful: " + xhr.status);
}

var xhr = createXHR();
xhr.onreadystatechange = function (event) {
    if(xhr.readyState == 4) {
        if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
            alert(xhr.responseText);
        } else {
            alert("Request was unsuccessful: " + xhr.status);
        }
    }
};
xhr.open('get', 'example.php', true);
xhr.send(null);
xhr.abort(); //取消异步
/*
以上为DOM 0 级
 */
/*
头信息
Accept: 浏览器能处理的内容类型
Accept-Charset: 浏览器能显示的字符集
Accept-Encoding: 浏览器当前的语言
Connection: 浏览器与服务器的链接类型
Cookie: 当前页面设置的Cookie
Host: 发出请求的页面所在的域
Referer: 发出请求页面的URL
User-Agent: 浏览器的用户代理字符串
以上浏览器会自动发出
使用setRequestHeader(name,value)方法可以设置自定义的请求头信息，在open和send之间调用
 */
xhr.onreadystatechange = function () {
  if(xhr.readyState == 4) {
      if ((xhr.status > 200 && xhr.status < 300) || xhr.status == 304) {
          alert(xhr.responseText);
      } else {
          alert("Request was unsuccessful: " + xhr.status);
      }
  }
};
xhr.open("get", "example.php", true);
xhr.setRequestHeader("MyHeader", "myValue");
xhr.send(null);

//获取指定的头信息
var myHeader = xhr.getResponseHeader("MyHeader");
var headers = xhr.getAllResponseHeaders();
/*
Get请求
 */
xhr.open("get", "example.php?name=chen", true);
function addURLParam(url, name, value) {
    url += (url.indexOf("?")) == -1 ? "?" : "&";
    url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
    return url;
}
/*
Post请求
模仿表单提交
Content-Type设置为application/x-www-form-urlencoded
 */
function submitData() {
    var xhr = createXHR();
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4) {
            if((xhr.status > 200 && xhr.status < 300) || xhr.status == 304) {
                alert(xhr.responseText);
            } else {
                alert("Request was unsuccessful: " + xhr.status);
            }
        }
    }
}
xhr.open("post", "example.php", true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
var form = document.getElementById("form");
xhr.send(serialize(form));

/*
XMLHttpRequest 2级
 */
var data = new FormData();
data.append("name", "Chen"); //添加数据
//也可以将表单的元素的数据预先向其中填入键值对
data = new FormData(document.forms[0]);
//在send中
xhr.send(new FormData(document.getElementById("form")));
//超时设定
xhr.timeout = 1000;
xhr.ontimeout = function () {
  alert("Request did not return in a second.");
};
//overrideMimeType()  Mime类型决定浏览器怎么处理它
//open
xhr.overrideMimeType("text/xml");
//send

/*
进度事件
loadsrart 接收到第一个字节触发
progress 接收响应之间不断触发
error 请求错误时触发
abort 终止
load 接收完整响应数据时
loadend 通信完成或error abort load
 */
xhr.onload = function () {

};
//totalSize为Content-Length响应头部的预期字节，position为已经接收的字节数
xhr.onprogress = function (event) {
    var divStatus = document.getElementById("status");
    if(event.lengthComputable) {
        divStatus.innerHTML = "Received " + event.position + " of " + event.totalSize + " bytes";
    }
};
