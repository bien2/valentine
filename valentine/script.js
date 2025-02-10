let count = 0;

function yesButtonFunction(button) {
    if (count === 0) {
        button.textContent = "SURE!";
        document.querySelector("h1").textContent = "CAN I ASK A QUESTION?";
        document.getElementById("gifImage").src = "gif/potato_ask.gif";
    }

    if (count === 1) {
        button.textContent = "YES";
        document.querySelector("h1").textContent = "WILL YOU BE MY VALENTINE?";
        document.getElementById("gifImage").src = "gif/potato_will_you_be_my_valentine.gif";
        document.querySelector(".no-btn").style.display = "block";
    }

    if (count >= 2) {
        document.querySelector("h1").textContent = "THANK YOU!🥰🥰🥰";
        document.getElementById("gifImage").src = "gif/potato_thank_you.gif";
        document.querySelector(".no-btn").style.display = "none";
        document.querySelector(".yes-btn").style.display = "none";
    }

    count++;
}

function noButtonFunction(button) {
    if (count === 2) {
        button.textContent = "NOPE";
        document.querySelector("h1").textContent = "PLEASE?";
        document.getElementById("gifImage").src = "gif/potato_shock.gif";
    }

    if (count === 3) {
        button.textContent = "SORRY";
        document.querySelector("h1").textContent = "😭😭😭";
        document.querySelector(".yes-btn").textContent = "OKAY FINE";
        document.getElementById("gifImage").src = "gif/potato_no_emotion.gif";
    }

    if (count === 4) {
        button.textContent = "I SAID NO!";
        document.querySelector(".yes-btn").textContent = "OKAY FINE";
        document.querySelector("h1").textContent = "PLEASEEEEEEEEEEEEEE?????";
        document.getElementById("gifImage").src = "gif/potato_annoyed.gif";
    }
    if (count === 5) {
        document.querySelector(".yes-btn").textContent = "SAY YES";
    } else if(count === 6) {
        document.querySelector(".yes-btn").textContent = "PLEASE SAY YES";
    } else if(count === 7) {
        document.querySelector(".yes-btn").textContent = "COULD YOU PLEASE SAY YES";
    } else if(count === 10) {
        document.querySelector(".yes-btn").textContent = "WOULD YOU PLEASE SAY YES";
    }


    if (count >= 5) {
        let yesButton = document.querySelector(".yes-btn");

        // Increase size exponentially
        let currentSize = parseInt(window.getComputedStyle(yesButton).width) || 160;
        let newSize = currentSize * 1.3;

        yesButton.style.width = newSize + "px";
        yesButton.style.height = newSize + "px";
        yesButton.style.fontSize = (newSize / 10) + "px";
        yesButton.style.position = "absolute";
        yesButton.style.transform = "translate(-80%, -50%)";

        if (count === 7) {
            yesButton.style.transform = "translate(-50%, -50%)";
            yesButton.style.left = "50%";
            yesButton.style.top = "50%";
        }

        if (count > 7) {
            yesButton.style.transform = "translate(-50%, -50%)";
        }
    }

    count++;
}
