const grid = $('.grid');
const mole = $('.mole');
var time = 60;
var score = 0;
var hitPosition; 

const randomGrid = () => {
  for (e of grid) {
    $(e).removeClass('mole')
  }
  let ramdomNumber = Math.floor(Math.random() * 9) 
  $(grid[ramdomNumber]).addClass('mole');
  hitPosition = grid[ramdomNumber].id 
}

$(grid).click((e) => {
  if (e.target.id === hitPosition) {
    console.log('hit !');
    score += 1;  
    $('#score').text(score);
  }
})

setInterval(randomGrid, 1000);

setInterval(()=> {
  time--;
  $('#time').text(time)
  if (time === -1) {
    alert(`Game Over ! Your final score is: ${score} !`);
    location.reload();
  }
}, 500)

