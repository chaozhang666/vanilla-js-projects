
function home() {
  event.preventDefault()
  document.getElementById('title').innerHTML = 'Home';
  document.getElementById('container').innerHTML = `
  <h1>This is the home !</h1>
  <img src="./1.jpeg" alt="" >  
  <img src="./3.jpg" alt="">   
  <img src="./1.jpeg" alt="">   
  <h2>My name is chao !</h2>
  `
}

function app() {
  event.preventDefault()
  document.getElementById('title').innerHTML = 'App';
  document.getElementById('container').innerHTML = `
  <div class="line1"> 
    <img src="./1.jpeg" alt="" >  
    <a href="https://hero-wars.com/?hl=en">
        <img src="./2.png" alt="">  
    </a>
    <img src="./3.jpg" alt="">   
    <img src="./1.jpeg" alt="">   
  </div>

  <div class="line2"> 
    <img src="./1.jpeg" alt="" >  
    <a href="https://hero-wars.com/?hl=en">
        <img src="./2.png" alt="" >  
    </a>
    <img src="./3.jpg" alt="" >   
    <img src="./1.jpeg" alt="" >   
  </div>

  <div class="line3"> 
    <img src="./1.jpeg" alt="" >  
    <a href="https://hero-wars.com/?hl=en">
        <img src="./2.png" alt="">  
    </a>
    <img src="./3.jpg" alt="" >   
    <img src="./1.jpeg" alt="">   
  </div>
  `
}

function me() {
  event.preventDefault()
  document.getElementById('title').innerHTML = 'Me';
  document.getElementById('container').innerHTML = `
  <h1>Hi, I am Chao !</h1>
  `
}
