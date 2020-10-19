const totalTime = 7500;
const breatheTime = 3000;
const holdTime = 1500;
const container = document.getElementById("container");

function breathAnimation() {

    $("#text").html("Breathe In !");
    container.className = "container container-grow";
    // $("#container").addClass("container-grow");
    setTimeout(()=> {
        $("#text").html("Hold !");
        
        setTimeout(()=> {
            $("#text").html("Breathe Out !");
            // $(".container").addClass("container-shrink");
            container.className = "container container-shrink";
        }, holdTime);
    }, breatheTime);
}

breathAnimation();
setInterval(breathAnimation, totalTime);





