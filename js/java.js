var cvPopup = document.getElementById("modal");
var button = document.getElementById("cv");
var span = document.getElementsByClassName("close")[0];

button.onclick = function () {
    cvPopup.style.display = "block";
}

span.onclick = function () {
    cvPopup.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == cvPopup) {
        cvPopup.style.display = "none";
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        cvPopup.style.display = "none";
    }
    }
)