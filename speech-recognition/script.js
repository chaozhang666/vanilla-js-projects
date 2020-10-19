let message = document.getElementById('msg')

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

let recognition = new window.SpeechRecognition()

// Step 1: start recognition:
recognition.start()

// Step 2: process recognition
recognition.addEventListener('result', (e) => {
    let result = e.results[0][0].transcript
    let precision = e.results[0][0].confidence
    precision = Math.floor(precision * 100) + '%'
    message.innerHTML += `<h2 id='line'> <span id='r'> ${result}</span> --------------- <span id='p'>precision: ${precision}</span> </h2>` 

});

// step 3: end recognition 
recognition.addEventListener('end', () => {
    message.innerHTML += ' '
    recognition.start()
});

function clean() {
    message.innerHTML = ''
}

