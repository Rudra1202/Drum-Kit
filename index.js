function musicanimation(current) {
    document.querySelector("." + current).classList.add("pressed");
    setTimeout(() => {
        document.querySelector("." + current).classList.remove("pressed");
    }, 100);
}
function music(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        default:
            break;
    }

}

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        music(this.innerHTML);
        musicanimation(this.innerHTML);
    })
}

document.addEventListener("keypress", function (event) {
    music(event.key);
    musicanimation(event.key);
})

