语法：call([thisObj[,arg1[, arg2[,   [,.argN]]]]]) 

定义：调用一个对象的一个方法，以另一个对象替换当前对象。 

说明： 

call 方法可以用来代替另一个对象调用一个方法。call 方法可将一个函数的对象上下文从初始的上下文改变为由 thisObj 指定的新对象。 

如果没有提供 thisObj 参数，那么 Global 对象被用作 thisObj。 

```
function Animal(){    
    this.name = "Animal";    
    this.showName = function(){    
        alert(this.name);    
    }    
}    
  
function Cat(){    
    this.name = "Cat";    
}    
   
var animal = new Animal();    
var cat = new Cat();    
```
    
//通过call或apply方法，将原本属于Animal对象的showName()方法交给对象cat来使用了。    
//输入结果为"Cat"    
animal.showName.call(cat,",");    
//animal.showName.apply(cat,[]); 