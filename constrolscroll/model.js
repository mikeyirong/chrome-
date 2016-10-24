var currentPosition=0;
function runss(){
var scrollheigh=document.body.scrollHeight;
currentPosition+=1;
if(currentPosition<scrollheigh){
	  window.scrollTo(0,currentPosition);  
	}
	else{
		   clearInterval(ss);  
	}

}
var ss=setInterval("runss()",10);  