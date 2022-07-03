(function (window) {
    var $ = jQuery = function (selector, context) { //jQuery构造函数
        return new jQuery.fn.init(selector, context); //jQuery实例对象
    }
    jQuery.fn = jQuery.prototype = { //jQuery原型对象
        init: function (selector, context) { //初始化构造函数
            //省略代码，参考上面示例代码
        }
    }
    jQuery.fn.init.prototype = jQuery.fn;
    //扩展方法：jQuery迭代函数
    jQuery.each = function (object, callback, args) {
        for (var i = 0; i < object.length; i++) { //使用for迭代jQuery对象中每个DOM元素
            callback.call(object[i], args); //在每个DOM元素上调用函数
        }
        return object; //返回jQuery对象
    }
    //jQuery扩展函数
    jQuery.extend = jQuery.fn.extend = function () {
        var destination = arguments[0],
            source = arguments[1]; //获取第1个和第2个参数
        //如果两个参数都存在，且都为对象
        if (typeof destination == "object" && typeof source == "object") {
            //把第2个参数对合并到第1个参数对象中，并返回合并后的对象
            for (var property in source) {
                destination[property] = source[property];
            }
            return destination;
        } else { //如果包含一个参数，则把插件复制到jQuery原型对象上
            for (var prop in destination) {
                this[prop] = destination[prop];
            }
            return this;
        }
    }
    //jQuery对象扩展方法
    jQuery.fn.extend({
        fontStyle: function (obj) { //设置字体样式
            var defaults = { //设置默认值，可以扩展
                color: "#000",
                bgcolor: "#fff",
                size: "14px",
                style: "normal"
            };
            defaults = jQuery.extend(defaults, obj || {});
            jQuery.each(this, function () {
                this.style.color = defaults.color;
                this.style.backgroundColor = defaults.bgcolor;
                this.style.fontSize = defaults.size;
                this.style.fontStyle = defaults.style;
            });
        }
    })
    //开放jQuery接口
    window.jQuery = window.$ = jQuery;
})(window)