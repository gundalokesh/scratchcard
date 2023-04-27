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
    ctx.closepath();
  }
});

var screenBlue = new Image();
screenBlue.src = "./Screenshot 2023-04-25 191032.png";

screenBlue.onload = function init() {
  ctx.drawImage(screenBlue, 0, 0, 200, 200);
};

