function showMessage(response) {
    if (response === "No") {
        updateText("The no button is just for visuals");
        document.getElementsByClassName("image")[0].src = "resources/images/gun.gif";
    }

    if (response === "Yes") {
        updateText("Noot noooot see you on the 14th big boi 😘😘");
        document.getElementsByClassName("image")[0].src = "resources/images/dance.gif";

        // Hide buttons
        document.getElementById("yes-button").remove();
        document.getElementById("no-button").remove();

        // Play the sound
        var buttonSound = document.getElementById("yes-sound");
        buttonSound.play();
    }
}

function updateText(message) {
    document.getElementById("name").style.display = "none";
    document.getElementById("question").textContent = message;
}

document.addEventListener("mousemove", function (event) {
    // Get the mouse coordinates
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    // Get the button element
    var button = document.getElementById("no-button");

    // Get the button's position and size
    var buttonRect = button.getBoundingClientRect();

    // Check if the mouse is close to the button
    if (
        mouseX >= buttonRect.left && mouseX <= buttonRect.right &&
        mouseY >= buttonRect.top && mouseY <= buttonRect.bottom
    ) {
        // Move the button
        moveButton();
    }
});

function moveButton() {
    const noButton = document.getElementById("no-button");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    noButton.style.position = "absolute";

    // Generate random coordinates within the visible container
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    // Apply new coordinates to the button
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    // Play the sound
    var buttonSound = document.getElementById("no-sound");
    buttonSound.play();
}
