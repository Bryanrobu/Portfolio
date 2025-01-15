var cvPopup = document.getElementById("modal");
var button = document.getElementById("cv");

button.onclick = function () {
    cvPopup.style.display = "block";
}

window.onclick = function (event) {
    if (event.target == cvPopup) {
        cvPopup.style.display = "none";
    }
}