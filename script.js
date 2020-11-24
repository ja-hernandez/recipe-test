// window.addEventListener("load", main)
window.onload = main;

function main() {
    let directionButton = document.getElementById("directions-start");
    directionButton.onclick = nextDirection;

}

function nextDirection () {
    let directionButton = document.getElementById("directions-start");
    let currentPosition = Number(directionButton.getAttribute("data-current"));
    let newPosition = currentPosition + 1;
    
    //Get list of <li> inside <ol> directions-list

    let directionsList = document.getElementById('directions-list').getElementsByTagName("li");
    
    if (currentPosition === directionsList.length) {
        return;
    }
    let currentDirection = directionsList[currentPosition];

    currentDirection.style.color = "green";

    if (currentPosition > 0) {
        let lastDirection = directionsList[currentPosition - 1];
        lastDirection.style.color = "gray";
        lastDirection.style.textDecoration = "line-through";
        }
    
        directionButton.setAttribute("data-current", newPosition);
        directionButton.innerText = "Next";
}