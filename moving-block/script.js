var pos_x = 0;
var pos_y = 0;
const step = 50;
var square = document.getElementById("sq");   

function checkIsOverBorder() {
  (pos_x < 0) && (pos_x = 0);
  (pos_y < 0) && (pos_y = 0);
  (pos_x > 540) && (pos_x = 540);
  (pos_y > 540) && (pos_y = 540);
  square.style.top = pos_y + "px"; 
  square.style.left = pos_x + "px"; 
}

document.addEventListener('keypress', function(p) {

  if(p.key ==="w"){
    pos_y -= step; 
    square.style.top = pos_y + "px"; 

  }

  if(p.key ==="s"){
    pos_y += step; 
    square.style.top = pos_y + "px"; 

  } 

  if(p.key ==="a"){
    pos_x -= step; 
    square.style.left = pos_x + "px"; 

  }

  if(p.key ==="d"){
    pos_x += step; 
    square.style.left = pos_x + "px"; 
  }
  checkIsOverBorder()
})

