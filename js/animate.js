function animate(obj,target,callback){
	//让元素中只有一个定时器
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		//步长值写在定时器里面
		//步长写成整数
		// var step=Math.ceil((target-obj.offsetLeft)/10);
		var step=(target-obj.offsetLeft)/10;
		step=step>0?Math.ceil(step):Math.floor(step);
		if(obj.offsetLeft==target){
			clearInterval(obj.timer);
			//回调函数写到定时器里面
			// if(callback){
			// 	callback();
			// }
			callback && callback();
		}
		//把每次＋5这个步长变成步长公式
		obj.style.left=obj.offsetLeft+step+'px';
	},15)
}