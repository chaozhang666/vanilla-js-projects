var data = [];

// space to &nbsp
function transfer(str) {
  let array = Array.from(str)
  for (let i=0; i<array.length; i++) {
    if (array[i] === ' ' ) {
      array[i] = '&nbsp';
    }
  }
  let processedInput = array.join('');
  return processedInput;
}

if (localStorage.getItem('data') !== null) {
  var data = localStorage.getItem('data');
  data = data.split('🀦');
  render(data);
} 

// add
$('#add').click(()=> {
  event.preventDefault();
  let input = $('#myinput').val();  //get input value
  if (input === '') {
    alert('Please add somethig ...')
  } else {
    input = input.replace(/\s+/g,' ').trim();  // remove extra spaces
    $('#myinput').val('');    // clear input 
    data.push(input);
    render(data)
    localStorage.setItem("data", data.join('🀦'));
  }
})

$('#myinput').keyup(function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});

// delete
$('.todos').click(e => {
  if (e.target.classList.contains('delete')) {
    var target = e.target.parentElement;
  }
  let deleteToDo = target.children[0].innerText;
  data = data.filter(x => x!== deleteToDo)
  render(data)
  localStorage.setItem("data", data.join('🀦'));
})

// render
function render(data) {
  let show = '';
  data.forEach(e => show +=  `
  <li class="list-group-item my-2 d-flex justify-content-between align-items-center">
    <span  class="todo">${ e }</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
  `);
  $('.todos').html(show);
}

// search
const search = $('.search input');
$(search).keyup(()=> {
  let inputValue = search.val();
  if (inputValue  !== '') {
    let newData = data.filter(x => x.includes(inputValue))
    console.log(newData)
    render(newData);
  } else {
    render(data);
  }
})

