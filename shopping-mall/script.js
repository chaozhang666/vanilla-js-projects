var total = 0;
var mymoney = 500000000

$('#spent').text(total);
$('#total').text(mymoney);

const buy = () => {
  $('.btn').click((e)=>{
    let name = e.target.parentElement.children[0].innerText;
    let price = e.target.parentElement.children[2].innerText;
    $('#title').text(`Thanks for shopping ${name} !`);
    let num = stringProcess(price)
    total += num;
    mymoney -= num;
    $('#spent').text(total);
    $('#total').text(mymoney);
  })
  
  const stringProcess = (str) => {
    let arr = str.split("");
    arr = arr.filter(x => (x!=='$' && x!==',' && x!==' '));
    let newstr = arr.join('');
    return +newstr;
  } 
}

