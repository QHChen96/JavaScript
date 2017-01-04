/**
 * Created by Administrator on 2017/1/4.
 */
/**
 * 格式    name=value; expires=expiration_time; path=domain_path; domain=domain_name; secure
 *
 * HTTP/1.1 200 OK
 * Content-type: text/html
 * Set-Cookie: name=value; expires=Mon, 22-jan-07 07:10:24 GMT; domain=.wrox.com
 *             名称=值      过期时间                              域
 * Other-header: other-header-value
 */
/** SSL的方式
 * HTTP/1.1 200 OK
 * Content-type: text/html
 * Set-Cookie: name=value; domain=.wrox.com; path=/; secure
 * Other-header: other-header-value
 */
//document.cookie = encodeURIComponent("name") + "=" + encodeURIComponent("chenqinhao") + "; domain=127.0.0.1; path=/";
var CookieUtil = {
    get: function (name) {
        var cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;
        if(cookieStart > -1) {
            var cookieEnd = document.cookie.indexOf(";", cookieStart);
            if(cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
        }
        return cookieValue;
    },
    set: function (name, value, expires, path, domain, secure) {
        var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        if(expires instanceof Date) {
            cookieText += "; expires=" + expires.toGMTString();
        }
        if(path) {
            cookieText += "; path=" + path;
        }
        if(domain) {
            domain += "; domain=" + domain;
        }
        if(secure) {
            secure += "; secure=" + secure;
        }
        return cookieText;
    },
    unset: function (name, value, expires, path, domain, secure) {
        this.set(name, "", new Date(0), path, domain, secure);
    }
};

