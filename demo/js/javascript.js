window.onload=function(){
	var oClose=getID('close'),
		oFor=getID('for'),
		offOn=true;

	oClose.onclick=function(){
		if(offOn){
			oFor.style.display='block';
			offOn=false;
		}else {
			oFor.style.display='none';
			offOn=true;
		}
	}
// 图片轮播
	var oUlist=getID('ullist'),
		oImg=getTag(oUlist,'img'),
		oOl=getTag(oUlist,'ol'),
		obtn=getTag(oUlist,'button'),
		srtImg=['1','2','3'],
		leng=srtImg.length,
		timers=null,
		num=0;
		var oLI=oOl.getElementsByTagName('li');
		for (var i=0;i<leng;i++){
			oOl.innerHTML+='<li></li>';
		}
		function tab(){
			if(num>leng-1){num=0}; 
			for(var i=0; i<leng;i++){oLI[i].className="";};
			oLI[num].className="activeBlue";
			oImg.src="./image/"+srtImg[num]+".jpg";
			num++;	
		}
		obtn.onclick=tab;
		obtn.onmouseover=function(){
			clearInterval(timers)
		}
		obtn.onmouseout=function(){
			timers=setInterval(tab,3000);
		}
		timers=setInterval(tab,3000);
// 图片轮播


// 回到顶部
	var cltHt=document.documentElement.clientHeight;
	var	aTop=getID('Top');
	var	timer=null;
	var	offon=true;
	window.onscroll=function(){
	   var Stop=document.documentElement.scrollTop||document.body.scrollTop;
		if(Stop>=cltHt){
			aTop.style.display="block";
		}else {
			aTop.style.display="none";
		}

		if(!offon){
			clearInterval(timer)
		}
		offon=false;
	}
	aTop.onclick=function (){
		timer=setInterval(function(){
			var Stop=document.documentElement.scrollTop||document.body.scrollTop;
			var ispeed=Math.floor(-Stop/5);
			document.documentElement.scrollTop=document.body.scrollTop=Stop+ispeed;
			offon=true;
			if(Stop==0){
				clearInterval(timer)
			}
			console.log(Stop)
		},30);
	}
}
function getTag(Id,Name){
	return Id.getElementsByTagName(Name)[0];
}
function getID(Id){
	return typeof Id=== 'string'? document.getElementById(Id):Id;
};
