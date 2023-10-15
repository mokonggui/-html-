var back=document.getElementById('back');
window.onmousemove = function(event){
    var x=-event.clientX/10;
    var y=-event.clientY/15;
    back.style.backgroundPositionX = x+"px";
    back.style.backgroundPositionY = y+"px";
}


var zh=document.getElementById('zh');
var mm=document.getElementById('mm');
function login(){
    if(zh.value==""||mm.value==""){
        alert("账号或密码不能为空");
        return false;
    }
    else if(zh.value!="123"||mm.value!="123"){    
        alert("账号或密码错误(可以选择游客登录)");
        return false;
    }
}

var con=document.getElementById('con');
function loadoff(){
    con.style.display="none";
}
function loadon(){
    con.style.display="flex";
}
window.onload=function(){//页面加载完后才执行
    loadon();
    setTimeout(loadoff,3000);
}

var ye=document.getElementById('ye');
function yanye(){	
			ye.style.color="rgb(234, 247, 255)";
			setTimeout(yye,1000);
}
function yye(){
	ye.style.color="rgb(155, 200, 240)";
	setTimeout(yyye,1000);
}
function yyye(){
	ye.style.color="rgb(84, 109, 158)";
	setTimeout(yanye,1000);
}
yanye();

