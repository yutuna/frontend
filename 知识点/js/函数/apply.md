语法：apply([thisObj[,argArray]]) 

定义：应用某一对象的一个方法，用另一个对象替换当前对象。 

说明： 

如果 argArray 不是一个有效的数组或者不是 arguments 对象，那么将导致一个 TypeError。 

如果没有提供 argArray 和 thisObj 任何一个参数，那么 Global 对象将被用作 thisObj， 并且无法被传递任何参数。