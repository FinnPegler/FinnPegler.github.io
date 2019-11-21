//Task 1
function changeToOrange(event) {
	event.target.classList.toggle("orange")
}

function changeToCyan(event) {
	event.target.classList.toggle("cyan")
}

const box = document.querySelectorAll("#box")

for (var i = 0 ; i < box.length; i++){
	box[i].addEventListener("click", changeToOrange)
}

for (var i = 0 ; i < box.length; i++){
	box[i].addEventListener("mouseover", changeToCyan)
}

//Task 2
const img = document.querySelectorAll("img");
const img2 = document.querySelectorAll(".hidden");

function changeImg(event) {
	event.target.classList.toggle("hidden");
    img2[0].className = ("topimages");
    
}

img[0].addEventListener("click", changeImg);

