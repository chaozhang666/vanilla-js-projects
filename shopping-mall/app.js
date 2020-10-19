const luxuryData = [
  {
      name: 'House',
      img:"https://th.bing.com/th/id/OIP.qtMmLZcmfB0zErt7Ul2N7wHaDS?w=322&h=155&c=7&o=5&dpr=2&pid=1.7",
      price:"$2,000,000"
  },
  {
      name: 'Car',
      img:"https://th.bing.com/th/id/OIP.JOJfhEHyZJDCFOi0RqurdwHaEK?w=285&h=180&c=7&o=5&dpr=2&pid=1.7",
      price:"$200,150"
  },
  {
      name: 'boat',
      img:"https://th.bing.com/th/id/OIP.o4PxKPGlvXkVYEXr2n7suAHaFj?w=228&h=180&c=7&o=5&dpr=2&pid=1.7",
      price:"$500,000"
  }
];

const electronicsData = [
  {
    name: 'Phone',
    img:"https://th.bing.com/th/id/OIP.k_TGVWMQs9ckotv5JRlKqwHaHa?w=177&h=180&c=7&o=5&dpr=2&pid=1.7",
    price:"$1,000"
  },    
  {
      name: 'Computer',
      img:"https://i.pinimg.com/originals/5a/26/b5/5a26b577ca7a30feee8a150bf43edd6e.png",
      price:"2,340"
  },
];

const foodData = [
  {
    name: 'Soda',
    img:"https://4.bp.blogspot.com/-RTPB_hLWdsE/V4WXMOnSfsI/AAAAAAAAFa0/iAwDTDiub74V2m-YDkQjGkJxu-ludW13ACLcB/w1200-h630-p-k-nu/WHY+YOU+SHOULD+STOP+DRINKING+SODFT+DRINKS+SODAS+COKE+NUTALK+NUTRITIONAL+TALK.png",
    price:"$1"
  }
];

const makeData = (arr) => {
  arr.forEach(e=>{
    html+=`
    <div class="col-4 p-2 ">
      <div class="m-4 shadow p-2">
          <h1>${e.name}</h1>
          <img src=${e.img} alt="" >
          <h1>${e.price}</h1>
          <button class="btn btn-outline-dark mybtn">Buy</button>
          <h1></h1>
      </div>
    </div>`
    })
}

var html;

$('#l').click(()=> {
  html = '';
  makeData(luxuryData);
  $("#productrowone").html(html);
  buy();
})

$('#e').click(()=> {
  html = '';
  makeData(electronicsData);
  $("#productrowone").html(html);
  buy();
})

$('#f').click(()=> {
  html = '';
  makeData(foodData);
  $("#productrowone").html(html);
  buy();
})

$('#title').click(()=> {
  $("#productrowone").html(`<img src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_663974538_353364.jpg" alt="" style="width: 1100px; height: 600px" class="m-5">`);
})
