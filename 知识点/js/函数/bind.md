bind与call很相似,，例如，可接受的参数都分为两部分，且第一个参数都是作为执行时函数上下文中的this的对象。

不同点有两个：

①bind的返回值是函数

②后面的参数的使用也有区别

```
//这句代码相当于以下的操作
var f_Extend = f.bind(null,"extend_A")

//↓↓↓

var f_Extend = function(b,c){
    return f.call(null,"extend_A",b,c);
}
```