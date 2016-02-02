### canvas

#### 获取上下文，使用上下文api

var canvas=document.getElementById("my_canvas_id");

var c=canvas.getContext('2d');

#### 绘制线段和填充多边形

c.beginPath();//开始一条新路径

c.moveTo(100,100);//从(100,100)开始定义一条新的子路径

c.lineTo(200,200);//从(100,100)到(200,200)绘制一条线段

c.lineTo(100,200);//从(200,200)到(100,200)绘制一条线段

c.fillStyle = '#aaa';

c.strokeStyle = '#000';

c.lineWidth = 1;

c.fill();//填充一个三角形区域

c.stroke();//绘制三角形的两条边

c.closePath();//闭合

必须要记得调用`beginPath()`方法。如果没有调用beginPath()方法，那么之后添加的所有子路径都是添加在已有路径上，并且有可能重复绘制这些子路径。

#### 坐标系变换

c.translate(1,1);

c.rotate(30deg);

c.scale(2);

应用：绘制雪花图案。

#### 弧线

c.arc();

6个参数：圆心的X、Y坐标、圆的半径、弧形的起始和结束的角度以及弧形的方向（顺时针还是逆时针）

c.arcTo()

c.bezierCurveTo()

c.quadraticCurveTo()

#### 填充

图案

var image=document.getElementById("myimage");

c.fillStyle=c.createPattern(image,"repeat");

渐变

var bgfade=c.createLinearGradient(0,0,canvas.width,canvas.height);

bgfade.addColorStop(0.0,"#88f");//以左上角为亮蓝色开始

bgfade.addColorStop(1.0,"#fff");//一直到右下角以白色结束

线段

#### 文字

c.fillText();

c.strokeText();

#### 图片

c.drawImage()

1. context.drawImage(img,x,y);
2. context.drawImage(img,x,y,width,height);
3. context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);

img：规定要使用的图像、画布或视频





