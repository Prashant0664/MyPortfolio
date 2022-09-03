function popup(textt){
var modal=document.getElementById("modal");
var modaltext=document.getElementById("modaltext");
var n1="Prashant created a Portfolio website. I was very pleased with the work done. He has a lot of experience and is very concerned about the needs  of client."
var n2="Prashant created a Portfolio website. I was very pleased with the work done. He has a lot of experience and is very concerned about the needs  of client."
var n3="Prashant created a Portfolio website. I was very pleased with the work done. He has a lot of experience and is very concerned about the needs  of client."
var n4="Prashant created a Portfolio website. I was very pleased with the work done. He has a lot of experience and is very concerned about the needs  of client."
   var m;
    if(textt==1){m=n1}
    if(textt==2){m=n2}
    if(textt==3){m=n3}
    if(textt==4){m=n4}
    modaltext.innerHTML=m;
    var s1=document.getElementById("split1");
    var s2=document.getElementById("split2");
    s1.style.filter="blur(10px)";
    s2.style.filter="blur(10px)";
    modal.style.zIndex=100;
}
console.log(window.innerHeight);
function closepopup(){
    var s1=document.getElementById("split1");
    var s2=document.getElementById("split2");
    s1.style.filter="blur(0px)";
    s2.style.filter="none";
    modal.style.zIndex=-21;
}
var hw=window.innerwidth;
window.onresize=function(){
hw=window.innerWidth;
}
function changen(n){
    if(hw<=1290){
        var s1=document.getElementById("split2");
        var s2=document.getElementById("split2b");
        var s3=document.getElementById("split2c");
        var s4=document.getElementById("split2d");
        var s5=document.getElementById("split2e");
        if(n==1){s1.style.zIndex=1;s2.style.zIndex=-21;s3.style.zIndex=-22;s4.style.zIndex=-25;s5.style.zIndex=-26;
            s1.style.position="relative";s2.style.position="fixed";s3.style.position="fixed";s4.style.position="fixed";s5.position="fixed";
                 
            }
        if(n==2){s2.style.zIndex=1;s1.style.zIndex=-21;s3.style.zIndex=-22;s4.style.zIndex=-25;s5.style.zIndex=-26;
            s2.style.position="relative";s1.style.position="fixed";s3.style.position="fixed";s4.style.position="fixed";s5.style.position="fixed";
            
        
            }
        if(n==3){
            s3.style.position="relative";s1.style.position="fixed";s2.style.position="fixed";s4.style.position="fixed";s5.style.position="fixed";
            
            s2.style.zIndex=-22;s1.style.zIndex=-21;s3.style.zIndex=1;s4.style.zIndex=-25;s5.style.zIndex=-26;}
        if(n==4){
            s4.style.position="relative";s1.style.position="fixed";s3.style.position="fixed";s2.style.position="fixed";s5.style.position="fixed";
            s2.style.zIndex=-22;s1.style.zIndex=-21;s3.style.zIndex=-25;s4.style.zIndex=1;s5.style.zIndex=-26;}
        if(n==5){
            s5.style.position="relative";s1.style.position="fixed";s3.style.position="fixed";s4.style.position="fixed";s2.style.position="fixed";
            s2.style.zIndex=-22;s1.style.zIndex=-21;s3.style.zIndex=-25;s4.style.zIndex=-26;s5.style.zIndex=1;}    
    }
    else{
    var s1=document.getElementById("split2");
    var s2=document.getElementById("split2b");
    var s3=document.getElementById("split2c");
    var s4=document.getElementById("split2d");
    var s5=document.getElementById("split2e");
    if(n==1){s1.style.zIndex=1;s2.style.zIndex=-21;s3.style.zIndex=-22;s4.style.zIndex=-25;s5.style.zIndex=-26;}
    if(n==2){s2.style.zIndex=1;s1.style.zIndex=-21;s3.style.zIndex=-22;s4.style.zIndex=-25;s5.style.zIndex=-26;}
    if(n==3){s2.style.zIndex=-22;s1.style.zIndex=-21;s3.style.zIndex=1;s4.style.zIndex=-25;s5.style.zIndex=-26;}
    if(n==4){s2.style.zIndex=-22;s1.style.zIndex=-21;s3.style.zIndex=-25;s4.style.zIndex=1;s5.style.zIndex=-26;}
    if(n==5){s2.style.zIndex=-22;s1.style.zIndex=-21;s3.style.zIndex=-25;s4.style.zIndex=-26;s5.style.zIndex=1;}}
}
var cl=document.getElementById("contacts-list")
function changeb1(){
    var cs=""
}
