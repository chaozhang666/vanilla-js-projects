var width = 200;
var height = 200;
var color;

const render = () => {
  $('#sq').css('width', width + 'px');
  $('#sq').css('height', height + 'px');
}

render();

$('#color').click(() => {
  color = prompt('Which color you want to change ?');
  $('#sq').css('background-color', color);
})

$('#big').click(() => {
  width += 20;
  height += 20;
  render();
})

$('#small').click(() => {
  width -= 20;
  height -= 20;
  render();
})

$('#clear').click(() => {
  width = 200;
  height = 200;
  render();
})

$('#hide').click(() => {
  $('#sq').fadeOut('slow');
})

$('#show').click(() => {
  $('#sq').fadeIn('slow');
})
