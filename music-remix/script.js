var is_play = false;
var play = new Audio('./yijianmei-trap.mp3');
const keyClass = document.querySelectorAll('.bb');

keyClass.forEach(e => e.addEventListener('click', function() {
  switch (e.innerHTML) {
    case 'w':
        let tom1 = new Audio("./sounds/tom-1.mp3");
        tom1.play();
        break;
    case 'a':
        let tom2 = new Audio("./sounds/tom-2.mp3");
        tom2.play();
        break;
    case 's':
        let tom3 = new Audio("./sounds/tom-4.mp3");
        tom3.play();
        break;
    case 'd':
        let tom4 = new Audio("./sounds/tom-2.mp3");
        tom4.play();
        break;
    case 'j':
        let crash = new Audio("./sounds/crash.mp3");
        crash.play();
        break;
    case 'k':
        let kick = new Audio("./sounds/kick-bass.mp3");
        kick.play();
        break;
    case 'l':
        let snare = new Audio("./sounds/snare.mp3");
        snare.play();
        break;

    case 'e':
        let e = new Audio("./new-sounds/Sax1.mp3");
        e.play();
        break;
    case 'r':
        let r = new Audio("./new-sounds/Sax2.mp3");
        r.play();
        break;
    case 't':
        let t = new Audio("./new-sounds/Sax3.mp3");
        t.play();
        break;     

    case 'y':
        let y = new Audio("./new-sounds/DJ-Lazer-1.mp3");
        y.play();
        break;
    case 'u':
        let u = new Audio("./new-sounds/DJ-Lazer-2.mp3");
        u.play();
        break;
    case 'i':
        let i = new Audio("./new-sounds/DJ-Lazer-3.mp3");
        i.play();
        break;   

    case 'f':
        let f = new Audio("./new-sounds/DJ-Scratch-1.mp3");
        f.play();
        break;
    case 'g':
        let g = new Audio("./new-sounds/DJ-Scratch-2.mp3");
        g.play();
        break;
    case 'h':
        let h = new Audio("./new-sounds/DJ-Scratch-3.mp3");
        h.play();
        break;     
  }
  buttonAnimation(e.innerHTML);
}));

document.addEventListener('keypress', function(e) {
  switch (e.key) {
    case 'w':
        let tom1 = new Audio("./sounds/tom-1.mp3");
        tom1.play();
        break;
    case 'a':
        let tom2 = new Audio("./sounds/tom-2.mp3");
        tom2.play();
        break;
    case 's':
        let tom3 = new Audio("./sounds/tom-4.mp3");
        tom3.play();
        break;
    case 'd':
        let tom4 = new Audio("./sounds/tom-2.mp3");
        tom4.play();
        break;
    case 'j':
        let crash = new Audio("./sounds/crash.mp3");
        crash.play();
        break;
    case 'k':
        let kick = new Audio("./sounds/kick-bass.mp3");
        kick.play();
        break;
    case 'l':
        let snare = new Audio("./sounds/snare.mp3");
        snare.play();
        break;

    case 'e':
        let e = new Audio("./new-sounds/Sax1.mp3");
        e.play();
        break;
    case 'r':
        let r = new Audio("./new-sounds/Sax2.mp3");
        r.play();
        break;
    case 't':
        let t = new Audio("./new-sounds/Sax3.mp3");
        t.play();
        break;     

    case 'y':
        let y = new Audio("./new-sounds/DJ-Lazer-1.mp3");
        y.play();
        break;
    case 'u':
        let u = new Audio("./new-sounds/DJ-Lazer-2.mp3");
        u.play();
        break;
    case 'i':
        let i = new Audio("./new-sounds/DJ-Lazer-3.mp3");
        i.play();
        break;   

    case 'f':
        let f = new Audio("./new-sounds/DJ-Scratch-1.mp3");
        f.play();
        break;
    case 'g':
        let g = new Audio("./new-sounds/DJ-Scratch-2.mp3");
        g.play();
        break;
    case 'h':
        let h = new Audio("./new-sounds/DJ-Scratch-3.mp3");
        h.play();
        break;     
  }
  buttonAnimation(e.key);
})

function buttonAnimation(currentKey) {
  const currentKeyClass = document.querySelector('.' + currentKey).classList;
  currentKeyClass.add('pressed');
  setTimeout( function() {
    currentKeyClass.remove('pressed');
  } , 100)
}

// $('.container').addClass('animate__animated animate__pulse');

$('#play').click(()=> {
    play.play();
    $('.cover').removeClass('animate__rollIn')
    $('.cover').addClass('animate__animated animate__pulse animate__infinite')
})

$('#pause').click(()=> {
    play.pause();
    $('.cover').removeClass('animate__animated animate__pulse animate__infinite')
})

$('#replay').click(()=> {
    play.load();
    play.play();
    $('.cover').addClass('animate__animated animate__pulse animate__infinite')
})
