//Event listener is used to perform action when an event is detected then the corresponding function is called//
var numberofdrums = document.querySelectorAll(".drum").length;//for the number of sounds

//loop to run into all the buttons//

for (var i = 0; i < numberofdrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        //this keyword is used to get the identity of which element is triggered when an event listener called.//

        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        makeAnimation(buttonInnerHtml);
    });
}

// for keyboard press//
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    makeAnimation(event.key);
});



function makeSound(key) {
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            break;
    }
}
function makeAnimation(currentKey) {
    var selbutton = document.querySelector("." + currentKey);
    selbutton.classList.add("pressed");
    setTimeout(function () {
        selbutton.classList.remove("pressed");
    }, 100);
}