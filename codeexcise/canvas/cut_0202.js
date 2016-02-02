var canvas = document.getElementById("my_canvas_id"); 
var c = canvas.getContext('2d');

c.font = "bold 60pt sans-serif";//大号字体
c.lineWidth = 3;//窄线段
c.strokeStyle = "#f00";//黑色线段

//以下是对照组，我注释了
//勾勒矩形轮廓和文本轮廓
// c.strokeRect(175,105,50,325);//中间竖直的条带
// c.strokeText("＜canvas＞",15,330);//注意使用的是strokeText()方法而不是fillText()方法

//以下会定义裁剪区域
//在外部定义一条包含内部的复杂路径
polygon(c,3,200,225,200);//大三角形
polygon(c,3,200,225,100,0,true);//在内部再绘制一个小三角形

//以下执行裁剪
c.clip();//用5个像素宽的线段来勾勒路径，完全在裁剪区域内

//以下把裁剪区域也画出来，我注释掉了
// c.lineWidth = 20;//另外5个像素的线段被裁剪了
// c.stroke();//填充在裁剪区域内的矩形部分和文本部分

//经过裁剪以后的绘制，所有绘制的填充都会在裁剪区域内。
c.fillStyle = "#00a"//暗灰色
c.fillRect(175,5,50,325);//填充竖直的条带

c.fillStyle = "#808"//深灰色
c.fillText("＜canvas＞",15,330);//填充文本


function polygon(c,n,x,y,r,angle,counterclockwise){
	angle = angle || 0;
	counterclockwise = counterclockwise || false;
	c.moveTo(x + r * Math.sin(angle),//从第一个顶点开始一条新的子路径
	y - r * Math.cos(angle));//使用三角法计算位置
	var delta = 2 * Math.PI/n;//两个顶点之间的夹角
	for(var i = 1;i < n;i++){//循环剩余的每个顶点
		angle += counterclockwise? - delta:delta;//调整角度
		c.lineTo(x + r * Math.sin(angle),//以下个顶点为端点添加线段
		y - r * Math.cos(angle));
	}
	c.closePath();//将最后一个顶点和起点连接起来
}


