document.write('<div id="float" style="z-index: 999;"><a href="https://wa.me/+"><img src="https://ik82.com/img/lm2qbDL1.gif" alt="" height="350" width="150"></a></div> ');
var IO=document.getElementById('float'),Y=IO,H=0,IE6;  
IE6=window.ActiveXObject&&!window.XMLHttpRequest;  
while(Y){H+=Y.offsetTop;Y=Y.offsetParent};  
if(IE6)  
    IO.style.cssText="position:absolute;top:(this.fix?(document.documentElement.scrollTop-(this.javascript||"+H+")):0)";  
window.onscroll=function (){  
    var d=document,s=Math.max(d.documentElement.scrollTop,document.body.scrollTop);  
    if(s>H&&IO.fix||s<=H&&!IO.fix)return;  
    if(!IE6)IO.style.position=IO.fix?"":"fixed";          
    IO.fix=!IO.fix;  
};  
try{document.execCommand("BackgroundImageCache",false,true)}catch(e){};  
