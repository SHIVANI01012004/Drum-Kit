
var i =0;
while(i<document.querySelectorAll(".drum").length){
document.querySelectorAll("button")[i].addEventListener("click", handleClick);
function handleClick(){
    var buttonInerHTML = this.innerHTML;
    makeSound(buttonInerHTML);
    buttonAnimation(buttonInerHTML);
}
i++;
}

document.addEventListener("keypress", byKey);
function byKey(event) {
    makeSound(event.key);
    buttonAnimation(event.key);

}

function makeSound(key) {
    switch (key) {
        case "a":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break; 
            case "s":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break; 
            case "d":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break; 
            case "f":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break; 
            case "g":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break; 
            case "h":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break; 
            case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;     
        
            default: console.log(buttonInerHTML);

            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 200);
}