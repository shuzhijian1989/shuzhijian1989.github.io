
window.onload=function(){
	var domes=document.getElementById('clock');
	var ctx = domes.getContext('2d');
	var width = ctx.canvas.width;
	var height = ctx.canvas.height;
	var r = width/2;
	var rem=width/200;
	function drawbackground(){
		ctx.save();
		ctx.translate(r,r);
		ctx.beginPath();
		ctx.lineWidth = 5*rem;
		ctx.arc(0, 0, r-ctx.lineWidth/2,0,2*Math.PI,false);
		ctx.stroke();
		var hournumber=[3,4,5,6,7,8,9,10,11,12,1,2];
		// var hournumber=[ '生','烟','火','换','你','一','世','迷','离','用','我','三'];
		// var hournumber=[ '生','烟','火','换','你','一','世','迷','离','用','我','三'];
			ctx.font=18*rem+'px Arial';
			ctx.textAlign='center';
			ctx.textBaseline='middle';
		hournumber.forEach(function(nunber,i){
			var rad=2*Math.PI/12*i;
			var x =Math.cos(rad)*(r-30*rem);
			var y =Math.sin(rad)*(r-30*rem);
			ctx.fillText(nunber,x,y);
		});
		for(var i=0;i<60;i++){
			var rad=2*Math.PI/60*i;
			var x =Math.cos(rad)*(r-18*rem);
			var y =Math.sin(rad)*(r-18*rem);
			ctx.beginPath();
			if(i % 5 === 0){
				ctx.fillStyle="	#800080";
				ctx.arc(x,y,2*rem,0,2*Math.PI,false);
			}else{
				ctx.fillStyle="#FF6347";
				ctx.arc(x,y,2*rem,0,2*Math.PI,false);
			}
			ctx.fill();
		};
	};
	function Hour(hour,minute){
		ctx.save();
		ctx.beginPath();
		var rad=2*Math.PI/12*hour;
		var mard=2*Math.PI/12/60*minute;
		ctx.rotate(rad+mard);
		ctx.lineWidth=4*rem;
		ctx.lineCap='round';
		ctx.moveTo(0,5*rem);
		ctx.lineTo(0,-r/2);
		ctx.stroke();
		ctx.restore();
	};
	function Minute(minute){
		ctx.save();
		ctx.beginPath();
		var rad=2*Math.PI/60*minute;
		ctx.rotate(rad);
		ctx.lineWidth=3*rem;
		ctx.lineCap='round';
		ctx.moveTo(0,15*rem);
		ctx.lineTo(0,-r+40*rem);
		ctx.stroke();
		ctx.restore();
	};
	function Second(second){
		ctx.save();
		ctx.beginPath();
		ctx.fillStyle='#DC143C';
		var rad=2*Math.PI/60*second;
		ctx.rotate(rad);
		ctx.moveTo(-2*rem,25*rem);
		ctx.lineTo(2*rem,25*rem);
		ctx.lineTo(1,-r+18*rem);
		ctx.lineTo(-1,-r+18*rem);
		ctx.fill();
		ctx.restore();
	};
	function dradot(){
		ctx.beginPath();
		ctx.fillStyle='green';
		ctx.arc(0,0,3*rem,0,2*Math.PI,false);
		ctx.fill();
	};
	function draw(){
		ctx.clearRect(0,0,width,height);
		var naw = new Date();
		var hour = naw.getHours();
		var minute = naw.getMinutes();
		var second = naw.getSeconds();
		drawbackground();
		Hour(hour,minute);
		Minute(minute);
		Second(second);
		dradot();
		ctx.restore();
	}
	draw();
	setInterval(draw,1000);
	var interval = 1000; 

	function ShowCountDown(year,month,day,divname){ 
		var now = new Date(); 
		var endDate = new Date(year, month-1, day); 
		var leftTime=endDate.getTime()-now.getTime(); 
		var leftsecond = parseInt(leftTime/1000); 
		var day1=Math.floor(leftsecond/(60*60*24)); 
		var hour=Math.floor((leftsecond-day1*24*60*60)/3600); 
		var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60); 
		var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60); 
		var cc = document.getElementById(divname); 
		cc.innerHTML = "温馨提醒："  + "<br/>"+year+"年"+month+"月"+day+"日还有："+day1+"天"+hour+"小时"+minute+"分"+second+"秒"; 
	} 

	setInterval(function(){
		ShowCountDown(2018,12,30,'lunbo2Span');
	}, interval); 

	


	var i = 0;
	var showString= "人生如梦岁月无情。蓦然回首，才发现人活着是一种心情。穷也好，富也好，得也好，失也好。一切都是过眼云烟。"+
		"想想，不管昨天、今天、明天，能豁然开朗就是美好的一天。不管亲情、友情、爱情，能永远珍惜就是好心情。"
		+"记得有一个经典短信这样写着：曾经拥有的不要忘记；已经得到的更加珍惜。"
	var strLeng=showString.length;
	var aText=document.getElementById('text');
	function marquee(){
		aText.innerHTML+= showString.charAt(i);
		i++;
		var timeID= setTimeout(marquee,70)
		if (i >= strLeng){
			clearTimeout(timeID); 
		};
	};
	marquee();
	var aMis=document.getElementById("audo");
	domes.onclick=function(){
		if(aMis.paused){
			aMis.play();
		}
		else{
			aMis.pause();
		}
	}
	// domes.addEventListener('touchstart',function(event){
	// 	if(aMis.paused){
	// 		aMis.play();
	// 	}
	// 	else{
	// 		aMis.pause();
	// 	}
	// },false);


	var Divtxt=document.getElementById('divtxt');
	Divtxt.className='animated tada infinite'
	 setTimeout(function(){
       Divtxt.style.display='none'
    },9000);

	// domes.addEventListener('onclick',function(event){
	// 	if(aMis.paused){
	// 		aMis.play();
	// 	}
	// 	else{
	// 		aMis.pause();
	// 	}
	// },false);
}