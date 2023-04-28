var scrach = document.getElementById("skrach");
var ctx = scrach.getContext("2d");

scrach.addEventListener("mousemove", function (e) {
  e.preventDefault();
  if (e.which === 1) {
    let x = e.offsetX;
    let y = e.offsetY;

    ctx.beginPath();
    
    ctx.globalCompositeOperation = "destination-out";
    ctx.arc(x, y, 30, 0, 360, false);
    ctx.fill();
    
    console.log("mousemove");

    
  }
  
  
  



});

var screenBlue = new Image();
screenBlue.src = "./Screenshot 2023-04-25 191032.png";

screenBlue.onload = function init() {
  ctx.drawImage(screenBlue, 0, 0, 200, 200);
};


scrach.addEventListener("touchmove", ontouchmove)
 function ontouchmove (e) {

 e.preventDefault();
  
    let x =  e.touches[0].clientX -  scrach.getBoundingClientRect().left;
    let y = e.touches[0].clientY -scrach.getBoundingClientRect().top;
 
    ctx.beginPath();
    
    ctx.globalCompositeOperation = "destination-out";
    ctx.arc(x, y, 30, 0, 360, false);
    ctx.fill();
   
   

};
  

canvasWidth  = scrach.width,
      canvasHeight = scrach.height
      console.log(canvasWidth ,canvasHeight );

var totalpixel=canvasWidth*canvasHeight ;
console.log(totalpixel);



 

















