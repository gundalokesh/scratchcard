let scrach = document.getElementById("skrach");
let ctx = scrach.getContext("2d");
const canvasWidth = scrach.width;
const canvasHeight = scrach.height;
const totalPixels = canvasWidth * canvasHeight;
let screenBlue = new Image();
screenBlue.src = "./Screenshot 2023-04-25 191032.png";


scrach.addEventListener("mousemove", function (e) {
  e.preventDefault();
  if (e.which === 1) {
    let x = e.offsetX;
    let y = e.offsetY;

    let emptyPixels = getEmptyPixelsCount();
    if (emptyPixels <= totalPixels / 2) {
      ctx.beginPath();
      ctx.globalCompositeOperation = "destination-out";
      ctx.arc(x, y, 30, 0, 360, false);
      ctx.fill();
    } else {
      ctx.clearRect(0,0,canvasWidth,canvasHeight);
      scrach.style.display = "none";
    }
  }
});


function getEmptyPixelsCount(){
  let imgdata=ctx.getImageData(0 , 0 ,canvasWidth , canvasHeight).data;
  let count = 0;
  if (imgdata) {
      for (let index = 3; index < imgdata.length; index += 4) {
          if (imgdata[index] === 255) {
            count += 1;
          }
      }
  };

  return count;

}


screenBlue.onload = function init() {
  ctx.drawImage(screenBlue, 0, 0, 200, 200);
};

scrach.addEventListener("touchmove", ontouchmove);
function ontouchmove(e) {
  e.preventDefault();
  let x = e.touches[0].clientX - scrach.getBoundingClientRect().left;
  let y = e.touches[0].clientY - scrach.getBoundingClientRect().top;

  ctx.beginPath();

  ctx.globalCompositeOperation = "destination-out";
  ctx.arc(x, y, 30, 0, 360, false);
  ctx.fill();
}



