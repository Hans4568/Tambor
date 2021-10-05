var ien=document.querySelectorAll('.tambor').length;i
for (var i=0;i<ien;i++){
    document.querySelectorAll(',tambor')[i].addEventListener('click',funtion())
        var este=this.innerHTML;


        DarPlay(este);
}

function DarPlay(elemento){
    switch(elemento){
        case "a":
            var kick = new audio("audio/kick.wav");
            crash.play();
            break;
        case "s":
            var apenhat = new audio("audio/openhat.wav");
            crash.play();
            break;
        case "d":
            var ride = new audio("audio/ride.mp3");
            crash.play();
            break;
         case "f":
            var snare = new audio("audio/snare.wav");
            crash.play();
            break;
        case "g":
            var tink = new audio("audio/tink.wav");
            crash.play();
            break;
         case "h":
                var tom = new audio("audio/tom.wav");
                crash.play();
                break;

    };
}


function Animation(elemento){
    var clasedelemto=document.querySelector('.'+elemento);
    clasedelemto.classList.add("pressed");

    setTimeout(function(){ clasedelemto.classList.remove("pressed");})
}