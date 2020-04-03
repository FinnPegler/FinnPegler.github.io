document.getElementById("element1").addEventListener("click", hide);
document.getElementById("close").addEventListener('click', hide2);
document.getElementById("minimise").addEventListener('click', minimise);
document.getElementById("bookbutton").addEventListener("click", minimise);

function hide () {
    document.getElementById("element1").className = "hidden";
    document.getElementById("element2").className = "visible";
}

function hide2 () {
    document.getElementById("element2").className = "hidden";
}

function minimise () {
    document.getElementById("element2").className = "hidden";
    document.getElementById("element1").className = "visible";
}