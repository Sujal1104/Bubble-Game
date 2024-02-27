
var time=60;
 var hitrn=0;
 var score=0;


 function incscr(){

score +=10;
document.querySelector("#scoreval").textContent = score;

 } 

 function scorehit()
 {
 
    hitrn=Math.floor(Math.random()*10); 
    document.querySelector("#ranhit").innerHTML = hitrn;
     
 }


function makeabub(){
    var clutter =" ";
    for(var i=0;i<=167;i++)
    {
       var rn=Math.floor(Math.random()*10);
       clutter +=`  <div class="bubble ">
    ${rn}
   </div>`
    } 
    document.querySelector("#ebtm").innerHTML=clutter;
}


function setimer()
{
 

    var timer=setInterval(function() {

 if(time > 0)
{
    time--;
document.querySelector("#timerval").textContent = time ;

} 

else{
    clearInterval(timer);

} 
if(time == 0)
{
    alert('time puro bhai');
}
}, 1000);
}
 
  
document.querySelector("#ebtm").addEventListener( "click" ,function(dets){
 
    var clicknum= Number(dets.target.textContent);

 
    if(clicknum===hitrn)
    {
        incscr();
        makeabub();
        scorehit();
    }

})

setimer()
makeabub()
incscr()
scorehit() 
